import { useState } from 'react'
import { districts } from '../data/districts'

const girlNames = ['Willow', 'Briar', 'Sable', 'Ember', 'Juniper', 'Wren']
const boyNames = ['Flint', 'Rowan', 'Cedar', 'Ash', 'Thorne', 'Reed']

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function Reaping() {
  const [ result, setResult ] = useState(null)
  const [ isDrawing, setIsDrawing ] = useState(false)
  const [ drawCount, setDrawCount ] = useState(0)

  const handleReap = () => {
    setIsDrawing(true)
    setResult(null)

    setTimeout(() => {
      setResult({
        district: pickRandom(districts),
        girl: pickRandom(girlNames),
        boy: pickRandom(boyNames)
      })
      setIsDrawing(false)
      setDrawCount((count) => count + 1)
    }, 1500)
  }

  return (
    <section id='reaping' className='bg-neutral-950 px-6 py-24'>
      <h2 className="mb-4 text-center text-4xl font-bold uppercase tracking-[0.3em] text-amber-500">
        The Reaping
      </h2>
      <p className="mb-12 text-center text-gray-400">
        Press the button. Let fate decide.
      </p>

      <div className='mx-auto flex max-w-2xl flex-col items-center'>
        <button 
          onClick={handleReap}
          disabled={isDrawing}
          className='border-2 border-amber-500 px-10 py-4 font-semibold uppercase tracking-widest text-amber-500 transition hover:bg-amber-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40'
        >
          {isDrawing ? 'Drawing...' : 'Draw Tributes'}
        </button>
        
        {isDrawing && (
          <p className='mt-12 animate-pulse text-xl uppercase tracking-widest text-gray-500'>
            Reaching into the bowl...
          </p>
        )}

        {result && (
          <div
            key={drawCount}
            className="animate-fade-up mt-12 w-full overflow-hidden border border-amber-500 bg-neutral-900 shadow-lg shadow-amber-500/20">
            <img
              src={result.district.image}
              alt={result.district.name}
              className="h-64 w-full object-cover opacity-70"
            />
            <div className="p-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
                {result.district.name} · {result.district.industry}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase text-gray-500">Female Tribute</p>
                  <p className="text-2xl font-bold text-white">{result.girl}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">Male Tribute</p>
                  <p className="text-2xl font-bold text-white">{result.boy}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  )
}

export default Reaping