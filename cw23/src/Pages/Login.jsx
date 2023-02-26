// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";

// import InputControl from "../Components/InputControl/InputControl";
// import { auth } from "../firebaseAuth";

// import styles from "../Styles/Login.css";

// function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
        
//         navigate("/");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.innerBox}>
//         <h1 className={styles.heading}>Login</h1>

//         <InputControl
//           label="Email"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//           placeholder="Enter email address"
//         />
//         <InputControl
//           label="Password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//           placeholder="Enter Password"
//         />

//         <div className={styles.footer}>
//           <b className={styles.error}>{errorMsg}</b>
//           <button disabled={submitButtonDisabled} onClick={handleSubmission}>
//             Login
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span>
//               <Link to="/signup">Sign up</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Icon,
  Divider,
  IconButton,
  Grid,
  GridItem
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useReducer } from "react";
// import { AuthContext } from "../Contexts/AuthContextProvider";
import { Link as RouteLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseAuth';
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const initState = {
  email: "",
  password: "",
};

// function for changing the formState using useReducer hook
const reducer = (state, action) => {
  switch (action.type) {
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default function Login() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  // const { login } = useContext(AuthContext);
  const [formState, dispatch] = useReducer(reducer, initState);

  //   this function will handle the change of input and will dispatch the data to the reducer function
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  //   this function will call the
  const handleSubmit = () => {
    if (!formState.email || !formState.password) {
      setErrorMsg("All Fields Required");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
      
  if(formState.email==='admin@gmail.com' && formState.password==='admin258'){
    navigate('./Admin')
  }
  };
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue('#eeeeee')}
      fontFamily='futura-pt,sans-serif'
      
    >
      <Stack  mx={"auto"}  py={12} px={6} borderRadius='none' w='63%'>
       
             {/* <Stack align={"center"}> */}
            <Box py='10px' align={'center'}>
              <Image src={process.env.PUBLIC_URL +'/Images/Meta-Trends01.png'} onClick={()=>navigate('/')}/>
         </Box>
         {/* </Stack> */}
      
       
        
        <Divider/>
        <Box
          bg={useColorModeValue("white", "gray.700")}
       
    w='800px'
    mt={'-100px'}
        >
          <Stack >
            <Stack p={12}>
              <FormControl id="email" outlineColor={'#d63f66'} >
                <FormLabel letterSpacing={'2px'} fontSize='14px' fontFamily={'futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif'} lineHeight='23.8px' fontWeight={'800'} color='#767676'>EMAIL ADDRESS:</FormLabel>

                <Input
                  type="email"
        
                  focusBorderColor="#61a4e0"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                   h={'3.5rem'}
                   borderRadius='none'

                />
              </FormControl>
              <FormControl id="password">
                <FormLabel letterSpacing={'2px'} fontSize='14px' fontFamily={'futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif'} lineHeight='23.8px' fontWeight={'700'} color='#767676'>PASSWORD:</FormLabel>
                <Input
                  type="password"
                  focusBorderColor="#61a4e0"
                  name="password"
                  onChange={handleChange}
                  value={formState.password}
                  h={'3.5rem'}
                  borderRadius='none'
                />
              </FormControl>
              <Stack >
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                </Stack>
                <Button
                  bg={"black"}
                  borderRadius='none'
                  color={"white"}
                  h={'3.5rem'}
                  _hover={{
                    bg: "#aaaaaa",
                  }}
                  disabled={submitButtonDisabled}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
                 <Link color={"#222222"} textAlign='center' fontSize={'16px'} fontStyle='futura-pt,sans-serif' p={'10px'}>Forgot password?</Link>
                <Text fontSize={'18px'} color={"black"}fontFamily=' futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif' fontStyle= 'normal'  fontWeight=' 700' lineHeight='1.2' p={'30px'}>
                OR SIGN IN WITH ...
                </Text>
                <Grid templateColumns='repeat(3,1fr)' alignContent={'center'}>
                  <GridItem border={'1px solid black'} w='120px' p='10px'> <Icon boxSize={'20px'}><FaGoogle/></Icon> GOOGLE</GridItem>
                  <GridItem border={'1px solid black'} w='120px' p='10px'> <Icon boxSize={'22px'}  ><FaApple/></Icon>APPLE</GridItem>
                  <GridItem border={'1px solid black'} w='150px' p='10px' > <Icon boxSize={'22px'} ><FaFacebook/></Icon>FACEBOOK</GridItem>
                </Grid>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}