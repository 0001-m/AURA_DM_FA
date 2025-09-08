import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <div className="px-8 py-20 bg-warm-beige">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Left Perfume */}
          <div className="absolute left-8 bottom-0 w-32 h-40 bg-gradient-to-br from-amber-400 to-orange-600 rounded-t-3xl">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-gold-accent rounded-t-lg"></div>
          </div>

          {/* Right Perfume */}
          <div className="absolute right-8 bottom-0 w-32 h-40 bg-gradient-to-br from-gray-200 to-gray-400 rounded-t-3xl">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-600 rounded-t-lg"></div>
            <div className="absolute inset-8 border border-gray-300 rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-md mx-auto">
            <h2 className="text-4xl font-serif mb-4">
              Subscribe Newsletter
              <br />
              & get latest news
            </h2>
            
            <div className="flex bg-black/50 rounded-full p-2 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter your E-mail address"
                className="flex-1 bg-transparent px-4 py-2 text-white placeholder-gray-400 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber text-black rounded-full px-6 py-2 flex items-center space-x-2 hover:bg-yellow-400 transition-colors"
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;