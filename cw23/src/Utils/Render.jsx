import {GridItem, Image,Text } from "@chakra-ui/react"

function Render({imageUrl,name,price,text}){
return (
  <GridItem >
    <Image src={imageUrl} boxSize='85%' margin={'auto'}/>
        <Text fontSize={'12px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>{name}</Text>
        <Text fontSize={'14px'} fontWeight='700' fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif' lineHeight={'20px'} >{price}</Text>
  </GridItem>
        
       
    
)

}
export default Render