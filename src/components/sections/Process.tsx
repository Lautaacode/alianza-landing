const steps = [
    {
        title: "Contacto",
        description: "El cliente se comunica con nosotros por WhatsApp, formulario o teléfono.",
        icon: (
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        ),
    },
    {
        title: "Diagnóstico",
        description: "Analizamos el equipo para detectar la falla o necesidad de mantenimiento.",
        icon: (
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        ),
    },
    {
        title: "Presupuesto",
        description: "Enviamos un presupuesto claro y sin costos ocultos.",
        icon: (
            <>
                <circle cx="12" cy="5" r="3" />
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
            </>
        ),
    },
    {
        title: "Entrega",
        description: "Equipo reparado, probado y listo para usar.",
        icon: (
            <>
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </>
        ),
    },
];

export const Process = () => {
    return (
        <section className="text-gray-600 body-font py-24">
            <div className="container px-5 mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                    Cómo trabajamos
                </h2>

                <div className="flex flex-wrap">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto"
                        >
                            {/* Línea vertical */}
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>

                            {/* Número */}
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-accent text-white relative z-10 font-medium text-sm">
                                {index + 1}
                            </div>

                            {/* Contenido */}
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-accent/10 text-accent rounded-full inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        {step.icon}
                                    </svg>
                                </div>

                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h3 className="font-medium text-gray-900 mb-1 text-xl">
                                        {step.title}
                                    </h3>
                                    <p className="leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
