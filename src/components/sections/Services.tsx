const services = [
    {
        title: "Diagnóstico y reparación",
        subtitle: "SERVICIO",
        description:
            "Detección precisa de fallas de hardware y software para una solución efectiva.",
        image: "https://dummyimage.com/720x400",
    },
    {
        title: "Mantenimiento preventivo",
        subtitle: "SERVICIO",
        description:
            "Limpieza interna, optimización y prevención de fallas futuras.",
        image: "https://dummyimage.com/721x401",
    },
    {
        title: "Reparación de notebooks",
        subtitle: "SERVICIO",
        description:
            "Solución de problemas físicos y lógicos en equipos portátiles.",
        image: "https://dummyimage.com/722x402",
    },
    {
        title: "Soporte a empresas",
        subtitle: "EMPRESAS",
        description:
            "Mantenimiento y soporte técnico para entornos corporativos.",
        image: "https://dummyimage.com/723x403",
    },
];

export const Services = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                {/* Header */}
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
                            Nuestros Servicios
                        </h2>
                        <div className="h-1 w-20 bg-accent rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        Brindamos soluciones profesionales en reparación y mantenimiento de
                        hardware para usuarios particulares y empresas.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap -m-4">
                    {services.map((service) => (
                        <div key={service.title} className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg h-full hover:shadow-md transition">
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={service.image}
                                    alt={service.title}
                                />
                                <h3 className="tracking-widest text-accent text-xs font-medium title-font">
                                    {service.subtitle}
                                </h3>
                                <h4 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    {service.title}
                                </h4>
                                <p className="leading-relaxed text-base">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
