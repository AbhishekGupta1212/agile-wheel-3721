import { Button, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router"

function OrderSuccess(){
    const nav=useNavigate()
    const handleHome=()=>{
        nav('/')
    }
return (
    <div>
          <Text align={'center'} fontSize='120px'>THANKS
        <br />
        FOR SHOPPING 
        <br />
        WITH META TRENDS
    </Text>
    <Button onClick={handleHome}>Back To Home</Button>
    </div>
  
)
}
export default OrderSuccess