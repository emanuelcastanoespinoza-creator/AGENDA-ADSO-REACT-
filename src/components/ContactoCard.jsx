export default function ContactoCard({ contacto, onEliminar }) {
  const { nombre, telefono, correo, etiqueta } = contacto;

  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mb-4 hover:shadow-md transition-all duration-300">

      <h3 className="text-lg font-semibold text-morado-oscuro mb-1">
        {nombre}
      </h3>

      <p className="text-sm text-gray-600">
        📞 {telefono}
      </p>

      <p className="text-sm text-gray-600">
        ✉️ {correo}
      </p>

      {etiqueta && (
        <span className="inline-block mt-3 text-xs bg-morado-claro text-morado-oscuro px-3 py-1 rounded-full">
          {etiqueta}
        </span>
      )}

      <button
        onClick={() => onEliminar(correo)}
        className="mt-4 text-xs text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        🗑 Eliminar
      </button>

    </article>
  );
}