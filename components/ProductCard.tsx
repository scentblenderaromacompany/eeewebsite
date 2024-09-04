import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="border border-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={}>
        <a>
          <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-bold text-primary mt-2">{product.name}</h2>
          <p className="text-secondary mt-2">Price: ${product.price / 100}</p>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
