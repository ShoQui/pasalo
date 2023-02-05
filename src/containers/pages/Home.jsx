import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import LogoCloud from "components/home/LogoCloud"
import Portafolio from "components/home/Portafolio"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"

function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
                <Navbar/>                        
                               
                    <div data-scroll-section className="pt-28">
                        <Header/>   
                        <Incentives/>                     
                        <Portafolio/>
                        <Features/>
                        <CTA/>
                        <LogoCloud/>
                        <BlogList/>       
                    </div> 
                <Footer/>                
            
        </Layout>
    )
}
export default Home