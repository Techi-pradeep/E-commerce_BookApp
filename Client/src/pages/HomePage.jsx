// import HomeStyle from "../styles/Home.module.css"
import MyCarousel from "../components/Carousel"
const Home = () => {
  return (
    <>
      
    <header/>
   
    {/* CSS moudule --for soliving name clash and local scope  */} 
    {/* <div className={HomeStyle.text}>Home</div>   */}
    
    <MyCarousel />
    </>
  )
}

export default Home