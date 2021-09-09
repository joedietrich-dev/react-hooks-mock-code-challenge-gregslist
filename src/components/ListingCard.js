import React, { useState } from "react";

function ListingCard({ id, image, description, location, onDeleteClick = f => f }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={() => setIsFavorite(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorite(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDeleteClick(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
