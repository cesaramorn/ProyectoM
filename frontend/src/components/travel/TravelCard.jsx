import "./TravelCard.css";

function TravelCard({
  image,
  title,
  date,
  description,
}) {
  return (
    <article className="travel-card">
      <img
        className="travel-card-image"
        src={image}
        alt={title}
        loading="lazy"
      />

      <div className="travel-card-content">
        <h2 className="travel-card-title">
          {title}
        </h2>

        <p className="travel-card-date">
          {date}
        </p>

        <p className="travel-card-description">
          {description}
        </p>
      </div>
    </article>
  );
}

export default TravelCard;