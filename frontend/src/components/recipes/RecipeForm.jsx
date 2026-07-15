import { useState } from "react";

import "./RecipeForm.css";

function RecipeForm({ recipe, onSubmit, onCancel }) {
  const isEditing = Boolean(recipe);

  const [titulo, setTitulo] = useState(recipe?.titulo ?? "");
  const [descripcion, setDescripcion] = useState(recipe?.descripcion ?? "");
  const [imagenFile, setImagenFile] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(recipe?.imagen ?? "");
  const [tiempo, setTiempo] = useState(recipe?.tiempo ?? "");
  const [ingredientes, setIngredientes] = useState(recipe?.ingredientes?.join("\n") ?? "");
  const [preparacion, setPreparacion] = useState(recipe?.preparacion?.join("\n") ?? "");
  const [tagInput, setTagInput] = useState("");
  const [etiquetas, setEtiquetas] = useState(recipe?.etiquetas ?? []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (imagenPreview && imagenPreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagenPreview);
    }
    setImagenFile(file);
    setImagenPreview(URL.createObjectURL(file));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim().replace(/,/g, "");
      if (tag && !etiquetas.includes(tag)) {
        setEtiquetas([...etiquetas, tag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    setEtiquetas(etiquetas.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      imagenFile,
      tiempo: Number(tiempo) || null,
      ingredientes: ingredientes.split("\n").filter(Boolean),
      preparacion: preparacion.split("\n").filter(Boolean),
      etiquetas,
    });
  };

  return (
    <div className="recipe-form-overlay" onClick={onCancel}>
      <form className="recipe-form" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h2 className="recipe-form-title">
          {isEditing ? "Editar receta" : "Nueva receta"}
        </h2>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Título *</label>
          <input
            className="recipe-form-input"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            placeholder="Nombre de la receta"
          />
        </div>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Descripción</label>
          <input
            className="recipe-form-input"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Breve descripción"
          />
        </div>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Imagen</label>
          {imagenPreview && (
            <img
              className="recipe-form-image-preview"
              src={imagenPreview}
              alt="Vista previa"
            />
          )}
          <input
            className="recipe-form-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Tiempo de preparación (minutos)</label>
          <input type="number"
            className="recipe-form-input"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
          />
        </div>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Etiquetas</label>
          <input
            className="recipe-form-input"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Escribe y pulsa Enter para añadir"
          />
          {etiquetas.length > 0 && (
            <div className="recipe-form-tag-list">
              {etiquetas.map((tag, i) => (
                <span key={i} className="recipe-form-tag-chip">
                  {tag}
                  <button
                    type="button"
                    className="recipe-form-tag-remove"
                    onClick={() => removeTag(i)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Ingredientes</label>
          <textarea
            className="recipe-form-textarea"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            placeholder="Un ingrediente por línea"
            rows={5}
          />
        </div>

        <div className="recipe-form-field">
          <label className="recipe-form-label">Preparación</label>
          <textarea
            className="recipe-form-textarea"
            value={preparacion}
            onChange={(e) => setPreparacion(e.target.value)}
            placeholder="Paso a paso, un paso por línea"
            rows={6}
          />
        </div>

        <div className="recipe-form-actions">
          <button type="button" className="recipe-form-cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="recipe-form-submit">
            {isEditing ? "Guardar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
