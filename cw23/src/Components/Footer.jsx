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
  Circle

} from '@chakra-ui/react';
// import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

function Footer(){
return (
    <div>

    {/* <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
    </chakra.button> */}
 
<div>
    <h3>SOCILA</h3>
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
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
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