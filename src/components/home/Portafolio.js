const posts = [
  {
    title: 'Articulos, Presentaciones y Publicaciones',
    href: '#',
    category: { name: 'Diseño y Desarro de Contenido', href: '#' },
    description:
      'Diseñamos y creamos estrategia de contenido digital en redes sociales para empresas, productos, servicios y entretenimiento.  Con el objetivo de mejorar la presencia en línea y aumentar el compromiso con el público objetivo, a través de contenido atractivo y relevante en las principales plataformas de redes sociales.',
    date: '',
    datetime: '',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '',
    author: {
      name: '',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dm1yz7xco/image/upload/v1675460180/Iconos/iconCont_b5dgqq.png',
    },
  },
  {
    title: 'Aplicaciones Multiplataformas y Sitios Web',
    href: '#',
    category: { name: 'App Multiplataformas', href: '#' },
    description:
      'Cada uno de nuestras aplicaciones ofrece una solución sencilla y eficiente, de acuerdo a la investigación del mercado, para comprender la necesidades y preferencia de los usuarios.  Están se desarrollarán bajo una arquitectura y una interfaz de usuario intuitiva y fáciles de usar; multiplataforma.',
    date: '',
    datetime: '',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '',
    author: {
      name: '',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dm1yz7xco/image/upload/v1675457873/Iconos/iconAppMult_p8tu4h.png',
    },
  },
  {
    title: 'Video Juegos y Contenidos de Aprendizaje',
    href: '#',
    category: { name: 'Contenido Interativos', href: '#' },
    description:
      'El objetivo de nuestros contenidos interactivos y/o video juegos, no solo brinda un buen entretenimiento; además que sea una herramienta didáctica, educativa, efectiva y atractiva para niños y jóvenes.  Que les permita aprender de manera divertida y lúdica.',
    date: '',
    datetime: '',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '',
    author: {
      name: '',
      href: '#',
      imageUrl:
        'https://res.cloudinary.com/dm1yz7xco/image/upload/v1675460771/Iconos/IconGame_nylzwr.png',
    },
  },
]

export default function Portafolio() {
  return (
    <div className=" relative px-4 sm:px-6 sm:pt-1 lg:px-16 lg:pt-16 lg:pb-28">
      <div className="absolute max-w-full inset-0">
        <div className="h-1/3 mt-2.5 sm:h-2/3" />
      </div>
      <div className="relative mx-24 sm:mx-10">
        <div className="text-right lg:mx-8">
          <h2 className="mb-12 lg:text-6xl font-bold tracking-tight text-gray-400 sm:text-4xl">Proyectos Dirigidos</h2>
          <p className="mt-3 font-normal text-justify lg:text-2xl md:text-2xl sm:text-xl text-zinc-900">
          "¡Estamos orgullosos de presentar algunos de nuestros proyectos innovadores!
           Con años de experiencia en el desarrollo de soluciones digitales; hemos creado soluciones a medida para satisfacer las necesidades de nuestros clientes. Ofrecemos contenidos de alta calidad, 
           aplicaciones intuitivas, juegos emocionantes multiplataforma, así como sitios web atractivos y fáciles de usar.</p>
        </div>
        <div className="mx-8 mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-zinc-100 p-6">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-indigo-700">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-zinc-900">{post.title}</p>
                    <p className="mt-3 text-lg text-justify text-zinc-600">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 -mr-4 flex place-content-end">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className=" h-16 w-16 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true"></span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

