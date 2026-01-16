import { motion } from "framer-motion";

const services = [
    {
        title: "Reparación rápida y precisa",
        description:
            "Detectamos fallas de hardware y software para que tu equipo vuelva a funcionar sin pérdidas de tiempo.",
        cta: "Solicitar diagnóstico",
        image: "https://dummyimage.com/720x400",
    },
    {
        title: "Mantenimiento preventivo",
        description:
            "Evitá fallas futuras con limpieza interna, cambio de pasta térmica y optimización.",
        cta: "Ver mantenimiento",
        image: "https://dummyimage.com/721x401",
    },
    {
        title: "Notebooks y PCs",
        description:
            "Reparamos equipos portátiles y de escritorio con repuestos y técnicas profesionales.",
        cta: "Consultar reparación",
        image: "https://dummyimage.com/722x402",
    },
    {
        title: "Soporte técnico a empresas",
        description:
            "Mantenimiento continuo y soporte confiable para entornos corporativos.",
        cta: "Hablar con un técnico",
        image: "https://dummyimage.com/723x403",
    },
];

export const Services = () => {
    return (
        <motion.section
            className="bg-white text-gray-600 body-font"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.15 },
                },
            }}
        >
            <div className="container px-5 py-24 mx-auto">

                {/* Header */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Servicios diseñados para resolver problemas reales
                    </h2>
                    <p className="mt-4 text-gray-500">
                        Atención técnica profesional para particulares y empresas, con
                        respuestas claras y tiempos reales.
                    </p>
                </motion.div>

                {/* Cards */}
                <div
                    className="
                                flex gap-6 overflow-x-auto snap-x snap-mandatory
                                md:grid md:grid-cols-2 xl:grid-cols-4
                            "
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            whileHover={{ y: -8 }}
                            className="
                                        min-w-[85%] snap-center
                                        md:min-w-0
                                    "
                        >
                            <div className="group bg-gray-100 p-6 rounded-2xl h-full transition-shadow hover:shadow-xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-40 w-full object-cover rounded-xl mb-6"
                                />

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-6">
                                    {service.description}
                                </p>

                                <motion.button
                                    whileHover={{ x: 4 }}
                                    className="text-accent font-medium inline-flex items-center gap-1"
                                    aria-label={service.cta}
                                >
                                    {service.cta}
                                    <span aria-hidden>→</span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
