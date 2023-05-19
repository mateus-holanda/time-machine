import Image from 'next/image'
import Logo from '../assets/logo.svg'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={Logo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your time machine
        </h1>
        <p className="text-lg leading-relaxed">
          Collect memorable moments from your journey and share them with the
          world!
        </p>
      </div>

      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href=""
      >
        REGISTER MEMORY
      </a>
    </div>
  )
}