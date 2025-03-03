import Image from 'next/image'

import cantinaLogo from '../assets/cantinaLogo.svg'
import sloganMenu from '../assets/sloganMenu.svg'

export default function Home() {
  return (
    <div>
      <div className="bg-red-800 w-full rounded-b-4xl h-48">
        <div className="flex flex-col justify-center items-center py-3.5">
          <Image src={cantinaLogo} alt="Cantina Logo" width={96} height={96} />
          <Image src={sloganMenu} alt="Slogan Menu" width={322} height={68} />
        </div>
      </div>

      <div className="py-6">dadasad</div>
    </div>
  )
}
