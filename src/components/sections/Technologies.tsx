const technologies = [
    {
        title: "Sistemas Operativos",
        description:
            "Instalación, configuración y optimización de Windows y Linux para uso doméstico y empresarial.",
        icon: (
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        ),
    },
    {
        title: "Hardware y Actualizaciones",
        description:
            "Upgrade de SSD, RAM, fuentes y diagnóstico completo de componentes.",
        icon: (
            <>
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </>
        ),
    },
    {
        title: "Redes y Soporte",
        description:
            "Configuración de redes, routers, cableado y soporte técnico para empresas.",
        icon: (
            <>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </>
        ),
    },
];

export const Technologies = () => {
    return (
        <section className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="sm:text-3xl text-2xl font-bold title-font text-center text-gray-900 mb-20">
                    Tecnologías y Herramientas
                    <br className="hidden sm:block" />
                    con las que trabajamos
                </h2>

                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    {technologies.map((tech) => (
                        <div key={tech.title} className="p-4 md:w-1/3 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                >
                                    {tech.icon}
                                </svg>
                            </div>

                            <div className="flex-grow pl-6">
                                <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
                                    {tech.title}
                                </h3>
                                <p className="leading-relaxed text-base">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
