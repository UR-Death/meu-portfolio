import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-8"
        >
          404
        </motion.div>

        <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
        <p className="text-slate-400 text-xl mb-12">
          Oops! A página que você está procurando não existe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-lg flex items-center gap-2 shadow-lg"
            >
              <Home size={20} />
              Voltar ao Início
            </motion.button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all"
          >
            <ArrowLeft size={20} />
            Página Anterior
          </button>
        </div>
      </motion.div>
    </div>
  );
}
