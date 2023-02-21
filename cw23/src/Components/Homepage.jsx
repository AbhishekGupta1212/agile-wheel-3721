import { Image } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar from "./Navbar";
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