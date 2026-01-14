import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md bg-[#1a1a1a]/80 border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl font-bold font-['Playfair_Display'] tracking-wider"
                >
                    <span className="text-[#c4a35a]">NOIR</span>
                    <span className="text-white ml-1">COFFEE</span>
                </motion.div>

                {/* Navigation Links - Very spacious */}
                <div className="hidden md:flex items-center gap-16">
                    {['Home', 'Menu', 'Gallery', 'About', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            whileHover={{ color: '#c4a35a' }}
                            className="text-sm uppercase tracking-widest text-white/70 hover:text-[#c4a35a] transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Order Button */}
                <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: '#c4a35a', color: '#000' }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2.5 border border-[#c4a35a] text-[#c4a35a] text-sm uppercase tracking-widest transition-all duration-300"
                >
                    Order Now
                </motion.button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
