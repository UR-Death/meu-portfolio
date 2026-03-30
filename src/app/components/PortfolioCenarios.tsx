import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router';

import cenario_quarto1_view1 from '../../Images/cenario_quarto1_view1.png';
import cenario_quarto1_view2 from '../../Images/cenario_quarto1_view2.png';
import cenario_quarto6_view1 from '../../Images/cenario_quarto6_view1.png';
import cenario_quarto6_view2 from '../../Images/cenario_quarto6_view2.png';
import cenario_quarto9_view1 from '../../Images/cenario_quarto9_view1.png';
import cenario_quartodebanho from '../../Images/cenario_quartodebanho.png';
import cenario_sala2_view1 from '../../Images/cenario_sala2_view1.png';
import cenario_sala2_view2 from '../../Images/cenario_sala2_view2.png';
import cenario_sala2_view3 from '../../Images/cenario_sala2_view3.png';
import cenario_sala3_view1 from '../../Images/cenario_sala3_view1.png';
import cenario_sala3_view2 from '../../Images/cenario_sala3_view2.png';
import cenario_sala3_view3 from '../../Images/cenario_sala3_view3.png';
import cenario_sala3_view4 from '../../Images/cenario_sala3_view4.png';
import cenario_sala4_view1 from '../../Images/cenario_sala4_view1.png';
import cenario_sala4_view2 from '../../Images/cenario_sala4_view2.png';
import cenario_sala4_view3 from '../../Images/cenario_sala4_view3.png';
import cenario_sala4_view4 from '../../Images/cenario_sala4_view4.png';
import cenario_sala5_view1 from '../../Images/cenario_sala5_view1.png';
import cenario_sala5_view2 from '../../Images/cenario_sala5_view2.png';


interface Project {
  id: number;
  title: string;
  image: string;
  date: string;
  description?: string;
}

export function PortfolioCenarios() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: 1, title: 'Cenario quarto 1-1', image: cenario_quarto1_view1, date: '14/07/2024', description: 'Quarto moderno com iluminação' },
    { id: 2, title: 'Cenario quarto 1-2', image: cenario_quarto1_view2, date: '20/05/2024', description: 'Sofa aconchegante' },
    { id: 3, title: 'Cenario quarto 2-1', image: cenario_quarto6_view1, date: '02/04/2024', description: 'Quarto com madeira acustica' },
    { id: 4, title: 'Cenario quarto 2-2', image: cenario_quarto6_view2, date: '08/04/2024', description: 'Quarto com luz' },
    { id: 5, title: 'Cenario quarto 3-1', image: cenario_quarto9_view1, date: '09/04/2024', description: 'Suíte com decoração contemporânea' },
    { id: 6, title: 'Quarto de banho', image: cenario_quartodebanho, date: '10/04/2024', description: 'Quarto de banho moderna' },
    { id: 7, title: 'Sala 2-1', image: cenario_sala2_view1, date: '12/04/2024', description: 'Sala com concepção open space' },
    { id: 8, title: 'Sala 2-2', image: cenario_sala2_view2, date: '13/04/2024', description: 'Sala com tons neutros' },
    { id: 9, title: 'Sala 2-3', image: cenario_sala2_view3, date: '14/04/2024', description: 'Sala com janelas grandes' },
    { id: 10, title: 'Sala 3-1', image: cenario_sala3_view1, date: '16/04/2024', description: 'Sala elegante e convidativa' },
    { id: 11, title: 'Sala 3-2', image: cenario_sala3_view2, date: '17/04/2024', description: 'Sala com harmonia de texturas' },
    { id: 12, title: 'Sala 3-3', image: cenario_sala3_view3, date: '18/04/2024', description: 'Sala com área de convivência' },
    { id: 13, title: 'Sala 3-4', image: cenario_sala3_view4, date: '19/04/2024', description: 'Sala espaçosa e iluminada' },
    { id: 14, title: 'Sala 4-1', image: cenario_sala4_view1, date: '20/04/2024', description: 'Sala com design contemporâneo' },
    { id: 15, title: 'Sala 4-2', image: cenario_sala4_view2, date: '21/04/2024', description: 'Sala com decoração minimalista' },
    { id: 16, title: 'Sala 4-3', image: cenario_sala4_view3, date: '22/04/2024', description: 'Sala ampla com texturas naturais' },
    { id: 17, title: 'Sala 4-4', image: cenario_sala4_view4, date: '23/04/2024', description: 'Sala com espaço de jantar' },
    { id: 18, title: 'Sala 5-1', image: cenario_sala5_view1, date: '24/04/2024', description: 'Sala com mobiliário' },
    { id: 19, title: 'Sala 5-2', image: cenario_sala5_view2, date: '25/04/2024', description: 'Sala com cores suaves' },
    { id: 20, title: 'Cenario Sala 5-3', image: cenario_sala5_view1, date: '08/05/2024', description: 'Quarto com textura suave' },
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          Modelos de Cenários
        </h1>
        <p className="text-slate-400 mb-12">Ambientes interiores completos e imersivos</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:shadow-pink-500/30 transition-all">
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

                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
              
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>
              
              <div className="space-y-3 text-slate-300">
                <p>
                  <span className="font-semibold text-pink-400">Data de criação:</span>{' '}
                  {selectedProject.date}
                </p>
                {selectedProject.description && (
                  <p>
                    <span className="font-semibold text-pink-400">Descrição:</span>{' '}
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
