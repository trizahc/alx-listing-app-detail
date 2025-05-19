import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-full max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
