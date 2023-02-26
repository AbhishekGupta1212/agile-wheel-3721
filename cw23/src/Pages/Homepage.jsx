import { Image } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Homepage(){
 return (
   <div>
     <Navbar/>
  <Image src={process.env.PUBLIC_URL +'/Images/generic-hp-desktop-unisex-1400x698.webp'}/>
  <Footer/>
</div>
 )
}
export default Homepage