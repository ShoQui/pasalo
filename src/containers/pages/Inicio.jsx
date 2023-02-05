import Header from "components/home/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"



function Inicio(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Header/>
            <Navbar/>            
            <Footer/>
            
        </Layout>
    )
}
export default Inicio