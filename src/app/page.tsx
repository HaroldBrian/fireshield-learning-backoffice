import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Users, Trophy, Clock, ArrowRight, CheckCircle, Star, Play } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Formations expertes',
      description: 'Accédez à des centaines de formations conçues par des professionnels reconnus',
    },
    {
      icon: Users,
      title: 'Communauté active',
      description: 'Échangez avec une communauté d\'apprenants motivés et des formateurs expérimentés',
    },
    {
      icon: Trophy,
      title: 'Certifications reconnues',
      description: 'Obtenez des certificats valorisés par les entreprises et les professionnels',
    },
    {
      icon: Clock,
      title: 'Apprentissage flexible',
      description: 'Apprenez à votre rythme, où vous voulez et quand vous voulez',
    },
  ];

  const stats = [
    { value: '1000+', label: 'Formations disponibles' },
    { value: '50k+', label: 'Apprenants actifs' },
    { value: '95%', label: 'Taux de satisfaction' },
    { value: '24/7', label: 'Support disponible' },
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Développeuse Web',
      content: 'Grâce à Fireshield Learning, j\'ai pu me reconvertir dans le développement web en 6 mois. Les formations sont excellentes !',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e85acd?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Thomas Martin',
      role: 'Chef de projet',
      content: 'La qualité des formations et la flexibilité de la plateforme m\'ont permis de monter en compétences rapidement.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
    {
      name: 'Sophie Laurent',
      role: 'Marketing Digital',
      content: 'Interface intuitive, contenu de qualité et suivi personnalisé. Je recommande vivement !',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Développez vos compétences avec 
                <span className="text-yellow-400"> Fireshield Learning</span>
              </h1>
              <p className="text-xl mb-8 text-primary-100 leading-relaxed">
                Découvrez notre plateforme de formation en ligne moderne, 
                conçue pour vous accompagner dans votre développement professionnel 
                et personnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/courses"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Explorer les formations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/auth/register"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
                >
                  Commencer gratuitement
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Étudiants en formation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 group">
                    <Play className="w-8 h-8 text-primary-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Fireshield Learning ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre plateforme offre une expérience d'apprentissage unique 
              avec des outils modernes et une approche pédagogique innovante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-200">
                    <Icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos apprenants
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de ceux qui nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Prêt à commencer votre parcours d'apprentissage ?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Rejoignez des milliers d'apprenants qui font confiance à Fireshield Learning 
            pour développer leurs compétences et accélérer leur carrière.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Créer mon compte gratuit
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Découvrir les formations
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;