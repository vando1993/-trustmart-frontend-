import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(1250); // Pontos de fidelidade do usuário

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🎉 Frete grátis para membros Prata acima de R$ 80! Cadastre-se e ganhe pontos!
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">
              TM
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TrustMart</h1>
              <p className="text-xs text-gray-500">Your trusted store</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Points Display */}
            <div className="hidden sm:flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-orange-700">
                {userPoints.toLocaleString()} pts
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-4 pr-12 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bg-blue-600 hover:bg-blue-700"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Produtos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Eletrônicos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Moda
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Casa & Jardim
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Esportes
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                🏆 Programa de Fidelidade
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Contato
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Produtos
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Eletrônicos
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Moda
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Casa & Jardim
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Esportes
              </a>
              <a href="#" className="block py-2 text-orange-600 hover:text-orange-700 font-medium">
                🏆 Programa de Fidelidade
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contato
              </a>
              <div className="pt-2 border-t">
                <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-orange-700">
                    {userPoints.toLocaleString()} pontos
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

