import { useCallback, useEffect, useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

import supabase from "../services/supabaseClient";

import RecipeCard from "../components/recipes/RecipeCard";
import RecipeForm from "../components/recipes/RecipeForm";
import { parsePgArray, toPgArray } from "../utils/helpers";

import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) return recipes;
    const q = searchQuery.toLowerCase();
    return recipes.filter((r) => {
      const matchTitle = r.titulo?.toLowerCase().includes(q);
      const matchTags = r.etiquetas?.some((tag) => tag.toLowerCase().includes(q));
      return matchTitle || matchTags;
    });
  }, [searchQuery, recipes]);

  const fetchRecipes = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("Recetas")
        .select("*");

      if (error) throw error;

      setRecipes(data.map((r) => ({ ...r, etiquetas: parsePgArray(r.etiquetas) })));
      setError(null);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError(err.message || "Error al cargar las recetas");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const handleCreate = () => {
    setEditingRecipe(null);
    setShowForm(true);
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      let imagenUrl = editingRecipe?.imagen || null;

      if (formData.imagenFile) {
        const file = formData.imagenFile;
        const filePath = `${Date.now()}_${file.name}`;

        const { error: uploadError } = await supabase.storage
          .from("recetas")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("recetas")
          .getPublicUrl(filePath);

        imagenUrl = urlData.publicUrl;
      }

      const dbData = { ...formData, imagen: imagenUrl, etiquetas: toPgArray(formData.etiquetas) };
      delete dbData.imagenFile;

      if (editingRecipe) {
        const { error } = await supabase
          .from("Recetas")
          .update(dbData)
          .eq("id", editingRecipe.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("Recetas")
          .insert([dbData]);

        if (error) throw error;
      }

      setShowForm(false);
      setEditingRecipe(null);
      setError(null);
      fetchRecipes();
    } catch (err) {
      console.error("Recipe operation error:", err);
      setError(err.message || "Error al guardar la receta");
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingRecipe(null);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("¿Eliminar esta receta?");
    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from("Recetas")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setError(null);
      fetchRecipes();
    } catch (err) {
      console.error("Error deleting recipe:", err);
      setError(err.message || "Error al eliminar la receta");
    }
  };

  if (loading) return null;

  return (
    <section className="recipes-page">
      <div className="recipes-header">
        <h1 className="page-title">¿Qué comemos esta semana?</h1>
        {error && (
          <p className="recipes-error">{error}</p>
        )}
        <button className="recipes-add-btn" onClick={handleCreate}>
          Añadir Receta
        </button>
      </div>

      <div className="recipes-search-wrapper">
        <FiSearch className="recipes-search-icon" />
        <input
          className="recipes-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por título o etiqueta…"
        />
        {searchQuery && (
          <button className="recipes-search-clear" onClick={() => setSearchQuery("")}>
            <FiX />
          </button>
        )}
      </div>

      {showForm && (
        <RecipeForm
          recipe={editingRecipe}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}

      <div className="recipes-list">
        {filteredRecipes.length === 0 && !loading && (
          <p className="recipes-empty">No se encontraron recetas</p>
        )}
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default Recipes;
