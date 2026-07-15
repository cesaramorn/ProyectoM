import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";

import "./RecipeCard.css";

function RecipeCard({ recipe, onEdit, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((prev) => !prev);

  const tagsEl = Array.isArray(recipe.etiquetas) && recipe.etiquetas.length > 0 && (
    <div className="recipe-card-tags">
      {recipe.etiquetas.map((tag, i) => (
        <span key={i} className="recipe-card-tag">{tag}</span>
      ))}
    </div>
  );

  return (
    <article className={`recipe-card${expanded ? " recipe-card--expanded" : ""}`} onClick={handleToggle}>
      {!expanded && (
        <div className="recipe-card-header">
          {recipe.imagen && (
            <img
              className="recipe-card-image"
              src={recipe.imagen}
              alt={recipe.titulo}
              loading="lazy"
            />
          )}
          <div className="recipe-card-info">
            <h2 className="recipe-card-title">{recipe.titulo}</h2>
            {recipe.descripcion && (
              <p className="recipe-card-subtitle">{recipe.descripcion}</p>
            )}
            {recipe.tiempo && (
              <p className="recipe-card-time">⏱ {recipe.tiempo}</p>
            )}
            {tagsEl}
          </div>
        </div>
      )}

      {expanded && (
        <div className="recipe-card-body" onClick={(e) => e.stopPropagation()}>
          {recipe.imagen ? (
            <div className="recipe-card-hero-wrapper">
              <img
                className="recipe-card-hero"
                src={recipe.imagen}
                alt={recipe.titulo}
                loading="lazy"
              />
              <div className="recipe-card-hero-overlay" />
              <h2 className="recipe-card-hero-title">{recipe.titulo}</h2>
            </div>
          ) : (
            <h2 className="recipe-card-body-title">{recipe.titulo}</h2>
          )}

          <div className="recipe-card-meta">
            {recipe.descripcion && (
              <p className="recipe-card-subtitle">{recipe.descripcion}</p>
            )}
            {recipe.tiempo && (
              <p className="recipe-card-time">⏱ {recipe.tiempo}</p>
            )}
          </div>

          {tagsEl}

          {recipe.ingredientes?.length > 0 && (
            <div>
              <h3 className="recipe-card-section-title">Ingredientes</h3>
              <ul className="recipe-card-ingredients">
                {recipe.ingredientes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {recipe.preparacion?.length > 0 && (
            <div>
              <h3 className="recipe-card-section-title">Preparación</h3>
              <ol className="recipe-card-preparation">
                {recipe.preparacion.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="recipe-card-actions">
            <button
              className="recipe-card-btn recipe-card-btn--edit"
              onClick={() => onEdit(recipe)}
            >
              Editar
            </button>
            <button
              className="recipe-card-btn recipe-card-btn--delete"
              onClick={() => onDelete(recipe.id)}
            >
              Eliminar
            </button>
          </div>

          <div className="recipe-card-collapse">
            <button className="recipe-card-btn--collapse" onClick={handleToggle}>
              <FiChevronUp /> Contraer
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default RecipeCard;
