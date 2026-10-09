function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-amber-500/20 bg-black/70 px-6 py-4 backdrop-blur">
      <span className="font-display text-lg font-bold tracking-[0.3em] text-amber-500">
        PANEM
      </span>
      <div className="flex gap-6 text-sm uppercase tracking-widest text-gray-300">
        <a href="#districts" className="transition hover:text-amber-500">
          Districts
        </a>
        <a href="#reaping" className="transition hover:text-amber-500">
          Reaping
        </a>
      </div>
    </nav>
  )
}

export default Navbar