import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import videoBg from 'assets/video/Fondo.mp4'
import logotipo_lg from 'assets/img/logotipo.png'


function Header(){

    return(
        <main>
          <div className="w-full  bg-black bg-opacity-75 top-0 content">
            <div className="-z-40 w-full top-0 sm:h-screen">
              <video src={videoBg} autoPlay loop muted />
            </div>
          </div>
        <div className="relative px-6 lg:px-8 pt-10">
          <div className="mx-auto max-w-3xl  sm:pt-40 sm:pb-40">
            <div>
              <div className="-mt-16 sm:flex sm:justify-center">
                <div className="hidden lg:flex pb-8">
                <img src={logotipo_lg} width={666} className='' />
                </div>
                <div className="lg:hidden md:flex md:-mt-10 sm:-mt-28 sm:mb-6 pb-18">
                <img src={logotipo_lg} width={350} className='' />
                </div>
              </div>
              <div>
                <h3 className="hidden lg:block text-7xl font-semibold text-slate-200 tracking-wide sm:text-center pt-4 pb-4 ">
                  Nosotros
                </h3>
                <h3 className="lg:hidden md:block sm:block text-4xl font-semibold text-slate-200 tracking-wide sm:text-center pt-1 pb-1 ">
                  Nosotros
                </h3>
                    <h2 className="hidden lg:block text-7xl text-center font-bold tracking-tight py-2">                        
                        <span style={{ color: '#d500f9', fontWeight: 'bold' }}>
                        <Typewriter
                        words={[' LO HACEMOS', ' DISEÑAMOS', ' PRODUCIMOS', 'PUBLICAMOS', ' NOS ENCARGAMOS']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        cursorColor='#18181b'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                        </span>                        
                    </h2>
                    <h2 className="lg:hidden md:block sm:block text-4xl text-center font-bold tracking-tight py-1 pb-8">                        
                        <span style={{ color: '#d500f9', fontWeight: 'bold' }}>
                        <Typewriter
                        words={[' LO HACEMOS', ' DISEÑAMOS', ' PRODUCIMOS', 'PUBLICAMOS', ' NOS ENCARGAMOS']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        cursorColor='#18181b'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                        />
                        </span>                        
                    </h2>
                
                <ul className='hidden lg:flex gap-8 place-content-center pt-16 pb-12'>
                    <li className='inline-flex py-1 px-2 border-b text-xl text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Aplicaciones</Link> </li>
                    <li className='inline-flex py-1 px-2 border-b text-xl text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Contenidos</Link> </li>
                    <li className='inline-flex py-1 px-2 border-b text-xl text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Video Juegos</Link> </li>
                    <li className='inline-flex py-1 px-2 border-b text-xl text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Publicaciones</Link> </li>
                </ul>
                <ul className='lg:hidden md:flex sm:grid gap-8 place-content-center pb-8 '>
                    <li className='inline-flex px-2 sm:place-content-center sm:-mb-5 border-b text-lg text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Aplicaciones</Link> </li>
                    <li className='inline-flex px-2 sm:place-content-center sm:-mb-5 border-b text-lg text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Contenidos</Link> </li>
                    <li className='inline-flex px-2 sm:place-content-center sm:-mb-5 border-b text-lg text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Video Juegos</Link> </li>
                    <li className='inline-flex px-2 sm:place-content-center sm:-mb-5 border-b text-lg text-semibold text-zinc-100 hover:border-b-2 hover:border-b-purple-200-accent'> <Link to='/planes/paquetes' >Publicaciones</Link> </li>
                </ul>                
                
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded bg-zinc-300 px-4 py-1 text-base font-semibold text-black shadow-sm ring-2 ring-zinc-300 hover:ring-zinc-200 hover:bg-transparent hover:text-zinc-200"
                  >Comencemos</a>
                  <a
                    href="#"
                    className="inline-block rounded bg-violeta px-4 py-1 text-base font-bold text-zinc-300 shadow-sm ring-2 ring-zinc-300 hover:ring-violeta hover:bg-transparent hover:text-violeta"
                  >
                    Demostración</a>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header