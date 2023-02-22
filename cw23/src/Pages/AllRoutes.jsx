import { Route,Routes } from "react-router-dom";
import Homepage from "./Homepage";
import WomensLandingPage from './WomensLandingPage'
import MensLandingPage from './MensLandingPage'

function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/WomensLandingPage" element={<WomensLandingPage/>}/>
                <Route path="/MensLandingPage" element={<MensLandingPage/>}/>
                <Route/>
                <Route/>
            </Routes>
        </div>
    )
}
export default AllRoutes