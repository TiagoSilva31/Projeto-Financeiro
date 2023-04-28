import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"

const RoutesComponent = () => {
    return (
        <Routes> 
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default RoutesComponent