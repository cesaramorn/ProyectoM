import "./WordCard.css";

const authorColors = {
  cesar: "#f4b400",
  monica: "#a760d3",
};

function WordCard({ word, definition, author }) {
  const sanitized = author
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const color = authorColors[sanitized];

  return (
    <article className="word-card">
      <h3 style={color ? { color } : undefined}>{word}</h3>
      <p>{definition}</p>
    </article>
  );
}
export default WordCard;