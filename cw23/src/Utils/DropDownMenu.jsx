import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    PopoverArrow,
    MenuDivider,
    Image,
    Avatar,
    Button,
Flex,
Popover,
PopoverTrigger,
PopoverHeader,PopoverBody,PopoverCloseButton,PopoverContent, IconButton, Text
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"

function DropDown() {
    return <div>
        {/* <Flex alignItems={'center'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'>
            <Menu >
              <MenuButton
             cursor={'pointer'}
                mr={'25px'} 
                ml={'25px'}
               
                >
                <Avatar
                bg={'#2d2d2d'} variant='unstyled'
                boxSize='20px'
                  src={
                    <Image src={process.env.PUBLIC_URL +'/Images/user.png'} boxSize='20px' />
                  }
                />
              </MenuButton>
              <MenuList borderRadius={'none'} bg='gray.100'  w='150px'>
                <MenuItem color={'black'} bg='gray.100' fontSize={'12px'} gap="5px" fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' ><Link to={'./Signup'}>SignUp</Link> | <Link to={'./Login'}>Login</Link></MenuItem>
                  <MenuDivider />
                <MenuItem color={'black'} fontSize={'12px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'><Image src={process.env.PUBLIC_URL +'/Images/user.png'} boxSize='22px'/> My Account </MenuItem>
              
                <MenuItem color={'black'} fontSize={'12px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'>My Orders</MenuItem>
                <MenuItem color={'black'} fontSize={'12px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'>My Returns</MenuItem>
                <MenuItem color={'black'} fontSize={'12px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'>Return Information</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}

<Popover trigger='hover' isLazy >
  <PopoverTrigger>
    <IconButton variant='unstyled'  mr={'10px'} 
                ml={'25px'}><Image src={process.env.PUBLIC_URL +'/Images/user.png'} boxSize='20px' /></IconButton>
  </PopoverTrigger>
  <PopoverContent w={'200px'}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader color={'black'} fontSize={'15px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial' textAlign='left' ><Link to={'./Login'}>Sign In</Link> || <Link to={'./Signup'} >Join</Link></PopoverHeader>
    
    <PopoverBody color={'black'} textAlign='left' fontSize={'15px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,' lineHeight={'25px'} cursor='pointer' >
        <Text _hover={{color:'#0770cf'}}>My Account</Text>
        <Text _hover={{color:'#0770cf'}}>My Orders</Text>
        <Text _hover={{color:'#0770cf'}}>My Returns</Text>
        <Text _hover={{color:'#0770cf'}}>Return Info</Text>
    </PopoverBody>
  </PopoverContent>
</Popover>
    </div>

}
export default DropDown