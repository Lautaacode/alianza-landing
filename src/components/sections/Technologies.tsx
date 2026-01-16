import { motion } from "framer-motion";

const technologies = [
    {
        title: "Sistemas Operativos Optimizados",
        description:
            "Configuramos Windows y Linux para que tu equipo sea más rápido, estable y seguro desde el primer día.",
    },
    {
        title: "Hardware Confiable y Escalable",
        description:
            "Actualizamos SSD, memoria y componentes clave para extender la vida útil de tu equipo.",
    },
    {
        title: "Redes y Soporte Profesional",
        description:
            "Diseñamos y mantenemos redes estables para hogares y empresas, evitando caídas y pérdidas de tiempo.",
    },
];

export const Technologies = () => {
    return (
        <motion.section
            className=" py-24 px-6"
            aria-labelledby="technologies-title"
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
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.header
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: "easeOut" },
                        },
                    }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2
                        id="technologies-title"
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        Soluciones técnicas con herramientas confiables
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Usamos tecnología probada para garantizar rendimiento, seguridad y
                        durabilidad en cada servicio.
                    </p>
                </motion.header>

                {/* Cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-10">
                    {technologies.map((tech) => (
                        <motion.article
                            key={tech.title}
                            variants={{
                                hidden: { opacity: 0, y: 25 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, ease: "easeOut" },
                                },
                            }}
                            whileHover={{ y: -6 }}
                            className="
                                        bg-white rounded-xl p-8
                                        border border-gray-100
                                        shadow-sm
                                        hover:shadow-lg
                                        focus-within:ring-2
                                        focus-within:ring-indigo-500
                                        outline-none
                                    "
                            tabIndex={0}
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {tech.title}
                            </h3>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                {tech.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
