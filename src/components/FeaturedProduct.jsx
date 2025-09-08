import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedProduct = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif leading-tight">
            Delight in the timeless essence
            <br />
            of our cherished perfume.
          </h2>
        </motion.div>

        {/* Decorative line */}
        <div className="w-full h-px bg-gray-600 mb-16"></div>

        {/* Product Section */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Perfume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 w-64 h-80 rounded-3xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Perfume bottle design */}
              <div className="absolute inset-8 bg-gradient-to-br from-amber-600 to-orange-800 rounded-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-black rounded-t-lg"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold">
                  LUXURY
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-3xl font-serif mb-6">Eau De Perfume Spray</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Eternly Perfume by Calvin Klein introduces the wearer to the fresh and warm notes of a clean, white floral scent with hints of vibrant green and a touch of amber and a dash of living spice.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2 mx-auto"
            >
              <span>Buy Now</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right Perfume */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 w-64 h-80 rounded-3xl mx-auto shadow-2xl relative overflow-hidden">
              {/* Perfume bottle design */}
              <div className="absolute inset-8 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-gold-accent rounded-t-lg"></div>
                <div className="absolute inset-12 border border-amber-400 rounded-lg opacity-60"></div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black text-xs font-bold">
                  PREMIUM
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;