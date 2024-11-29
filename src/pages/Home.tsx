import React from 'react';
import { ProductGrid } from '../components/product/ProductGrid';
import { FEATURED_PRODUCTS } from '../data/products';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Hero Banner"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Prime Day Deals</h2>
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Prime Day"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <button className="text-blue-600 hover:underline">See all deals</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Echo & Alexa</h2>
            <img
              src="https://images.unsplash.com/photo-1544428571-7f7c11e99998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Echo Devices"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <button className="text-blue-600 hover:underline">Shop now</button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Sign up for Prime</h2>
            <img
              src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Prime"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <button className="text-blue-600 hover:underline">Learn more</button>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Today's Deals</h2>
          <ProductGrid products={FEATURED_PRODUCTS} />
        </section>
      </div>
    </div>
  );
}