import { motion } from 'motion/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Linkedin, Facebook, Globe } from 'lucide-react';

export function Contacto() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [notification, setNotification] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const EMAILJS_USER_ID = 'woWIbsi8TuNIrWuqY';
  const EMAILJS_SERVICE_ID = 'service_0zgoatz0';
  const EMAILJS_TEMPLATE_ID = 'template_62kpd0f';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação local antes de enviar via EmailJS
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.nome.trim() || !formData.sobrenome.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setNotification('Por favor preencha todos os campos.');
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setNotification('Insira um email válido.');
      return;
    }

    if (formData.message.trim().length < 12) {
      setStatus('error');
      setNotification('A mensagem deve ter pelo menos 12 caracteres.');
      return;
    }

    setStatus('loading');
    setNotification('Enviando email...');

    const templateParams = {
      from_name: `${formData.nome} ${formData.sobrenome}`.trim(),
      from_email: formData.email,
      message: formData.message,
      to_email: 'ricardosousa2047@gmail.com',
    };

    try {
      emailjs.init(EMAILJS_USER_ID);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      setStatus('success');
      setNotification('Mensagem enviada com sucesso. Obrigado!');
      setFormData({ nome: '', sobrenome: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
        setNotification('');
      }, 6000);
    } catch (error: any) {
      console.error('Erro EmailJS:', error);
      setStatus('error');
      setNotification('Erro ao enviar: ' + (error?.text || 'Tente novamente mais tarde'));

      setTimeout(() => {
        setStatus('idle');
        setNotification('');
      }, 6000);
    }
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={24} />, 
      url: 'https://www.linkedin.com/feed/',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Website', 
      icon: <Globe size={24} />, 
      url: '#',
      color: 'hover:text-green-400'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={24} />, 
      url: 'https://www.facebook.com/?locale=pt_PT',
      color: 'hover:text-blue-500'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Contacto
        </h1>
        <p className="text-center text-slate-400 text-xl mb-12">
          Tem um projeto em mente? Vamos conversar!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold mb-2 text-slate-300">
                      Nome
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-11 text-slate-100 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sobrenome" className="block text-sm font-semibold mb-2 text-slate-300">
                      Sobrenome
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input
                        type="text"
                        id="sobrenome"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-11 text-slate-100 focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Seu sobrenome"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-11 text-slate-100 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">
                    Mensagem
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-slate-400" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-11 text-slate-100 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Conte-me sobre seu projeto..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Notification */}
              {status !== 'idle' && status !== 'loading' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                    status === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
                >
                  {status === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                  <p>{notification}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className={`flex items-center gap-4 text-slate-300 ${social.color} transition-colors p-3 rounded-lg hover:bg-slate-700/50`}
                  >
                    {social.icon}
                    <span className="font-semibold">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Vamos criar algo incrível</h3>
              <p className="text-slate-300 leading-relaxed">
                Estou sempre aberto a novos projetos e colaborações. Se você tem uma ideia em mente ou precisa de ajuda com modelação 3D, desenvolvimento de jogos ou edição de vídeo, não hesite em entrar em contacto!
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}