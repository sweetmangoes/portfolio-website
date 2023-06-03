import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className=' border-color: bg-yellow-500 flex justify-evenly'>
        <div className='border-color: bg-red-800 flex columns-lg'>
          <p> 👋  Hi everyone, my name is </p>
          <h1> Christian Alphonse </h1>
          <p> I'm a full stack developer.</p>
        </div>
        <>
          Photo
        </>
      </section>

    </main>
  )
}
