import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-contain"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <div className="flex items-baseline">
          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="ml-2 text-sm text-green-600">
            ({product.discount}% off)
          </span>
        </div>
        <div className="text-sm text-blue-600">
          Free Prime Delivery
        </div>
      </div>
    </Link>
  );
}