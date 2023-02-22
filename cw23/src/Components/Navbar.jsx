import { Box, Button, Flex , useColorModeValue,Divider, Stack,StackDivider,IconButton,Image, Circle, Spacer, color, Input ,InputRightElement, InputGroup ,Icon} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Search from './Search';

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

{/* <Spacer/> */}
<Box mr={'10px'} ml={'25px'}>
    <IconButton bg={'#2d2d2d'} variant='unstyled' onCl><Image src={process.env.PUBLIC_URL +'/Images/user.png'} boxSize='20px' /></IconButton>
</Box>
<Box mr={'10px'}>
    <IconButton bg={'#2d2d2d'} variant='unstyled'><Image src={process.env.PUBLIC_URL +'/Images/love.png'} boxSize='20px'/></IconButton>
</Box>
<Box>
    <IconButton bg={'#2d2d2d'} variant='unstyled'><Image src={process.env.PUBLIC_URL +'/Images/shopping-bag.png'} boxSize='20px'/></IconButton>
</Box>


        </Flex>
    </Box>
</div>
<div>
    <h1>OFFERS</h1>
</div>
 </div>
    )
}

export default Navbar