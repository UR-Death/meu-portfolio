import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Play, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router';
import carrosComSomVideo from '../../videos/Carros com som.mp4';
import testeAtencaoSeletivaVideo from '../../videos/Teste de Atenção Seletiva.mp4';
import carrosComSomThumb from '../../videos/thumbnail_carros.png';
import testeAtencaoSeletivaThumb from '../../videos/thumbnail_Teste de Atenção Seletiva.png';

interface MediaItem {
  id: number;
  title: string;
  type: 'video' | 'photo';
  thumbnail: string;
  url?: string; // for videos
  date: string;
  description?: string;
}

export function PortfolioMultimedia() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      title: 'Carros com Som',
      type: 'video',
      thumbnail: carrosComSomThumb,
      url: carrosComSomVideo,
      date: '2024-12-15',
      description: 'Vídeo local capturado na pasta src/videos',
    },
    {
      id: 2,
      title: 'Teste de Atenção Seletiva',
      type: 'video',
      thumbnail: testeAtencaoSeletivaThumb,
      url: testeAtencaoSeletivaVideo,
      date: '2024-12-10',
      description: 'Vídeo local de teste de atenção seletiva',
    },
    // Adicione mais itens multimédia aqui conforme necessário
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Multimédia
        </h1>
        <p className="text-slate-400 mb-12">Vídeos e fotografias de projetos visuais</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedMedia(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:shadow-green-500/30 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Media Type Indicator */}
                  <div className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full">
                    {item.type === 'video' ? (
                      <Play size={16} className="text-green-400" />
                    ) : (
                      <ImageIcon size={16} className="text-blue-400" />
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">Data: {item.date}</p>
                  <p className="text-sm text-slate-400 capitalize">Tipo: {item.type === 'video' ? 'Vídeo' : 'Foto'}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  controls
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full rounded-xl mb-6"
                  poster={selectedMedia.thumbnail}
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              ) : (
                <img
                  src={selectedMedia.thumbnail}
                  alt={selectedMedia.title}
                  className="w-full rounded-xl mb-6"
                />
              )}

              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {selectedMedia.title}
              </h2>

              <div className="space-y-3 text-slate-300">
                <p>
                  <span className="font-semibold text-green-400">Tipo:</span>{' '}
                  {selectedMedia.type === 'video' ? 'Vídeo' : 'Fotografia'}
                </p>
                <p>
                  <span className="font-semibold text-green-400">Data de criação:</span>{' '}
                  {selectedMedia.date}
                </p>
                {selectedMedia.description && (
                  <p>
                    <span className="font-semibold text-green-400">Descrição:</span>{' '}
                    {selectedMedia.description}
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