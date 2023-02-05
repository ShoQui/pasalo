export default function CTA() {
    return (
      <div className="bg-zinc-100">
        <div className="mx-auto lg:mx-16 max-w-full py-12 px-4  sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Listo Para Sumergirte?</span>
            <span className="block text-violeta">Comience Su Prueba Gratis Hoy.</span>
          </h2>
          <div className="mt-8 flex lg:mr-12 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-800 px-5 py-3 text-base font-medium text-white hover:bg-violeta"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium border-violeta text-violeta hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }