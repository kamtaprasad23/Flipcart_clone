import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/Topbar";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Signup";
import VerifyOTP from "./pages/otppage";
import Removecart from "./pages/removeaddproduct";
import Footer from "./component/footer";
import PaymentPage from "./pages/paymentPage";
import Dropmenupage from "./pages/dropmenuPage"
import ProductDetail from "./pages/ProductDetails";

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Topbar />
    <Removecart />
      <Routes>
        <Route path="/login" element={<LoginPage/>}> </Route>
        <Route path="/" element={<HomePage/>}> </Route>
        <Route path="/otp" element={<VerifyOTP/>}> </Route>
        <Route path="/signup" element={<SignupPage/>}> </Route>
        <Route path="/payment" element={<PaymentPage/>}> </Route>
        <Route path="/csrt" element={<Removecart/>}> </Route>
        <Route path="/products/:category" element={<Dropmenupage/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
       
      </Routes>
       <Footer />
    </BrowserRouter>
    </>
  )
}

export default App