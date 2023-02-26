import {GridItem, Image,Text } from "@chakra-ui/react"
import { Link as RouterLink} from "react-router-dom"

function Render({imageUrl,name,price,text,id,colour}){
  
return (
  <div>
    <RouterLink to={'MensProductPage/${id}'}>
  <GridItem >
    <Image src={imageUrl} boxSize='85%' margin={'auto'}/>
        <Text fontSize={'12px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>{name}</Text>
        <Text fontSize={'14px'} fontWeight='700' fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' lineHeight={'20px'} >{price}</Text>
  </GridItem>
        </RouterLink> 
  </div>
  
)

}
export default Render