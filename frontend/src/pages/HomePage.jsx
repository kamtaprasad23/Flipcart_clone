import BannerSlider from "../pages/bannerSlider.jsx";
import Navbar from "../component/Navbar"
import Product from "../pages/cardprodeuct.jsx";


const HomePage = ()=>{
    return(
        <>
        <Navbar />
        <BannerSlider />
         <Product />
        </>
    )
}
export default HomePage