// import HomeStyle from "../styles/Home.module.css"
import MyCarousel from "../components/Carousel"
import HeroPart from "../components/HeroPart"
import Author from "../components/CardCarousel"
import Contact from "./Contact"

const HomePage = () => {
  return (
    <>
      
    <header style={{position:"fixed"}}/>
   
    {/* CSS moudule --for soliving name clash and local scope  */} 
    {/* <div className={HomeStyle.text}>Home</div>   */}
    
    <MyCarousel />
    <HeroPart />
    <Author />
    <Contact/>
    </>
    
  )
}

export default HomePage