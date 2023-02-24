import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Render from "../Utils/Render";

 const getSingleProduct=(id,gender)=>{
    return axios.get(`http://localhost:4040/${id}`)
    }
function SingleProduct(){

    
   const {id,gender}=useParams()
   const [data,setData]=useState([])

 useEffect(()=>{
    getSingleProduct(id,gender)
    .then(res=>{
    setData(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
 },[id,gender])
console.log(...data)
return (
    <div>
      
    </div>
)
}
export default SingleProduct