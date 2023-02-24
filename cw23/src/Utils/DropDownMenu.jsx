import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    PopoverArrow
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

function DropDown() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="unstyled"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue('white') ,
            color :useColorModeValue('black')
            }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
             {isOpen ?  <PopoverArrow/>:null}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
        </Menu>
    )
}
export default DropDown