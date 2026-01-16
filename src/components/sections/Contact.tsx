import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section className="relative bg-[#0b1220] text-white">
            <div className="max-w-7xl mx-auto px-6 py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT — Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold">
                            Get in touch
                        </h2>

                        <p className="text-gray-400 max-w-md">
                            Contanos qué problema tiene tu equipo. Te respondemos con un
                            diagnóstico claro, honesto y sin compromiso.
                        </p>

                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li>📍 Buenos Aires, Argentina</li>
                            <li>📞 +54 11 2345-6789</li>
                            <li>✉️ soporte@tuservicio.com</li>
                        </ul>
                    </motion.div>

                    {/* RIGHT — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Nombre" />
                                <Input label="Apellido" />
                            </div>

                            <Input label="Email" />
                            <Input label="Teléfono" />

                            <div>
                                <label className="block text-sm mb-1 text-gray-300">
                                    Mensaje
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full bg-accent text-white py-4 rounded-lg font-semibold"
                            >
                                Send message
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

const Input = ({ label }: { label: string }) => (
    <div>
        <label className="block text-sm mb-1 text-gray-300">
            {label}
        </label>
        <input
            type="text"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3
        focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
        />
    </div>
);
