import { Route, Routes } from "react-router-dom";
import LoginPage from "./Loginpage/Loginpage";

function VastoRouter(){

    return(
            <Routes>
               <Route path="/" element={<LoginPage/>} />
            </Routes>
    )
}

export default VastoRouter