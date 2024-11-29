import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User2, MapPin } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export function Header() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="text-2xl font-bold text-white mr-8">
            amazon
          </Link>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs">Deliver to</span>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Select location</span>
              </div>
            </div>
          </div>

          <div className="flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="w-full py-2 px-4 rounded-lg text-black"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-yellow-400 rounded-r-lg">
                <Search className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to={user?.role === 'admin' ? '/admin' : '/profile'} className="flex flex-col">
                  <span className="text-xs">Hello, {user?.name}</span>
                  <span className="font-bold">Account & Lists</span>
                </Link>
                <Link to="/orders" className="flex flex-col">
                  <span className="text-xs">Returns</span>
                  <span className="font-bold">& Orders</span>
                </Link>
              </>
            ) : (
              <Link to="/login" className="flex flex-col">
                <span className="text-xs">Hello, sign in</span>
                <span className="font-bold">Account & Lists</span>
              </Link>
            )}

            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="w-8 h-8" />
              <span className="font-bold">Cart</span>
            </Link>
          </nav>
        </div>

        <nav className="flex items-center space-x-6 py-2 text-sm">
          <Link to="/all" className="hover:text-yellow-400">All</Link>
          <Link to="/deals" className="hover:text-yellow-400">Today's Deals</Link>
          <Link to="/customer-service" className="hover:text-yellow-400">Customer Service</Link>
          <Link to="/registry" className="hover:text-yellow-400">Registry</Link>
          <Link to="/gift-cards" className="hover:text-yellow-400">Gift Cards</Link>
          <Link to="/sell" className="hover:text-yellow-400">Sell</Link>
        </nav>
      </div>
    </header>
  );
}