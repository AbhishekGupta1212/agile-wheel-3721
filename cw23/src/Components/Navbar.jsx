import { Box, Button, Flex , useColorModeValue,IconButton,Image, Circle, Spacer, Menu, MenuList, MenuItem,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Search from './Search';
import { useDisclosure } from '@chakra-ui/react';
import DropDown from '../Utils/DropDownMenu';
function Navbar(){          
    return (
        <div id='Navbar'>
            <div className="Navbar-top">
        <Box>
  <Flex bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        h={'30px'}
        // py={{ base: 2 }}
        m={'auto'}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'} 
         >
            <Spacer/>
            <Box borderLeft={'1px'} borderColor={'gray.200 '} >
                 <Button _hover={{color:'#0770cf'}} variant={'unstyled'} h='30px'fontSize={'14px'} px={'20px'}    fontWeight='400' fontFamily='futura-pt,sans-serif' letterSpacing='0.4px'>Marketplace</Button>
            </Box>
          
           <Box borderLeft={'1px'} borderRight={'1px'} borderColor='gray.200' >
                <Button variant={'unstyled'} h='30px' fontSize={'14px'} _hover={{color:'#0770cf'}} px={'20px'}fontWeight='400'  fontFamily='sans-serif,futura-pt' letterSpacing='0.4px'>Help & FAQs</Button>
           </Box>
        <Box  px={'15px'}  mr={'30px'} h='30px' borderRight={'1px'} borderColor='gray.200'>
             <Circle _hover={{borderColor:'#0770cf'}} borderWidth='1px' boxSize={'18px'} ml={'auto'} mt={'6px'}><Image objectFit='cover' src={process.env.PUBLIC_URL +'/Images/us.png'}/></Circle>
          </Box>   
        </Flex>
        
</Box>
</div>  
<div className='Navbar-bottom'>
    <Box bg='#2d2d2d'
color='#FFFFFF'>
        <Flex 
h='60px'
m={'auto'}
align={'center'} 
px={{ base: 4 }}>

<Link to='/' _hover={'pointer'}>
<Box >
    <Image src={process.env.PUBLIC_URL +'/Images/Meta-Trends.png'} h='80px' objectFit={'fill'} />
</Box>
</Link>

<Link to='/WomensLandingPage'>
<Box>
    <Button bg={'#2d2d2d'} borderLeft={'1px'} borderRight={'1px'} borderColor='gray.200' variant={'unstyled'} h='60px' px={'40px'} borderRadius='none' fontWeight='900' fontFamily='futura-pt,sans-serif' fontSize={'14px'}  letterSpacing='2px' _hover={{bg:'#474747'}}>WOMEN</Button>
</Box>
</Link>


    <Link to='/MensLandingPage'> 
<Box>
    <Button bg={'#2d2d2d'} borderColor={'gray.200 '} borderRight={'1px'} variant={'unstyled'} h='60px' px={'40px'} borderRadius='none' fontWeight='900' fontFamily='futura-pt,sans-serif' fontSize={'14px'} letterSpacing='2px' _hover={{bg:'#474747'}}>MEN</Button>
</Box> 
</Link>


<Search/>

    <DropDown/>

<Box mr={'10px'}>
    <IconButton bg={'#2d2d2d'} variant='unstyled'><Image src={process.env.PUBLIC_URL +'/Images/love.png'} boxSize='20px'/></IconButton>
</Box>
<Link to={'/Cart'}>
<Box>
    <IconButton bg={'#2d2d2d'} variant='unstyled'><Image src={process.env.PUBLIC_URL +'/Images/shopping-bag.png'} boxSize='20px'/></IconButton>
</Box>
</Link>



        </Flex>
    </Box>
</div>
{/* Offers section */}
<div>

    <Box m={'auto'} bg='#9cf0e0'px={'10px'} py='5px' fontSize='10px' fontFamily={'Futura-pt,Futura STD,Arial,Verdana,sans-serif'} letterSpacing='2px'>
        
       
        <Flex 
h='40px'
width={'100%'}
justifyContent='space-between'
px={{base:4}}
margin='auto'
align={'center'}
>
    <Link to={'/WomensProductPage'}>
 <Button bg={'#9cf0e0'}variant='unstyled' border='2px solid black' borderRadius={'none'} fontSize='12px' p={'0px'} w='80px' h='25px'>WOMEN</Button>
    </Link>
    
        <strong >UPTO 30% OFF OUTLET ICONS!
            <br />
        Surprise Discount Unlocked
        <br />
        With Code:SURPRISE</strong>
        <Link to={'/MensProductPage'}>
           <Button bg={'#9cf0e0'} variant='unstyled' border='2px solid black' borderRadius={'none'} fontSize='12px' p={'0px'} h='25px' w='80px'>MEN</Button>
        </Link>
    
         </Flex>
    </Box>
</div>
 </div>
    )
}

export default Navbar