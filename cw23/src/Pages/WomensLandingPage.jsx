import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Box,Grid,GridItem,Image,Text } from "@chakra-ui/react"

function WomensLandingPage(){
    const navigate=useNavigate()
    const handleClick=()=>navigate('/WomensProductPage')

    return(
        <div id="main">
              {/* Top to Middle of the Page includes navbar & offer */}
             <Navbar/>
        <Box bg={'#FF385C'} h='200px' mb={'20px'} px='24px' my={'24px'} onClick={handleClick} _hover={{cursor:'pointer'}}>
                <Text fontSize={'38px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'1000'} lineHeight='48px'  fontStyle='italic' >
                    UP TO 50% OFF
                </Text>
                <Text fontSize={'38px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'900'} fontStyle='italic'>
                    LAYERING LEGENDS
                </Text>
                <Text fontSize={'32px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'900'} letterSpacing={'1.5px'} fontStyle='italic'>COATS,HOODIES AND MORE</Text>
                <Text fontSize={'10px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'400'} lineHeight='16px' letterSpacing={'.8px'} px='.1em' py={' .37em'} >Limited time only. Selected styles marked down as shown</Text>
              </Box>
              {/* Mid of the page contains different cards and slider */}
            <Image src={process.env.PUBLIC_URL +'/Images/ImageWomen/MainPoster.webp'} mb='20px'/>
            <Grid templateColumns='repeat(4,3fr)' gap={8} mt='20px' w={'90%'} m='auto' fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'>
           <GridItem>
            <Image src={process.env.PUBLIC_URL +'/Images/ImageWomen/Card1.webp'}/>
            </GridItem>
             <GridItem>
                 <Image src={process.env.PUBLIC_URL +'/Images/ImageWomen/Card2.webp'}/>
           </GridItem>
             <GridItem>
            <Image src={process.env.PUBLIC_URL +'/Images/ImageWomen/Card3.webp'}/>
           </GridItem>
             <GridItem>
               <Image src={process.env.PUBLIC_URL +'/Images/ImageWomen/Card4.webp'}/>
           </GridItem>
            </Grid>
{/* End of the page with Footer */}
<Footer/>
        </div>
       
    )

}
export default WomensLandingPage