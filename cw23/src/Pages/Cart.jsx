import { Button, Divider, Grid, GridItem,Image,Text,Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Render from "../Utils/Render";
import { useNavigate } from "react-router";

function Cart (){

 

    const navigate=useNavigate()
    let total=0
    const [cartItem,setCartItem]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)
  
    const handleOrder=()=>{

        navigate('/OrderPlaced')
    }

    useEffect(()=>{
         let data=JSON.parse(localStorage.getItem("cart"))||[]
         setCartItem(data)
         console.log(data)
    },[])
   
    if(cartItem.length===0){
        return(
            <div>
                <Navbar/>
            <Text fontSize={'80px'}>Add Items To Enjoy Shoping</Text>
            <Footer/>
            </div>
            
        )
    }else{
        return (
            <div>
                <Navbar/>
                <Grid  templateColumns='repeat(4,1fr)' gap={6} m={'auto'} mb='10px'>
                           {cartItem.map((el)=>(
                    <Grid key={el.id+Date.now()} mb='30px'>
                    <GridItem boxSize='85%' margin={'auto'}>
    <Image src={el.imageUrl}/>
    <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>{el.name}</Text>
    <Text fontSize={'14px'} fontFamily='futura-pt,FuturaStd,Helvetica,Arial,sans-serif'lineHeight={'20px'} mb='2px' mt='2px'>{'$'+' '+el.price}</Text>
                    </GridItem>
                  
                </Grid>
                    ))}
                </Grid>
    <h1 >
         {cartItem.forEach((el)=>
           total+=el.price
            )}
    
          Total : {'$'+total}
    </h1>
       <Divider/>

<Button onClick={handleOrder} mt='10px'>Place Order</Button>

         
    
    </div>
        )
    }
 

}
export default Cart