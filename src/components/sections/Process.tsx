import { motion } from "framer-motion";

const steps = [
    {
        title: "Contacto",
        description:
            "Nos escribís y nos contás qué le pasa a tu equipo. Respondemos rápido.",
    },
    {
        title: "Diagnóstico",
        description:
            "Revisamos el equipo y te explicamos el problema en palabras simples.",
    },
    {
        title: "Presupuesto",
        description:
            "Te pasamos un presupuesto claro. Vos decidís si avanzar.",
    },
    {
        title: "Reparación y entrega",
        description:
            "Reparamos, probamos y te entregamos el equipo listo para usar.",
    },
];

export const Process = () => {
    return (
        <motion.section
            className="py-24 bg-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
            }}
        >
            <div className="container px-5 mx-auto max-w-5xl">

                {/* Header */}
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}
                    className="text-3xl font-bold text-center text-gray-900 mb-16"
                >
                    Cómo trabajamos
                </motion.h2>

                {/* Steps */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                            }}
                            className="
                                        flex gap-6 items-start
                                        rounded-xl border border-gray-100
                                        bg-gray-50 p-6
                                        hover:shadow-md transition
                                    "
                        >
                            {/* Número */}
                            <div className="
                                            flex-shrink-0
                                            w-10 h-10
                                            rounded-full
                                            bg-accent/10 text-accent
                                            flex items-center justify-center
                                            font-semibold
                                        ">
                                {index + 1}
                            </div>

                            {/* Contenido */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};
