import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Home from "../pages/home";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>        
    );
}

export default Router;