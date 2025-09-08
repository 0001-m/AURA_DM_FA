import { Search, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Perfumes', 'Brands', 'Review', 'Guides'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-dark-charcoal text-white px-8 py-4 rounded-2xl mx-8 mt-4 shadow-lg"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-serif font-bold"
        >
          Aura
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.span
            whileHover={{ color: '#f59e0b' }}
            className="font-medium cursor-pointer border-b-2 border-amber pb-1"
          >
            Home
          </motion.span>
          {navItems.map((item) => (
            <motion.span
              key={item}
              whileHover={{ color: '#f59e0b' }}
              className="font-medium cursor-pointer transition-colors duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-800 rounded-full cursor-pointer transition-colors"
          >
            <Search size={20} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-800 rounded-full cursor-pointer transition-colors"
          >
            <Heart size={20} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-gray-800 rounded-full cursor-pointer transition-colors"
          >
            <ShoppingBag size={20} />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;