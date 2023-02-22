import { Card, CardBody,Image,Text ,Img} from "@chakra-ui/react"
import { useReducer , useEffect } from "react";
import axios from 'axios'
import Navbar from "../Components/Navbar";
const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  const reducer = (state,action) => {
    switch(action.type){
      case "Request":
        return{
        ...state,
        isLoading:true,
      error:false
      }
      case "Success" :
        return{
          ...state,
          data:action.payload,
          isLoading:false,
        error:false
        }
        case "Failed" :
          return{
            ...state,
            data:[],
            isLoading:false,
          error:action.payload
          }
        default :
        throw new Error()
    }
    };
     


function Womens(){
 
    const [state,dispatch]=useReducer(reducer,initialState)
    const{data}=state

    const getData=()=>{
        dispatch({type:"Request"})

        axios.get("http://localhost:4040/Women-products").then((res)=>{
          dispatch({type:"Success" ,payload:res.data})
      
        console.log(res)
      }).catch((err)=>
        dispatch({type:"Failed",payload:err.message})
        // console.log(err)
      )
    }
    useEffect(()=>{
        getData();
        },[])
        console.log(data)

    return (
        <div>
           <Navbar/>
            <Card>
                {data.map((el)=>(
 <CardBody key={el.id}>
    <Img src={el.imageUrl}/>
    <Text>{el.name}</Text>
    <Text>{el.price.current.text}</Text>
                </CardBody>
                ))}
               
            </Card>
        </div>
    )

}
export default Womens