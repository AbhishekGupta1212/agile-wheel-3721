import Navbar from "../Components/Navbar"
import { Box, Grid, GridItem, Image ,Text} from "@chakra-ui/react"
import { Navigate, useNavigate } from "react-router-dom"

function MensLandingPage(){
    const navigate=useNavigate()
    const handleClick=()=>navigate('/MensProductPage')

    
    return (
        <div>
              <Navbar/>
              {/* <Image src={process.env.PUBLIC_URL +'/Images/OfferPoster.jpeg'}/> */}
              <Box bg={'#FF385C'} h='200px' mb={'20px'} px='24px' my={'24px'} onClick={handleClick} _hover={'pointer'}>
                <Text fontSize={'38px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'1000'} lineHeight='48px'  fontStyle='italic' >
                    UP TO 50% OFF
                </Text>
                <Text fontSize={'38px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'900'} fontStyle='italic'>
                    LAYERING LEGENDS
                </Text>
                <Text fontSize={'32px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'900'} letterSpacing={'1.5px'} fontStyle='italic'>COATS,HOODIES AND MORE</Text>
                <Text fontSize={'10px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' fontWeight={'400'} lineHeight='16px' letterSpacing={'.8px'} px='.1em' py={' .37em'} >Limited time only. Selected styles marked down as shown</Text>
              </Box>
              <Image src={process.env.PUBLIC_URL +'/Images/mensPosterL.jpg'} m='auto'mb={'30px'}/>
              
              <Grid templateColumns='repeat(4,3fr)' gap={8} mt='20px' w={'90%'} m='auto' fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'>
            <GridItem ><Image src={process.env.PUBLIC_URL +'/Images/ImageMen/mw_global_new_szn_trousers_moment_870x1110.webp'} mb='8px'/>
            <Text fontSize={'18px'} mb='8px'>NEW PANTS</Text>
            <Text fontSize={'17px'}>Incl. on-trend cargos, ofc</Text>
            </GridItem>
            <GridItem><Image src={process.env.PUBLIC_URL +'/Images/ImageMen/mw_global_new_szn_prints_moment_870x11101.webp'} mb='8px'/>
            <Text fontSize={'18px'} mb='8px'>THINK PRINT</Text>
            <Text fontSize={'17px'}>Artwork-heavy hits</Text>
            </GridItem>
            <GridItem><Image src={process.env.PUBLIC_URL +'/Images/ImageMen/mw_global_new_season_brights_moment_870x1110.webp'} mb='8px'/>
            <Text fontSize={'18px'} mb='8px'>NEW IN</Text>
            <Text fontSize={'17px'}>Check 'em out</Text>
            </GridItem>
            <GridItem ><Image _hover={'pointer'} src={process.env.PUBLIC_URL +'/Images/ImageMen/mw_global_contingency_new_in_moment_870x1110.webp'} mb='8px' />
            <Text fontSize={'18px'} mb='8px'>BRIGHT ON</Text>
            <Text fontSize={'17px'}>Bold moves</Text>
            </GridItem>
              </Grid>
              
        </div>
      

    )

}
export default MensLandingPage