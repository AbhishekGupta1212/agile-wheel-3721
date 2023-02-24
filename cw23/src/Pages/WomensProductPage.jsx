import { Card, CardBody,Image,Text ,Img, Grid} from "@chakra-ui/react"
import { useReducer , useEffect } from "react";
import axios from 'axios'
import Navbar from "../Components/Navbar";
import Render from "../Utils/Render";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
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
 
  const navigate=useNavigate()
  const handleClick=(id,gender)=>navigate(`/WomensProduct/${id}`)

    const [state,dispatch]=useReducer(reducer,initialState)
    const{data}=state

    const getData=()=>{
        dispatch({type:"Request"})

        axios.get("http://localhost:4040/women-products?_limit=15").then((res)=>{
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
        <div id="WomenProductsmain">
           <Navbar/>
           <Grid templateColumns='repeat(4,1fr)' gap={6} m={'auto'}>
             
                {data.map((el)=>(
                  <div key={el.id} onClick={()=>handleClick(el.id)}>
                     <Render
    imageUrl={el.imageUrl}
    name={el.name}
    price={el.price.current.text}
    />
                  </div>
                ))}
                </Grid>
            <Footer/>
        </div>
        
    )


}
export default Womens