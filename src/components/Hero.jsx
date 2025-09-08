import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen px-8 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      {/* Large circular background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-300 rounded-full opacity-30" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 top-32 max-w-xs"
        >
          <div className="bg-amber w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <h3 className="text-lg font-serif mb-2">Explore the enchanting</h3>
          <p className="text-gray-600 mb-6">
            fragrances as if they were works of art.
          </p>
        </motion.div>

        {/* Left Perfume */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-16 bottom-32"
        >
          <div className="perfume-card p-6 max-w-xs">
            <div className="bg-gradient-perfume w-32 h-48 rounded-lg mb-4 mx-auto shadow-lg"></div>
            <h4 className="font-serif text-xl text-center mb-2">Scandal</h4>
            <p className="text-gray-600 text-center mb-4">Concentrated Perfume</p>
            <button className="btn-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className="text-center pt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mb-4"
          >
            Your Scent Speak
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl font-serif mb-8"
          >
            A <span className="text-gradient">Fragrance</span> that
            <br />
            Captivates
          </motion.h1>

          {/* Center Perfume Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mx-auto w-80 h-80 mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-400 rounded-3xl shadow-2xl">
              {/* Perfume bottle mockup */}
              <div className="absolute inset-4 bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-black rounded-t-lg"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-bold">
                  AURA
                </div>
              </div>
              {/* White flower petals around */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full opacity-80 transform -rotate-12"></div>
              <div className="absolute -bottom-2 -right-4 w-20 h-20 bg-white rounded-full opacity-60 transform rotate-45"></div>
            </div>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-0 top-32 max-w-xs"
        >
          <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
            <ArrowRight size={20} />
          </button>
          <h3 className="text-lg font-serif mb-2">Scandal</h3>
          <p className="text-gray-600 mb-4">Patent Perfume</p>
        </motion.div>

        {/* Right Perfume */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-16 bottom-32"
        >
          <div className="perfume-card p-6 max-w-xs">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 w-32 h-48 rounded-lg mb-4 mx-auto shadow-lg"></div>
            <div className="bg-amber w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <p className="text-gray-600 text-center mb-4">
              "Show someone they're amazing with our enticing Scandal fragrance."
            </p>
            <button className="btn-secondary flex items-center mx-auto space-x-2">
              <span>Shop Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Bottom Brand Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-5xl font-serif mt-16"
        >
          Your Desired Brand
        </motion.h2>

        {/* Brand Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center space-x-8 mt-12"
        >
          {['Lux', 'Pacco', 'Criss', 'Xocis', 'Lux', 'Rexs'].map((brand, index) => (
            <div
              key={brand + index}
              className="bg-white px-6 py-3 rounded-full shadow-md font-serif text-gray-800 hover:shadow-lg transition-shadow cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;