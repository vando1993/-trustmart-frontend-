import React from 'react';
import { Star, Heart, ShoppingCart, Award, Gift, Users, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Homepage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Smartphone Galaxy Pro',
      price: 899.99,
      originalPrice: 1199.99,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 127,
      points: 900,
      badge: 'Mais Vendido'
    },
    {
      id: 2,
      name: 'Fone Bluetooth Premium',
      price: 149.99,
      originalPrice: 199.99,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 89,
      points: 150,
      badge: 'Oferta'
    },
    {
      id: 3,
      name: 'Smartwatch Fitness',
      price: 299.99,
      originalPrice: 399.99,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 156,
      points: 300,
      badge: 'Novo'
    },
    {
      id: 4,
      name: 'Câmera Digital 4K',
      price: 599.99,
      originalPrice: 799.99,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 203,
      points: 600,
      badge: 'Premium'
    }
  ];

  const categories = [
    { name: 'Eletrônicos', icon: '📱', count: '2.5k produtos' },
    { name: 'Moda', icon: '👕', count: '1.8k produtos' },
    { name: 'Casa & Jardim', icon: '🏠', count: '3.2k produtos' },
    { name: 'Esportes', icon: '⚽', count: '1.1k produtos' },
    { name: 'Beleza', icon: '💄', count: '950 produtos' },
    { name: 'Livros', icon: '📚', count: '2.1k produtos' }
  ];

  const loyaltyLevels = [
    { name: 'Bronze', range: '0-999', discount: '5%', color: 'bg-amber-600' },
    { name: 'Prata', range: '1000-2999', discount: '10%', color: 'bg-gray-400' },
    { name: 'Ouro', range: '3000-4999', discount: '15%', color: 'bg-yellow-500' },
    { name: 'Platina', range: '5000+', discount: '20%', color: 'bg-purple-500' }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      rating: 5,
      comment: 'Produtos de qualidade e entrega super rápida! O programa de pontos é incrível.',
      avatar: '/api/placeholder/50/50'
    },
    {
      name: 'João Santos',
      rating: 5,
      comment: 'Já sou membro Ouro e as vantagens são excelentes. Recomendo!',
      avatar: '/api/placeholder/50/50'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      comment: 'Atendimento excepcional e produtos sempre chegam em perfeito estado.',
      avatar: '/api/placeholder/50/50'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your <span className="text-orange-400">Trusted</span> Store with Loyalty
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Thousands of products with guaranteed quality, fast delivery and a loyalty program that rewards your trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Começar a Comprar
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">50k+</div>
                    <div className="text-sm text-blue-100">Produtos</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">25k+</div>
                    <div className="text-sm text-blue-100">Clientes</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-sm text-blue-100">Avaliação</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">99%</div>
                    <div className="text-sm text-blue-100">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra nossa seleção especial de produtos com os melhores preços e qualidade garantida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                      <div className="text-4xl">📱</div>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          R$ {product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-orange-600 font-medium">
                        💰 +{product.points} pontos
                      </span>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorias Populares</h2>
            <p className="text-gray-600">Explore nossa ampla variedade de produtos</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Programa de Fidelidade</h2>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Ganhe pontos a cada compra e troque por descontos incríveis. Quanto mais você compra, mais vantagens você tem!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {loyaltyLevels.map((level, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${level.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{level.name}</h3>
                  <p className="text-orange-100 text-sm mb-2">{level.range} pontos</p>
                  <p className="text-xl font-bold">{level.discount} desconto</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Saiba Mais sobre o Programa
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Receba seus produtos em até 7 dias úteis com frete grátis para membros.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Pontos e Recompensas</h3>
              <p className="text-gray-600">Ganhe pontos a cada compra e troque por descontos exclusivos.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Nossa equipe está sempre pronta para ajudar você.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-gray-600">Mais de 25.000 clientes satisfeitos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Receba ofertas exclusivas, lançamentos e dicas especiais diretamente no seu e-mail.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 px-6">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

