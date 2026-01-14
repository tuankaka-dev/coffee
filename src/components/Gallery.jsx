import { motion } from 'framer-motion';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
        alt: 'Latte art',
        className: 'col-span-2 row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400',
        alt: 'Coffee beans',
        className: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=400',
        alt: 'Coffee smoke',
        className: 'col-span-1 row-span-2',
    },
    {
        src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400',
        alt: 'Espresso',
        className: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=600',
        alt: 'Coffee shop interior',
        className: 'col-span-2 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=400',
        alt: 'Pouring coffee',
        className: 'col-span-1 row-span-1',
    },
    {
        src: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=400',
        alt: 'Coffee & pastry',
        className: 'col-span-1 row-span-1',
    },
];

const GalleryImage = ({ src, alt, className, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative overflow-hidden group ${className}`}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg uppercase tracking-widest">
                    {alt}
                </span>
            </div>
        </motion.div>
    );
};

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 px-0 bg-[#1a1a1a] w-screen">
            {/* Section Header - Centered */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 px-4"
            >
                <p className="text-[#c4a35a] uppercase tracking-[0.3em] text-sm mb-4">
                    Visual Journey
                </p>
                <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white">
                    Our Gallery
                </h2>
            </motion.div>

            {/* Grid - Full width, edge to edge */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 auto-rows-[200px] md:auto-rows-[300px] w-full">
                {galleryImages.map((image, index) => (
                    <GalleryImage
                        key={index}
                        index={index}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
