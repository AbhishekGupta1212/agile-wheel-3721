import { Box, Button, Flex, Select ,Text,Option,Image} from "@chakra-ui/react";

function SingleRender({Imageurl,price,name,color,HandleClick}){
    return (
        <div>
            <Flex>
                <Box>
                    <Image src={Imageurl}/>
                </Box>
                <Box >
                    <Text>{name}</Text>
                    <Text>US : {price}</Text>
                    <Text>COLOR : {color}</Text>
                    <Text>Size:</Text>
                    <Select>
                        <option value=''>Please Select</option>
                        <option value='US 2'>US 2</option>
                        <option value='US 4'>US 4</option>
                        <option value='US 6'>US 6</option>
                        <option value='US 8'>US 8</option>
                        <option value='US 10'>US 10</option>
                    </Select>
                   
                     <Box border={'1px solid gray.300'}>
                        <Text>Free Delivery</Text>
                        <Text>Free Returns</Text>
                     </Box>
                     <Button onClick={()=>HandleClick}>Add to Cart</Button>
                </Box>
            </Flex>
        </div>
    )
}
export default SingleRender