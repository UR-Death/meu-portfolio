import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Folder, Gamepad2, Home, Video } from 'lucide-react';

export function Portfolio() {
  const categories = [
    {
      title: 'Modelos Individuais',
      description: 'Objetos e personagens 3D detalhados',
      icon: <Home size={48} />,
      path: '/portfolio/modelos',
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1650081221669-fccab00c76a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGNoYXJhY3RlciUyMG1vZGVsJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc3MzkyNTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Modelos Cenários',
      description: 'Ambientes interiores completos e imersivos',
      icon: <Folder size={48} />,
      path: '/portfolio/cenarios',
      gradient: 'from-pink-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1679485734032-1e2b82a6999c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMG1vZGVsaW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MzkyNTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Jogos Criados no Unity',
      description: 'Projetos de jogos desenvolvidos do zero',
      icon: <Gamepad2 size={48} />,
      path: '/portfolio/jogos',
      gradient: 'from-orange-500 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1580212666674-338f3ef99640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0eSUyMGdhbWUlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnNob3R8ZW58MXx8fHwxNzczOTI1NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Multimédia',
      description: 'Vídeos e fotografias de projetos visuais',
      icon: <Video size={48} />,
      path: '/portfolio/multimedia',
      gradient: 'from-green-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aW1lZGlhJTIwcHJvZHVjdGlvbiUyMHZpZGVvfGVufDF8fHx8MTc3MzkyNTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
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
          Portfólio
        </h1>
        <p className="text-center text-slate-400 text-xl mb-16">
          Explore meu trabalho em diferentes categorias
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className={`inline-block w-fit p-3 bg-gradient-to-r ${category.gradient} rounded-xl mb-4 shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {category.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{category.description}</p>

                  <div className="flex items-center text-pink-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    Ver Projetos
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-50 blur-xl`} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
