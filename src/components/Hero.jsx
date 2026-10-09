import forest from '../assets/images/forest.jpg'
import mockingjay from '../assets/images/mockingjay.jpg'


const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img src={forest} alt='Dark Forest' className='absolute inset-0 h-full w-full object-cover'/>

      <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/50'></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <img
          src={mockingjay}
          alt="Mockingjay"
          className="animate-glow mb-6 h-32 w-32 rounded-full border-4 border-amber-500 object-cover"
        />
        <h1 className="font-display text-5xl font-bold uppercase tracking-[0.3em] text-amber-500 md:text-7xl">
          The Reaping
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-300">
          Twelve districts. One arena. Step forward, tribute.
        </p>
        <a
          href="#districts"
          className="mt-8 border-2 border-amber-500 px-8 py-3 font-semibold uppercase tracking-widest text-amber-500 transition hover:bg-amber-500 hover:text-black"
        >
          Enter Panem
        </a>
      </div>
    </section>
  )
}

export default Hero