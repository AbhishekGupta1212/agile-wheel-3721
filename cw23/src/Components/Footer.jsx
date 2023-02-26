import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  Circle,
  Icon,
  Divider

} from '@chakra-ui/react';
import { FaInstagram, FaFacebook,  FaSnapchatGhost ,FaCcVisa, FaCcMastercard, FaPaypal, FaCcPaypal, FaCcApplePay} from 'react-icons/fa';

function Footer(){
return (
    <div>

<div style={{marginTop:10}}>
  <Divider/>
<Box
      bg={useColorModeValue('white')}
      color={useColorModeValue( )}
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}>
       
        <Stack direction={'row'} spacing={6}>
          <Icon label={'Facebook'} href={'#'} boxSize='30px'>
            <FaFacebook />
          </Icon>
          <Icon label={'SnapChat'} href={'#'} boxSize='30px'>
            <FaSnapchatGhost />
          </Icon>
          <Icon label={'Instagram'} href={'#'} boxSize='30px'>
            <FaInstagram />
          </Icon>
          <Box bg={'black'} h='25px' w={'1px'}></Box>
<Icon label={'Visa'} href={'#'} boxSize='32px'>
  <FaCcVisa/>
</Icon>
<Icon label={'MasterCard'} href={'#'} boxSize='32px'>
  <FaCcMastercard/>
</Icon>
<Icon label={'PayPal'} href={'#'} boxSize='32px'>
  <FaCcPaypal/>
</Icon>
<Icon label={'ApplePay'} href={'#'} boxSize='32px'>
  <FaCcApplePay/>
</Icon>
        </Stack>
        
      </Container>
    </Box>
</div>


    <Box
    //   bg={useColorModeValue('gray.50', 'gray.900')}
    bg={'#eeeeee'}
      color={useColorModeValue('gray.700', 'gray.200')}
      fontFamily='futura-pt'
      fontSize={'14px'}
      >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
           <b><h3>HELP AND INFORMATION</h3></b> 
            <Link href={'#'} _hover={{color:'#0770cf'}}>Help</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Track order</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Delivery & returns</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Premier</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>10% Student Discount</Link> 
            <Link href={'#'} _hover={{color:'#0770cf'}}>Sitemap</Link>
          </Stack>

          <Stack align={'flex-start'}>
          <b><h3>ABOUT</h3></b>
            <Link href={'#'} _hover={{color:'#0770cf'}}>About us</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Careers with us</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Corporate responsibility</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Inverstor's site</Link>
          </Stack>

          <Stack align={'flex-start'}>
          <b> <h3>MORE</h3></b>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Mobile Apps</Link>
            <Link href={'#'}_hover={{color:'#0770cf'}}>Marketplace</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>E-gift cards</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Black Friday</Link>
            <Link href={'#'} _hover={{color:'#0770cf'}}>Refer A Friend</Link>
          </Stack>

          <Stack align={'flex-start'}>
               <b><h3>SHIPPING FROM</h3></b>
               <Link href={'#'} _hover={{color:'#0770cf'}}>You're in United States | CHANGE</Link>
          </Stack>
        </SimpleGrid>
      </Container>
     

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bg='#dddddd'
       >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 MetaTrends. All rights reserved</Text>
          <Box
    //   bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
            <Text>Privacy & Cookies | Ts&Cs | Accessibility </Text>
        </Stack>
      </Container>
    </Box>
        </Container>
      </Box>
    </Box>
  
    </div>
)
}
export default Footer