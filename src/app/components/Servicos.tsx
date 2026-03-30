import { motion } from 'motion/react';
import { Box, Gamepad2, Home, Lightbulb } from 'lucide-react';
import { Link } from 'react-router';

export function Servicos() {
  const services = [
    {
      icon: <Gamepad2 size={40} />,
      title: 'Modelação 3D para Jogos',
      description: 'Criação de modelos 3D otimizados para motores como Unity. Ideal para estúdios indie ou desenvolvedores a solo.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Low-poly e High-poly', 'Texturas PBR', 'Rigging e Animação', 'Assets otimizados'],
    },
    {
      icon: <Home size={40} />,
      title: 'Visualização de Interiores',
      description: 'Modelos 3D realistas de ambientes interiores para arquitetura e design. Renderizações de alta qualidade. Especialização adquirida através de estágio profissional com 810 horas em empresa de modelação de interiores.',
      gradient: 'from-pink-500 to-orange-500',
      features: ['Renders fotorrealistas', 'Iluminação avançada', 'Materiais realistas', 'Múltiplas vistas'],
    },
    {
      icon: <Box size={40} />,
      title: 'Programação de Jogos',
      description: 'Desenvolvimento de mecânicas interativas e protótipos de jogos em Unity com C#. Desde conceito até execução final.',
      gradient: 'from-orange-500 to-yellow-500',
      features: ['Unity + C#', 'Mecânicas de jogo', 'UI/UX para jogos', 'Protótipos jogáveis'],
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Multimédia',
      description: 'Tambem faço edição de vídeo,áudio e criação de websites.',
      gradient: 'from-yellow-500 to-green-500',
      features: ['Edição de vídeo', 'Edição de áudio', 'Criação de websites', 'Design gráfico'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Serviços
        </h1>
        <p className="text-center text-slate-400 text-xl mb-16">
          Soluções profissionais em modelação 3D e desenvolvimento de jogos
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ 
                     background: `linear-gradient(to right, ${service.gradient.includes('purple') ? '#a855f7' : service.gradient.includes('pink') ? '#ec4899' : service.gradient.includes('orange') ? '#f97316' : '#eab308'}, ${service.gradient.includes('pink') ? '#ec4899' : service.gradient.includes('orange') ? '#f97316' : service.gradient.includes('yellow') ? '#eab308' : '#22c55e'})`
                   }} 
              />
              
              <div className="relative bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all">
                <div className={`inline-block p-4 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-600/20 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Interessado em trabalhar comigo?</h2>
            <p className="text-slate-300 mb-8">
              Vamos discutir seu projeto e encontrar a melhor solução para suas necessidades
            </p>
            
            <Link to="/contacto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg shadow-lg"
              >
                Entre em Contacto
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}