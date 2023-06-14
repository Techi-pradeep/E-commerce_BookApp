// import HomeStyle from "../styles/Home.module.css"
import MyCarousel from "../components/Carousel"
import HeroPart from "../components/HeroPart"
import Author from "../components/CardCarousel"
import Contact from "./Contact"

const HomePage = () => {
  return (
    <>
    {/* header & footer are already fixed for all pages in app.jsx */}
    <MyCarousel />
    <HeroPart />
    <Author />
    <Contact />
    </>
    
  )
}

export default HomePage