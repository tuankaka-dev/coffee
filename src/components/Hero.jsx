import { useState } from 'react';
import { motion } from 'framer-motion';
import OrderModal from './OrderModal';

const Hero = () => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const openOrderModal = () => setIsOrderModalOpen(true);
    const closeOrderModal = () => setIsOrderModalOpen(false);

    return (
        <>
            <section
                id="home"
                className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2070"
                        alt="Coffee beans"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/40 to-[#1a1a1a]" />
                </div>

                {/* Floating Coffee Cup */}
                <motion.img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400"
                    alt="Coffee cup"
                    className="absolute right-[10%] top-1/3 w-64 h-64 object-cover rounded-full shadow-2xl z-10 hidden lg:block"
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Content */}
                <div className="relative z-20 text-center px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#c4a35a] uppercase tracking-[0.3em] text-sm mb-4"
                    >
                        Premium Coffee Experience
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
                    >
                        Crafted for
                        <span className="block text-[#c4a35a]">Connoisseurs</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-8"
                    >
                        Experience the art of coffee making with our handcrafted
                        selections from the world's finest beans.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: '#c4a35a', color: '#000' }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-transparent border-2 border-[#c4a35a] text-[#c4a35a] uppercase tracking-widest text-sm font-medium transition-all duration-300"
                        >
                            Explore Menu
                        </motion.button>
                        <motion.button
                            onClick={openOrderModal}
                            whileHover={{ scale: 1.02, backgroundColor: '#d4b36a' }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-[#c4a35a] text-black uppercase tracking-widest text-sm font-medium transition-all duration-300"
                        >
                            Order Now
                        </motion.button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                    >
                        <motion.div className="w-1 h-2 bg-[#c4a35a] rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Order Modal */}
            <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
        </>
    );
};

export default Hero;

