import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = {
    Company: ['Features', 'Pricing', 'About Us', 'Contact', 'FAQ'],
    Resource: ['Blog', 'Customer Stories', 'Perfumes', 'Legal', 'Payments'],
    Shop: ['Product List', 'Brands', 'Review', 'Seasonal Offer']
  };

  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Youtube', href: '#' }
  ];

  return (
    <div className="bg-warm-beige pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-6">{section}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Media & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Social Media</h3>
            <div className="space-y-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <span>{social.name}</span>
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>

            {/* Shop Now Button */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2 mx-auto"
              >
                <ArrowRight size={20} />
              </motion.button>
              <p className="text-lg font-semibold mt-4">Shop Now</p>
            </div>

            {/* Address */}
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-gray-600 text-sm">
                1573 Cherry Dr., Frog, Michigan 49855 United States (+1) 0125-2500
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Large "Get in touch" text */}
          <div className="text-center mb-8">
            <h2 className="text-[8rem] lg:text-[12rem] font-serif text-gray-200 leading-none">
              Get in touch
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;