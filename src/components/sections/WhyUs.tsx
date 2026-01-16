import { motion } from "framer-motion";

const reasons = [
    {
        title: "Reparaciones confiables",
        description: "Soluciones duraderas para que tu equipo vuelva a rendir",
        highlight: true,
    },
    {
        title: "Respuesta rápida",
        description: "Reducimos el tiempo que estás sin tu PC o notebook",
    },
    {
        title: "Precios transparentes",
        description: "Presupuestos claros, sin costos ocultos",
    },
    {
        title: "Soporte profesional",
        description: "Asistencia técnica para hogares y empresas",
    },
];

export const WhyUs = () => {
    return (
        <motion.section
            className="py-24 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: "easeOut" },
                        },
                    }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        ¿Por qué confiar en nosotros?
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Nos enfocamos en resolver tu problema rápido, bien y sin vueltas.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: item.highlight ? 0 : index * 0.05,
                                    },
                                },
                            }}
                            whileHover={{ y: -6 }}
                            className={`
                                        rounded-xl p-8 text-center bg-white
                                        ${item.highlight
                                                            ? "shadow-lg ring-1 ring-accent/20"
                                                            : "shadow-sm"}
                                    `}
                        >
                            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                                <span className="text-accent text-xl font-bold">✓</span>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm text-gray-600">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
