import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import imageBg from 'assets/img/imageBg.jpg'
import logotipo_lg from 'assets/img/logotipo.png'


function Header(){
    return(
        <main>
          <div className="w-full bg-black bg-opacity-80 top-0 content">
            <div className="-z-10 w-full  bg-black top-0 content">
              <img src={imageBg} />
            </div>
          </div>

        <div className="relative px-6 lg:px-6">
          <div className="mx-full max-w-full mx-4 sm:pt-40 sm:pb-40">
            <div>              
              <div>
                <h1 className="text-4xl font-bold text-slate-200 tracking-wide sm:text-right sm:text-6xl pt-20 pb-2 ">
                 Lo Que Tu Necesites
                </h1>
                <h2 className="text-4xl font-bold border-b-2 border-purple-200-accent tracking-tight sm:text-right sm:text-6xl py-2 ">                        
                    <span style={{ color: '#d500f9', fontWeight: 'bold' }}>
                    <Typewriter
                    words={['LO DISEÑAMOS', 'LO DESARROLLAMOS', 'LO PRODUCIMOS', 'LO PUBLICAMOS', ' NOS ENCARGAMOS']}
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
                <h3 className='mt-4 ml-32 font-bold text-zinc-300 text-right text-3xl'>
                  Servicios y Productos Digitales,<br/>Para Que Tu Negocio Sea Mas Rentable.</h3>                
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