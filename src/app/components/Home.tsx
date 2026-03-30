import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Sparkles, Box, Gamepad2, Film } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transformo ideias em experiências visuais 3D';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Box size={32} />,
      title: 'Modelação 3D',
      description: 'Modelos 3D realistas e otimizados para jogos e visualização arquitetônica',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Desenvolvimento de Jogos',
      description: 'Criação de jogos interativos em Unity com mecânicas envolventes',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Design de Interiores',
      description: 'Renderizações fotorrealistas de ambientes interiores',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: <Film size={32} />,
      title: 'Multimédia',
      description: 'Vídeos e fotografias de projetos visuais',
      gradient: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              Ricardo Sousa
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 min-h-[60px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-pink-400 ml-1"
              />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                >
                  Ver Portfólio
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link to="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-lg border border-slate-700 transition-all"
                >
                  Entrar em Contacto
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            O que eu faço
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const cardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl" 
                       style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} 
                  />
                  
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all h-full">
                    <div className={`inline-block p-4 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              );

              return feature.title === 'Multimédia' ? (
                <Link key={index} to="/portfolio/multimedia">
                  {cardContent}
                </Link>
              ) : (
                cardContent
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Pronto para dar vida ao seu projeto?</h2>
            <p className="text-xl mb-8 text-white/90">Vamos criar algo incrível juntos</p>
            
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Fale Comigo
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}