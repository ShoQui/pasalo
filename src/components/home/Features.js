import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Diseño y Desarrollo Web',
    description: 'Sitios web personalizados y adaptables a dispositivos móviles.',
  },
  { name: 'Marketing Digital', 
    description: 'Optimización de motores de búsqueda (SEO), publicidad en línea, marketing en las redes sociales y email marketing.' },
  {
    name: 'Diseño Gráfico',
    description: 'diseño de logotipos, folletos, tarjetas de presentación, carteles y otros materiales de publicidad.',
  },
  { name: 'Publicaciones Digitales', 
    description: 'Creación de e-books, revistas digitales, folletos en línea, videos, imagenes y otros contenidos digitales para redes sociales.' },
  { name: 'Video y Animación', 
    description: 'Producción de videos corporativos, animaciones, vídeos promocionales y otros contenidos de video.' },
  { name: 'Servicios de Alojamiento Web', 
    description: 'Alojamiento seguro y confiable para tus sitios web y aplicaciones.' },
  { name: 'Monitoreo y Avances', 
    description: 'Herramientas de monitoreo para realizar seguimiento del progreso de los proyectos y tareas.' },
  { name: 'Aplicaciones Multiplataforma', 
    description: 'Desarrollo de aplicaciones móviles y de escritorio, automatización de procesos y soluciones de tecnología de la información.' },
]

export default function Features() {
  return (
    <div className="bg-zinc-100 ">
      <div className="mx-auto max-w-full lg:mx-24 sm:mx-4 py-16 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-10 lg:mr-14">
        <div>
          <h2 className="-mb-1 text-3xl font-bold text-indigo-800">Todo lo Que Necesitas...</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-violeta">Plataforma Todo en Uno</p>
          <p className="mt-6 mr-8 text-lg text-justify text-zinc-800">Todas tus necesidades digitales en un solo lugar.  Encontraras una amplía selección de servicios digitales; tales como:  aplicaciones multiplataformas, diseño y producción de contenido digitales, publicaciones en múltiples redes sociales, video juegos y contenido interactivos de aprendizaje, sitios web y mucho más.
          <br /> <br />
          Experimenta la comodidad de resolver todas tus necesidades digitales, mejorando la rentabilidad de tu negocio.

          </p>
        </div>
        <div className="mt-12 mr-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-violeta" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-justify text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}