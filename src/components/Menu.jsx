import { motion } from 'framer-motion';

const menuItems = [
    {
        name: 'Espresso',
        description: 'Rich, bold, and full-bodied single shot',
        price: '$4.50',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=300',
    },
    {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk foam art',
        price: '$5.50',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=300',
    },
    {
        name: 'Pour Over',
        description: 'Hand-dripped single origin specialty',
        price: '$6.00',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=300',
    },
    {
        name: 'Cold Brew',
        description: '24-hour steeped smooth cold coffee',
        price: '$5.00',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=300',
    },
];

const MenuItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#2d2d2d]/50 backdrop-blur-sm overflow-hidden border border-white/5 hover:border-[#c4a35a]/30 transition-all duration-300"
        >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
            </div>

            <div className="p-6 text-center">
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-white group-hover:text-[#c4a35a] transition-colors mb-1">
                    {item.name}
                </h3>
                <span className="text-[#c4a35a] font-medium block mb-2">{item.price}</span>
                <p className="text-white/50 text-sm">{item.description}</p>
            </div>
        </motion.div>
    );
};

const Menu = () => {
    return (
        <section id="menu" className="py-24 px-0 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] w-screen">
            {/* Section Header - Centered */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center mb-16 px-4"
            >
                <p className="text-[#c4a35a] uppercase tracking-[0.3em] text-sm mb-4">
                    Our Specialties
                </p>
                <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold mb-4 text-white">
                    Signature Brews
                </h2>
                <p className="text-white/50 max-w-xl mx-auto text-center">
                    Each cup is a masterpiece, crafted with passion and precision using
                    the finest beans from around the world.
                </p>
            </motion.div>

            {/* Menu Grid - Full width, edge to edge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
                {menuItems.map((item, index) => (
                    <MenuItem key={item.name} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Menu;
