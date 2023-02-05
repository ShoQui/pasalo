import ServiceCard from "./ServiceCard"


function ServicesList({posts,Section_title}){
    return(
        <>
        <div className="relative bg-black px-4 pt-8 pb-10 sm:px-6 lg:px-8 lg:pt-12 lg:pb-8">
            <div className="absolute inset-0">
            <div className="h-1/3 bg-black sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{Section_title}</h2>
                
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {posts.map((post, index) => (
                <ServiceCard data={post} index={index}/>
                ))}
            </div>
            </div>
        </div>
        </>
    )
}
export default ServicesList