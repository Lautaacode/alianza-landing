export const Contact = () => {
    return (
        <section className="bg-gray-50 py-20 px-6">
            <h2 className="text-3xl font-bold text-center">Contacto</h2>
            <form className="max-w-xl mx-auto mt-10 space-y-4">
                <input className="w-full border p-3 rounded" placeholder="Nombre" />
                <input className="w-full border p-3 rounded" placeholder="Email" />
                <textarea
                    className="w-full border p-3 rounded"
                    placeholder="Mensaje"
                />
                <button className="bg-accent text-white px-6 py-3 rounded w-full">
                    Enviar consulta
                </button>
            </form>
        </section>
    );
};
