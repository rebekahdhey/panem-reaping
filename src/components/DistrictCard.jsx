function DistrictCard({ number, industry, tagline, image }) {
  return (
    <div className="group relative h-80 overflow-hidden border border-amber-500/300 bg-neutral-900 transition duration-300 hover:translate-y-2 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/30">
      <img
        src={image}
        alt={`District ${number}`}
        className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-110 group-hover:opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="absolute bottom-0 p-5">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
          District {number}
        </p>
        <h3 className="mt-1 text-2xl font-bold text-white">{industry}</h3>
        <p className="mt-1 text-sm text-gray-400">{tagline}</p>
      </div>
    </div>
  )
}

export default DistrictCard