import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#0a0a0a] py-16 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="text-2xl font-bold font-['Playfair_Display'] tracking-wider mb-4">
                            <span className="text-[#c4a35a]">NOIR</span>
                            <span className="text-white ml-1">COFFEE</span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Crafting exceptional coffee experiences since 2010. Every cup tells a story.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'Menu', 'Gallery', 'About'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/40 hover:text-[#c4a35a] transition-colors text-sm"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
                            Hours
                        </h4>
                        <ul className="space-y-2 text-white/40 text-sm">
                            <li>Mon - Fri: 7am - 8pm</li>
                            <li>Saturday: 8am - 9pm</li>
                            <li>Sunday: 9am - 6pm</li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-white/40 text-sm">
                            <li>123 Coffee Street</li>
                            <li>New York, NY 10001</li>
                            <li className="text-[#c4a35a]">hello@noircoffee.com</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/30 text-sm">
                        © 2026 NOIR COFFEE. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {['Instagram', 'Twitter', 'Facebook'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-white/40 text-sm uppercase tracking-wider hover:text-[#c4a35a] transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
