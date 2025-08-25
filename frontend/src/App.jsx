import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup"
import Captainlogin from "./pages/Captainlogin"
import Captainsignup from "./pages/Captainsignup"
import UserContext, { UserDataContext } from "./context/UserContext";
import { useContext } from "react";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome";
import CaptainContext from "./context/CaptainContext";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";

const App = () => {

    // const ans = useContext(UserDataContext)
    // console.log(ans);

    return (
        <div >
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/login' element={<UserLogin />} />
                <Route path='/signup' element={<UserSignup />} />
                <Route path='/captain-login' element={<Captainlogin />} />
                <Route path='/captain-signup' element={<Captainsignup />} />
                <Route path="/home"
                    element={
                        <UserProtectWrapper>
                            <Home />
                        </UserProtectWrapper>
                    } />
                <Route path="/user/logout"
                    element={
                        <UserProtectWrapper>
                            <UserLogout />
                        </UserProtectWrapper>
                    } />
                <Route path="/captain-home"
                    element={
                        <CaptainProtectWrapper>
                            <CaptainHome />
                        </CaptainProtectWrapper >
                    } />
            </Routes>
        </div >
    )
}

export default App