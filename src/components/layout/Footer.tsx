export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

                {/* Marca / Confianza */}
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        Servicio Técnico Hardware
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                        Reparación y mantenimiento de PCs, notebooks y equipos empresariales.
                    </p>
                    <p className="mt-2 text-sm text-gray-400">
                        Atención rápida · Diagnóstico claro · Garantía escrita
                    </p>
                </div>

                {/* Servicios */}
                <nav aria-label="Servicios">
                    <h4 className="text-sm font-semibold uppercase text-white tracking-wide">
                        Servicios
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        {[
                            "Diagnóstico y reparación",
                            "Mantenimiento preventivo",
                            "Soporte a empresas",
                            "Armado de equipos",
                        ].map((item) => (
                            <li key={item} className="hover:text-white cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contacto */}
                <div>
                    <h4 className="text-sm font-semibold uppercase text-white tracking-wide">
                        Contacto
                    </h4>
                    <p className="mt-4 text-sm text-gray-400">
                        📍 Atención en taller y a domicilio
                    </p>
                    <p className="text-sm text-gray-400">📧 soporte@serviciotecnico.com</p>
                    <p className="text-sm text-gray-400">📞 +54 11 1234 5678</p>

                    {/* Redes */}
                    <div className="flex gap-4 mt-4">
                        {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                            <button
                                key={social}
                                aria-label={social}
                                className="w-10 h-10 rounded-full border border-gray-600
                                flex items-center justify-center
                                hover:bg-white hover:text-slate-900 transition"
                            >
                                {social[0]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Legal */}
            <div className="border-t border-gray-800 text-center py-6 text-xs text-gray-500">
                © {new Date().getFullYear()} Servicio Técnico Hardware. Todos los derechos reservados.
            </div>
        </footer>
    );
};
