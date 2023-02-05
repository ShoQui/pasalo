import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import imageBg from 'assets/img/imageBgAbout.jpg'
import logotipo_lg from 'assets/img/logotipo.png'


function Header(){
    return(
        <main>
          <div className="w-full  bg-black bg-opacity-40 top-0 content">
            <div className="-z-10 w-full  bg-black top-0 content">
              <img src={imageBg} />
            </div>
          </div>

        <div className="relative px-6 lg:px-6">
          <div className="mx-full max-w-full mx-4 sm:pt-40 sm:pb-40">
            <div>              
              <div>
                <h1 className="ml-80 border-b-2 border-purple-200-accent text-4xl font-bold text-purple-200-accent tracking-wide sm:text-right sm:text-6xl pt-10  ">
                 Nosotros
                </h1>
                       
                <h3 className='mt-4 ml-32 font-semibold text-zinc-300 text-right text-3xl pb-20'>
                  Nos encargamos para que tu negocio o idea sea rentable.</h3>                
                <div className="mt-8 flex gap-x-4">
                  
                </div>
              </div>              
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header