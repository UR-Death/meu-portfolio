import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router';

import jogo_drift_crash from '../../Images/jogo_drift_crash.png';
import jogo_galeria_arte from '../../Images/jogo_galeria_arte.png';
import jogo_prova_ageis from '../../Images/jogo_prova_ageis.png';
import jogo_equality_cards from '../../Images/jogo_equality_cards.png';

interface Game {
  id: number;
  title: string;
  image: string;
  date: string;
  description?: string;
}

export function PortfolioJogos() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const games: Game[] = [
    {
      id: 1,
      title: 'A Prova dos Ágeis',
      image: jogo_prova_ageis,
      date: '16/06/2025',
      description: 'Jogo de plataforma com foco em agilidade e precisão',
    },
    {
      id: 2,
      title: 'Drift Till U Crash',
      image: jogo_drift_crash,
      date: '11/06/2025',
      description: 'Jogo de corrida arcade com mecânicas de drift',
    },
    {
      id: 3,
      title: 'Equality Cards',
      image: jogo_equality_cards,
      date: '15/01/2025',
      description: 'Jogo de cartas educativo sobre igualdade e diversidade',
    },
    {
      id: 4,
      title: 'Galeria de Arte Virtual',
      image: jogo_galeria_arte,
      date: '12/01/2025',
      description: 'Experiência interativa de galeria de arte em 3D',
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Jogos Criados no Unity
        </h1>
        <p className="text-slate-400 mb-12">Projetos de jogos desenvolvidos do zero</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => setSelectedGame(game)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:shadow-orange-500/40 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-slate-400">Data: {game.date}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGame(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGame(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                className="w-full rounded-xl mb-6"
              />
              
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                {selectedGame.title}
              </h2>
              
              <div className="space-y-3 text-slate-300">
                <p>
                  <span className="font-semibold text-orange-400">Data de criação:</span>{' '}
                  {selectedGame.date}
                </p>
                {selectedGame.description && (
                  <p>
                    <span className="font-semibold text-orange-400">Descrição:</span>{' '}
                    {selectedGame.description}
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
