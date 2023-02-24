import { Link, Route,Routes,useParams} from "react-router-dom";
import {Router, Switch} from 'react-router'
import Homepage from "./Homepage";
import WomensLandingPage from './WomensLandingPage'
import MensLandingPage from './MensLandingPage'
import Cart from "./Cart";
import Womens from "./WomensProductPage";
import Mens from "./MensProductPage";
import SingleProduct from "./SingleProduct";

function AllRoutes(){
    return (
        <div>
            <Routes>
               
                 <Route path="/" element={<Homepage/>}/>
                <Route path="/WomensLandingPage" element={<WomensLandingPage/>}/>
                <Route path="/MensLandingPage" element={<MensLandingPage/>}/>
                <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/WomensProductPage" element={<Womens/>}/>
                <Route path="/MensProductPage" element={<Mens/>}/>
               
            </Routes> */
          

           
       
        </div>
    )
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }
export default AllRoutes