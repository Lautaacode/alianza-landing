const reasons = [
    {
        title: "Técnicos certificados",
        description: "Personal capacitado en hardware, notebooks y redes",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                className="w-12 h-12 mb-3 inline-block text-accent"
            >
                <path d="M12 2l7 4v6c0 5-3.5 9.7-7 12-3.5-2.3-7-7-7-12V6l7-4z" />
            </svg>
        ),
    },
    {
        title: "Atención rápida",
        description: "Diagnóstico y respuesta en el menor tiempo posible",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                className="w-12 h-12 mb-3 inline-block text-accent"
            >
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
    },
    {
        title: "Presupuestos claros",
        description: "Sin costos ocultos ni sorpresas",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                className="w-12 h-12 mb-3 inline-block text-accent"
            >
                <path d="M12 1v22" />
                <path d="M17 5H9a4 4 0 000 8h6a4 4 0 010 8H6" />
            </svg>
        ),
    },
    {
        title: "Soporte a empresas",
        description: "Mantenimiento y asistencia IT para negocios",
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                className="w-12 h-12 mb-3 inline-block text-accent"
            >
                <path d="M3 3h18v18H3z" />
                <path d="M9 9h6v6H9z" />
            </svg>
        ),
    },
];

export const WhyUs = () => {
    return (
        <section className="text-gray-600 body-font bg-gray-50">
            <div className="container px-6 py-24 mx-auto">
                {/* Header */}
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Brindamos soluciones confiables, rápidas y profesionales para
                        particulares y empresas.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap -m-4 text-center">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            className="p-4 md:w-1/4 sm:w-1/2 w-full"
                        >
                            <div className="border border-gray-200 px-6 py-8 rounded-lg hover:shadow-md transition">
                                {reason.icon}
                                <h3 className="title-font font-semibold text-lg text-gray-900">
                                    {reason.title}
                                </h3>
                                <p className="leading-relaxed mt-2">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
