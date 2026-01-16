import { motion } from "framer-motion";
import { fadeSide, fadeUp, stagger } from "../../animations/motion";
import AnimatedLogo from "../branding/Logo/AnimatedLogo";
import { Reveal } from "../ui/Reveal";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center bg-white">
            <div
                className="
                    mx-auto
                    max-w-7xl
                    w-full
                    px-6

                    /* MOBILE */
                    flex
                    flex-col
                    justify-around
                    min-h-screen
                    py-8

                    /* DESKTOP */
                    md:grid
                    md:grid-cols-2
                    md:items-center
                    md:justify-items-stretch
                    md:py-20
                    
                "
            >
                {/* LOGO */}
                <Reveal
                    variants={fadeSide("left")}
                    className="
                        flex
                        justify-center
                        md:justify-start
                        w-full
                    "
                >
                    <div
                        className="
                            w-56
                            sm:w-56
                            md:w-68
                            lg:w-74
                            xl:w-87
                            aspect-square
                        "
                    >
                        <AnimatedLogo
                            duration={6}
                            strokeColor="#000000"
                            gradientStart="#ffffff"
                            gradientEnd="#000000"
                        />
                    </div>
                </Reveal>

                {/* TEXTO */}
                <Reveal
                    variants={fadeSide("right")}
                    className="
                        flex
                        justify-center
                        md:justify-end
                        w-full
                    "
                >
                    <motion.div
                        variants={stagger}
                        className="
                            flex
                            flex-col
                            items-center
                            md:items-start
                            text-center
                            md:text-left
                            max-w-xl
                        "
                    >
                        <motion.h1
                            variants={fadeUp}
                            className="
                                text-3xl
                                sm:text-4xl
                                lg:text-5xl
                                font-semibold
                                text-gray-900
                                leading-tight
                            "
                        >
                            Reparación y Mantenimiento de Hardware
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="
                                mt-4
                                text-gray-600
                            "
                        >
                            Diagnóstico claro, reparación confiable y tiempos de respuesta
                            rápidos para hogares, profesionales y empresas.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="
                                mt-8
                                flex
                                flex-col
                                sm:flex-row
                                gap-4
                            "
                        >
                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="
                                    bg-indigo-600
                                    text-white
                                    px-8 py-3
                                    rounded-lg
                                    text-lg
                                    shadow-md
                                    hover:bg-indigo-700
                                "
                            >
                                Solicitar diagnóstico
                            </motion.button>

                            <motion.button
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="
                                    bg-gray-100
                                    text-gray-700
                                    px-8 py-3
                                    rounded-lg
                                    text-lg
                                    hover:bg-gray-200
                                "
                            >
                                Hablar con soporte
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
};
