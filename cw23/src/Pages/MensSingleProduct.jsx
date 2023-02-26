import axios from "axios";
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Render from "../Utils/Render";
import SingleRender from "../Utils/SingleProductRender";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Select ,Text,Option,Image, Divider, Spacer} from "@chakra-ui/react";




let arr=JSON.parse(localStorage.getItem("data"))||[]
function MSingleProduct(){
const navigate=useNavigate()
 

    const {id}=useParams()
    const [data,setData]=useState([])
    console.log(id)
    useEffect(()=>{
      axios.
      get(`http://localhost:4040/mens-products/${id}`).
      then((res)=>{console.log(res)
      setData(res.data)
      })
    },[id])
    console.log(data)

    const HandleClick=()=>{
        arr.push(data)
        localStorage.setItem("cart",JSON.stringify(arr))
          }


    const {imageUrl,colour,name,price}=data
return (
     <div>
        <Navbar/>
         
             
        <Flex px='300px' py='80px'>
                <Box>
                    <Image src={imageUrl}/>
                </Box>
                <Spacer/>
                <Box >
                    <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px' >{name}</Text>
                    <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>US : {'$'+price}</Text>
                    <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>COLOR : {colour}</Text>
                    <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>Size:</Text>
                    <Select>
                        <option value=''>Please Select</option>
                        <option value='US 2'>US 2</option>
                        <option value='US 4'>US 4</option>
                        <option value='US 6'>US 6</option>
                        <option value='US 8'>US 8</option>
                        <option value='US 10'>US 10</option>
                    </Select>
                   
                     <Box border={'1px solid gray.300'}>
                        <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>Free Delivery</Text>
                        <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>Free Returns</Text>
                     </Box>
                     <Button onClick={HandleClick}>Add to Cart</Button>
                </Box>
            </Flex>
            
     <Footer/>
    </div>
)
}
export default MSingleProduct