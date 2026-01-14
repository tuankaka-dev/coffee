import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Menu data with 20 items across 4 categories
const menuData = {
    'Espresso Bar': [
        {
            name: 'Classic Espresso',
            description: 'Rich, bold single-origin shot with velvety crema',
            price: '$4.50',
            image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=300',
        },
        {
            name: 'Double Shot Ristretto',
            description: 'Intensely concentrated espresso with chocolate notes',
            price: '$5.00',
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=300',
        },
        {
            name: 'Macchiato Deluxe',
            description: 'Espresso "stained" with silky steamed milk foam',
            price: '$5.50',
            image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=300',
        },
        {
            name: 'Flat White Velvet',
            description: 'Microfoam perfection over double ristretto',
            price: '$6.00',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=300',
        },
        {
            name: 'Golden Americano',
            description: 'Smooth espresso diluted with hot water & honey drizzle',
            price: '$5.00',
            image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=300',
        },
    ],
    'Signature Cold Brews': [
        {
            name: 'Midnight Cold Brew',
            description: '24-hour steeped dark roast, smooth & bold',
            price: '$5.50',
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=300',
        },
        {
            name: 'Vanilla Nitro Cascade',
            description: 'Nitrogen-infused cold brew with Madagascar vanilla',
            price: '$6.50',
            image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=300',
        },
        {
            name: 'Salted Caramel Cloud',
            description: 'Cold brew topped with salted caramel cold foam',
            price: '$7.00',
            image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=300',
        },
        {
            name: 'Coconut Cold Brew',
            description: 'Tropical vibes with coconut milk & toasted coconut',
            price: '$6.50',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=300',
        },
        {
            name: 'Maple Bourbon Chill',
            description: 'Cold brew infused with maple syrup & bourbon vanilla',
            price: '$7.50',
            image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=300',
        },
    ],
    'Fruit Teas': [
        {
            name: 'Passion Mango Sunrise',
            description: 'Tropical passion fruit & mango over green tea',
            price: '$5.00',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=300',
        },
        {
            name: 'Berry Hibiscus Wave',
            description: 'Mixed berries with tart hibiscus & lemon zest',
            price: '$5.50',
            image: 'https://images.unsplash.com/photo-1544252890-9c9b7a5e7b21?q=80&w=300',
        },
        {
            name: 'Peach Blossom Fizz',
            description: 'Sparkling white peach tea with elderflower',
            price: '$5.50',
            image: 'https://images.unsplash.com/photo-1558857563-c7e73b5a1f84?q=80&w=300',
        },
        {
            name: 'Citrus Mint Cooler',
            description: 'Fresh citrus blend with garden mint & agave',
            price: '$5.00',
            image: 'https://images.unsplash.com/photo-1507281549113-040fcfef650e?q=80&w=300',
        },
        {
            name: 'Tropical Guava Dream',
            description: 'Pink guava, pineapple & coconut water blend',
            price: '$6.00',
            image: 'https://images.unsplash.com/photo-1560526860-1f0e56046c85?q=80&w=300',
        },
    ],
    'Pastries & Sides': [
        {
            name: 'Almond Croissant',
            description: 'Buttery layers with almond cream & sliced almonds',
            price: '$4.50',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=300',
        },
        {
            name: 'Belgian Waffle Stack',
            description: 'Crispy waffles with berries & maple drizzle',
            price: '$8.50',
            image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=300',
        },
        {
            name: 'Matcha Cheesecake',
            description: 'Creamy Japanese matcha on graham crust',
            price: '$7.00',
            image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=300',
        },
        {
            name: 'Chocolate Lava Muffin',
            description: 'Warm center with dark Belgian chocolate',
            price: '$5.50',
            image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=300',
        },
        {
            name: 'Hazelnut Biscotti',
            description: 'Twice-baked Italian cookies with roasted hazelnuts',
            price: '$3.50',
            image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300',
        },
    ],
};

// Animation variants
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', damping: 25, stiffness: 300 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.3 },
    }),
};

// Add to Cart Button with micro-interactions
const AddToCartButton = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples([...ripples, newRipple]);

        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        onClick?.();
    };

    return (
        <motion.button
            onClick={handleClick}
            className="add-to-cart-btn relative overflow-hidden px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: isClicked ? 0.95 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
            {/* Gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#c4a35a] via-[#d4b86a] to-[#c4a35a] bg-[length:200%_100%]" />

            {/* Glow effect layer */}
            <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full shadow-[0_0_20px_rgba(196,163,90,0.5),0_0_40px_rgba(196,163,90,0.3)]" />

            {/* Ripple effects */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/40 rounded-full animate-ripple pointer-events-none"
                    style={{
                        left: ripple.x - 50,
                        top: ripple.y - 50,
                        width: 100,
                        height: 100,
                    }}
                />
            ))}

            {/* Button text */}
            <span className="relative z-10 text-[#1a1a1a] font-semibold">Add to Cart</span>
        </motion.button>
    );
};

// Menu Item Card
const MenuItemCard = ({ item, index }) => {
    const handleAddToCart = () => {
        // Could integrate with cart state management here
        console.log(`Added ${item.name} to cart`);
    };

    return (
        <motion.div
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="menu-item-card group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#c4a35a]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(196,163,90,0.15)]"
        >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />

                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-[#c4a35a]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[#1a1a1a] font-bold text-sm">{item.price}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white mb-2 group-hover:text-[#c4a35a] transition-colors">
                    {item.name}
                </h3>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">{item.description}</p>

                <AddToCartButton onClick={handleAddToCart} />
            </div>
        </motion.div>
    );
};

// Category Section
const CategorySection = ({ category, items, startIndex }) => {
    return (
        <div className="mb-12">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-[#c4a35a]/30"
            >
                <span className="text-[#c4a35a]">✦</span> {category}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                    <MenuItemCard key={item.name} item={item} index={startIndex + idx} />
                ))}
            </div>
        </div>
    );
};

// Main Modal Component
const OrderModal = ({ isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    let itemIndex = 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-start justify-center"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        className="relative w-full h-full max-w-6xl mx-4 my-4 md:my-8 overflow-hidden"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Glassmorphism Container */}
                        <div className="glass-modal h-full rounded-3xl overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="sticky top-0 z-10 bg-[#1a1a1a]/80 backdrop-blur-xl px-6 md:px-8 py-6 border-b border-white/10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[#c4a35a] uppercase tracking-[0.3em] text-xs mb-1">
                                            Artisan Selection
                                        </p>
                                        <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white">
                                            Our Menu
                                        </h1>
                                    </div>

                                    {/* Close Button */}
                                    <motion.button
                                        onClick={onClose}
                                        className="close-btn relative w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#c4a35a]/50 hover:bg-[#c4a35a]/10 transition-all duration-300 group"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg
                                            className="w-6 h-6 text-white/70 group-hover:text-[#c4a35a] transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 md:px-8 py-8 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/90 to-[#1a1a1a]/95 backdrop-blur-xl">
                                {Object.entries(menuData).map(([category, items]) => {
                                    const section = (
                                        <CategorySection
                                            key={category}
                                            category={category}
                                            items={items}
                                            startIndex={itemIndex}
                                        />
                                    );
                                    itemIndex += items.length;
                                    return section;
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OrderModal;
