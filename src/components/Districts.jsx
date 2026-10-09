import DistrictCard from './DistrictCard'
import { districts } from '../data/districts'

function Districts() {
  return (
    <section id="districts" className="bg-black px-6 py-24">
      <h2 className="mb-16 text-center text-4xl font-bold uppercase tracking-[0.3em] text-amber-500">
        The Districts
      </h2>

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {districts.map((d) => (
          <DistrictCard
            key={d.id}
            number={d.id}
            industry={d.industry}
            tagline={d.tagline}
            image={d.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Districts