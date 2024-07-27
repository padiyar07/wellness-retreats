import React from 'react';

const RetreatList = ({ retreats }) => {
  return (
    <div className="retreat-list">
      {retreats.map((retreat) => (
        <div key={retreat.id} className="retreat">
          <img src={retreat.image || 'https://via.placeholder.com/300x200'} alt={retreat.title} />
          <h2>{retreat.title}</h2>
          <p>{retreat.description}</p>
          <p><strong>Date:</strong> {retreat.date}</p>
          <p><strong>Location:</strong> {retreat.location}</p>
          <p><strong>Price:</strong> ${retreat.price}</p>
        </div>
      ))}
    </div>
  );
};

export default RetreatList;
