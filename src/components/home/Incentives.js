
const incentives = [
    {
      name: 'Mejor Precio.',
      imageSrc: 'https://res.cloudinary.com/dm1yz7xco/image/upload/v1674751111/Iconos/iconMejorPrecio_ipdse2.png',
      description: "¡Precios insuperables en servicios digitales! Nuestro equipo de expertos, están listo para ayudarte a mejorar tu rentabilidad. ",
    },
    {
      name: 'Excelente Resultados.',
      imageSrc: 'https://res.cloudinary.com/dm1yz7xco/image/upload/v1674751111/Iconos/iconExcelente_httnbi.png',
      description: "Trabajamos de la mano con nuestros clientes para obtener resultados excelentes en todos nuestros proyectos.",
    },
    {
      name: 'Fácil Manejo.',
      imageSrc: 'https://res.cloudinary.com/dm1yz7xco/image/upload/v1674751111/Iconos/iconFacilMane_lplcvx.png',
      description:"Creamos contenido atractivo y efectivo; aplicaciones innovadoras y diseño de sitios web modernos, fáciles de usar. ",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="mx-24 sm:mx-4">
        <div className="mx-auto lg:mx-4 max-w-full py-24 sm:px-2 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-2xl px-8 lg:max-w-none">
            <div className="max-w-1xl  ">
              <h2 className="lg:text-6xl mb-8 text-3xl lg:mt-10 sm:-mt-24 text-left font-bold tracking-tight text-violeta">
                Nuestro Negocio es Brindarte el Mejor Servicio
              </h2>
              <p className="mt-2 lg:text-2xl sm:text-lg font-light text-justify text-zinc-800">
              Somos una plataforma que pone a tu disposición la tecnología y las soluciones en un solo lugar, para que 
              tu empresa o negocio tenga éxito y sea más rentable, a través de la interacción digital.
              </p>
            </div>
            <div className="mt-20 mb-8 grid grid-cols-1 gap-y-10 gap-x-16 lg:grid-cols-3 ">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:flex sm:pb-8">
                  <div className="sm:flex-shrink-0 py-1 lg:mt-0 sm:-mt-3">
                    <img className="h-20 w-20" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-2 sm:mt-0 sm:ml-2 lg:mt-0 lg:ml-4">
                    <h3 className="text-sm lg:text-2xl sm:text-lg lg:mt-0 sm:-mt-2  font-semibold text-indigo-800">{incentive.name}</h3>
                    <p className="mt-1 font-normal lg:text-2xl  sm:text-sm text-justify text-zinc-800">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }