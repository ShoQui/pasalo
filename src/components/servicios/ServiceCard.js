function ServiceCard({data, index}){
    return(
        <div 
        onMouseEnter={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.add('text-purple-200-accent')
            const img = document.getElementById(data.id)
            img.classList.add('object-scale-down')
        }} 
        onMouseLeave={()=>{
            const title_element = document.getElementById(index)
            title_element.classList.remove('text-purple-200-accent')
            const img = document.getElementById(data.id)
            img.classList.remove('object-scale-down')
        }}
        className="w-full relative p-2 h-96 lg:h-[200pm] bg-pizarra hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full ml-2">
                <img src={data.img} className='w-10 h-10'/>
                <h2 className="pt-4 leading-5 text-xl font-semibold text-gray-900">{data.title}</h2>
                <p className="pt-4 leading-4 text-sm font-regular text-zinc-100">{data.title}</p> 
            </div>
            <div className="w-full absolute bottom-0 left-0 p-4">
                <h2 id={index} className="items-end text-lg font-normal text-gray-900">Learn More</h2>
            </div>
        </div>
    )
}
export default ServiceCard