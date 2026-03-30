
import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router';


import Boneco_de_Neve from '../../Images/Boneco_de_Neve.png';
import Box from '../../Images/Box.png';
import Cadeira_gaming from '../../Images/Cadeira_gaming.png';
import Cadeiras_Mesas from '../../Images/Cadeiras&Mesas.png';
import Caneca_de_Madeira from '../../Images/Caneca_de_Madeira.png';
import Relogio_de_Xadrez from '../../Images/Relogio_de_Xadrez.png';
import Xadrez from '../../Images/Xadrez.png';
import escadas from '../../Images/escadas.png';


interface Project {
  id: number;
  title: string;
  image: string;
  date: string;
  description?: string;
}

export function PortfolioModelos() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Boneco de Neve',
      image: Boneco_de_Neve,
      date: '15/12/2024',
      description: 'Modelo 3D de boneco de neve com textura e materiais realistas',
    },
    {
      id: 2,
      title: 'Caixa de Papelão',
      image: Box,
      date: '10/11/2024',
      description: 'Caixa de papelão com texturas detalhadas e símbolos de embalagem',
    },
    {
      id: 3,
      title: 'Cadeira Gamer',
      image: Cadeira_gaming,
      date: '05/09/2024',
      description: 'Cadeira ergonômica para gaming com detalhes realistas',
    },
    {
      id: 4,
      title: 'Conjunto de Mesa',
      image: Cadeiras_Mesas,
      date: '18/08/2024',
      description: 'Mesa com cadeiras modernas em design minimalista',
    },
    {
      id: 5,
      title: 'Caneca Medieval',
      image: Caneca_de_Madeira,
      date: '25/07/2024',
      description: 'Caneca de madeira estilo medieval com detalhes em metal',
    },
    {
      id: 6,
      title: 'Relógio de Xadrez',
      image: Relogio_de_Xadrez,
      date: '12/06/2024',
      description: 'Relógio decorativo para mesa de xadrez',
    },
    {
      id: 7,
      title: 'Tabuleiro de Xadrez',
      image: Xadrez,
      date: '10/05/2024',
      description: 'Tabuleiro de xadrez com peças detalhadas',
    },
    {
      id: 8,
      title: 'Escadas',
      image: escadas,
      date: '05/04/2024',
      description: 'Modelo 3D de escadas arquitetônicas',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link to="/portfolio">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all flex items-center gap-2"
        >
          ← Voltar ao Portfólio
        </motion.button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Modelos Individuais
        </h1>
        <p className="text-slate-400 mb-12">Objetos e personagens 3D detalhados</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:shadow-purple-500/30 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-400">Data: {project.date}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl mb-6"
              />
              
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              
              <div className="space-y-3 text-slate-300">
                <p>
                  <span className="font-semibold text-purple-400">Data de criação:</span>{' '}
                  {selectedProject.date}
                </p>
                {selectedProject.description && (
                  <p>
                    <span className="font-semibold text-purple-400">Descrição:</span>{' '}
                    {selectedProject.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}