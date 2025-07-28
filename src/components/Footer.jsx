import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">
                TM
              </div>
              <div>
                <h3 className="text-xl font-bold">TrustMart</h3>
                <p className="text-sm text-gray-400">Your trusted store</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              TrustMart is your online store with the best loyalty program in the market. 
              Quality products, fast delivery and incredible rewards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categorias</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Eletrônicos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Moda & Acessórios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Casa & Jardim
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Esportes & Lazer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Beleza & Saúde
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Loyalty */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">contact@trustmart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>

            {/* Loyalty Program Highlight */}
            <div className="bg-orange-600 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-white" />
                <span className="font-semibold">Programa de Fidelidade</span>
              </div>
              <p className="text-sm text-orange-100">
                Ganhe pontos e descontos exclusivos a cada compra!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">✓</span>
              </div>
              <span className="text-sm text-gray-400">Compra Segura</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">🚚</span>
              </div>
              <span className="text-sm text-gray-400">Entrega Rápida</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">24h</span>
              </div>
              <span className="text-sm text-gray-400">Suporte 24/7</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">★</span>
              </div>
              <span className="text-sm text-gray-400">Qualidade Garantida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TrustMart. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>|</span>
              <span>Desenvolvido com ❤️ para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

