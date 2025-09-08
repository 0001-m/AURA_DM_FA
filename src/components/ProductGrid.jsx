import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductGrid = () => {
  const products = [
    {
      name: 'Aurora mystique',
      price: '$200.00',
      gradient: 'from-cyan-400 to-blue-600'
    },
    {
      name: 'Crimson Whispers',
      price: '$180.00',
      gradient: 'from-amber-400 to-orange-600'
    },
    {
      name: 'Amethyst Glow',
      price: '$275.00',
      gradient: 'from-orange-600 to-red-800'
    },
    {
      name: 'Wild Orchid',
      price: '$150.00',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

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
          <h2 className="text-5xl font-serif">Pick Your Favorite One</h2>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="perfume-card group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className={`h-64 bg-gradient-to-br ${product.gradient} relative`}>
                  {/* Perfume bottle silhouette */}
                  <div className="absolute inset-8 bg-gradient-to-br from-black/20 to-black/40 rounded-2xl">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-black/60 rounded-t-lg"></div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber transition-colors"
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;