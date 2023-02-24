import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    PopoverArrow,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

function MensNavbar(){
    const { isOpen, onToggle } = useDisclosure()
    return (
        <div id="mens_navbar">
            <Box>
            <Flex
        bg={useColorModeValue('#525050')}
        color={useColorModeValue( 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
             <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'solid'}
            aria-label={'Toggle Navigation'}
          />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('white')}>
            Logo
          </Text> */}

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
            </Flex>
</Flex>
            </Box>
        </div>
    )
}
const DesktopNav = () => {
    const linkColor = useColorModeValue('white');
    const linkHoverColor = useColorModeValue( 'black');
    const popoverContentBgColor = useColorModeValue('white');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover  placement={'bottom-start'} >
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                //   color={'black'}
                  _hover={{
                    textDecoration:'outline',
                    color: 'black',
                    border:'1px solid white',
                    
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
 
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'0'}
                  bg={popoverContentBgColor}
                  p={4}
                  borderBlock={'Highlight'}
                //   color='black'
                  rounded={'0'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  const DesktopSubNav = ({ label, href, subLabel })=> {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('white') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#0770cf' }}
              fontWeight={500} color='black'>
              {label}
            
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
          </Flex>
        </Stack>
      </Link>
    );
  };  

  const NAV_ITEMS = [
    {
      label: 'Inspiration',
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'Find Work',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Learn Design',
      href: '#',
    },
    {
      label: 'Hire Designers',
      href: '#',
    },
  ];

  export default MensNavbar