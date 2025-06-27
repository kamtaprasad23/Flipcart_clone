import BannerSlider from "../pages/bannerSlider.jsx";
import Navbar from "../component/Navbar"
import Product from "../pages/cardprodeuct.jsx";
import ProductHomepage from "./ProductHomepage.jsx";
import FlipkartInfoPage from "./FlipkartInfoPage.jsx";


const HomePage = ()=>{
    return(
        <>
        <Navbar />
        <BannerSlider />
         <Product />
         <ProductHomepage />
         <FlipkartInfoPage />
        </>
    )
}
export default HomePage