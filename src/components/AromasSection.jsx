import { ArrowRight, Sparkles, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const AromasSection = () => {
  return (
    <div className="px-8 py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif mb-4">
            Aromas for
            <br />
            Kings & Queens
          </h2>
        </motion.div>

        {/* Top Row - For Men & For Women */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* For Men */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-amber-800 to-orange-900 rounded-3xl p-8 text-white overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-serif mb-8">For<br />Men</h3>
              <button className="bg-white text-black rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-lg transition-all">
                <span>Shop Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
            {/* Perfume bottle mockup */}
            <div className="absolute right-8 top-8 w-32 h-48 bg-gradient-to-br from-purple-600 via-red-500 to-orange-400 rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-6 bg-gold-accent rounded-t-lg"></div>
            </div>
          </motion.div>

          {/* For Women */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-serif mb-8">For<br />Women</h3>
              <button className="bg-white text-black rounded-full px-6 py-3 flex items-center space-x-2 hover:shadow-lg transition-all">
                <span>Shop Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
            {/* Perfume bottle mockup */}
            <div className="absolute right-8 top-8 w-32 h-48 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-6 bg-gold-accent rounded-t-lg"></div>
            </div>
            {/* Decorative brushes */}
            <div className="absolute bottom-8 right-16 w-8 h-8 bg-red-400 rounded-full"></div>
            <div className="absolute bottom-12 right-24 w-6 h-6 bg-orange-400 rounded-full"></div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Perfume Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-200 to-gray-400 w-80 h-96 rounded-3xl mx-auto shadow-2xl">
              {/* Crystal perfume bottle */}
              <div className="absolute inset-8 bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-12 bg-gray-600 rounded-lg"></div>
                <div className="absolute inset-16 border-2 border-gray-400 rounded-lg"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="text-center mt-6">
              <h4 className="text-2xl font-serif">Unic</h4>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-5xl font-serif leading-tight">
              Fragrance is a reflection of personality, style, and mood.
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Our diverse range of perfumes brings together the finest notes crafted by master perfumers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sun size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-700">
                    Step into a realm of elegance and sophistication, and find the scent that truly embodies you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AromasSection;