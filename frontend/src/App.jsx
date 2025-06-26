import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./component/Topbar";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/Signup";
import VerifyOTP from "./pages/otppage";
import Removecart from "./pages/removeaddproduct";
import Footer from "./component/footer";

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Topbar />
  
      <Routes>
        <Route path="/login" element={<LoginPage/>}> </Route>
        <Route path="/" element={<HomePage/>}> </Route>
        <Route path="/otp" element={<VerifyOTP/>}> </Route>
        <Route path="/signup" element={<SignupPage/>}> </Route>
        <Route path="/removecart" element={<Removecart/>}> </Route>
        
        
      </Routes>
       <Footer />
    </BrowserRouter>
    </>
  )
}

export default App