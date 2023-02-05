import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Clientes from "components/nosotros/Clientes"
import Features from "components/nosotros/Features"
import Header from "components/nosotros/Header"
import Images from "components/nosotros/Images"
import Team from "components/nosotros/Team"
import Testimonio from "components/nosotros/Testimonio"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"



function Nosotros(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Navbar/>
            <div className="pt-14">
                <Header/>  
                <Testimonio/>                                    
            </div>
            <div className="py-8">
                <Images/>
                <Clientes/>
                <Features/>
                <Team/>
            </div>

            <Footer/>
            
        </Layout>
    )
}
export default Nosotros