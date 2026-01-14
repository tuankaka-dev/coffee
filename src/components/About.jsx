import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-8 bg-[#0f0f0f] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600"
                                alt="Barista at work"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#c4a35a]/30" />
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#c4a35a]/10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <p className="text-[#c4a35a] uppercase tracking-[0.3em] text-sm mb-4">
                            Our Story
                        </p>

                        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-white">
                            A Legacy of
                            <span className="block text-[#c4a35a]">Excellence</span>
                        </h2>

                        <p className="text-white/60 mb-6 leading-relaxed">
                            Since 2010, NOIR COFFEE has been dedicated to sourcing the finest
                            coffee beans from sustainable farms across the globe. Our master
                            roasters bring decades of experience to every batch, ensuring each
                            cup delivers an unparalleled sensory experience.
                        </p>

                        <p className="text-white/60 mb-8 leading-relaxed">
                            We believe coffee is more than just a beverage—it's an art form,
                            a ritual, and a moment of pure indulgence in your day.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { number: '15+', label: 'Years' },
                                { number: '50K+', label: 'Customers' },
                                { number: '25+', label: 'Origins' },
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-['Playfair_Display'] font-bold text-[#c4a35a]">
                                        {stat.number}
                                    </div>
                                    <div className="text-white/40 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
