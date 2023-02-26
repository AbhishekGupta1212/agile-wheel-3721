import { useSearchParams } from 'react-router-dom';
import { useReducer,useState } from 'react';
import axios from 'axios';
import { Box,InputGroup,Input,InputRightElement } from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons'

// const byName = (name) => (data) =>
// data.name.toLowerCase().includes((name || '').toLowerCase());

// const initialState = {
//     data: [],
//     isLoading: false,
//     error: null,
//   };
//   const reducer = (state,action) => {
//     switch(action.type){
//       case "Request":
//         return{
//         ...state,
//         isLoading:true,
//       error:false
//       }
//       case "Success" :
//         return{
//           ...state,
//           data:action.payload,
//           isLoading:false,
//         error:false
//         }
//         case "Failed" :
//           return{
//             ...state,
//             data:[],
//             isLoading:false,
//           error:action.payload
//           }
//         default :
//         throw new Error()
//     }
//     };

function Search(){
//     const [state,dispatch]=useReducer(reducer,initialState)
// const{data}=state

// const getData=()=>{
//     dispatch({type:"Request"})

//     axios.get("http://localhost:4040/?q={search}").then((res)=>{
//       dispatch({type:"Success" ,payload:res.data})
  
//     console.log(res)
//   }).catch((err)=>
//     dispatch({type:"Failed",payload:err.message})
//     // console.log(err)
//   )
// }
// let [searchParams, setSearchParams] = useSearchParams();
// const {query,setQuery}=useState("")

const handleSearch=(event)=>{
// event.preventDefault()
//        setSearchParams(event.target.value)
//         console.log(searchParams)value={searchParams.get('name')}
}

return <Box ml={'35px'} >
    <InputGroup>
       <Input placeholder='Seach for items and brands' bg={'FFFFFF'} htmlSize={95} borderRadius='30px' color={'black'}  id='search'/>
    <InputRightElement children={<Search2Icon color={'black'} onClick={handleSearch}/>}  />
    </InputGroup>
</Box>

}
export default Search