// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// import InputControl from "../Components/InputControl/InputControl";
// import { auth } from "../firebaseAuth";

// import styles from "../Styles/Signup.css";

// function Signup() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
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
//         <h1 className={styles.heading}>Signup</h1>

//         <InputControl
//           label="Name"
//           placeholder="Enter your name"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, name: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Email"
//           placeholder="Enter email address"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Password"
//           placeholder="Enter password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//         />

//         <div className={styles.footer}>
//           <b className={styles.error}>{errorMsg}</b>
//           <button onClick={handleSubmission} disabled={submitButtonDisabled}>
//             Signup
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span>
//               <Link to="/login">Login</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React, { useReducer, useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
  Text,
  Grid,Image,
  Icon
} from "@chakra-ui/react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseAuth";
const Form1 = ({ formState, handleChange }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
const navigate=useNavigate()
  return (
    <>
    <Box py='10px' align={'center'}>
              <Image src={process.env.PUBLIC_URL +'/Images/Meta-Trends01.png'} onClick={()=>navigate('/')}/>
         </Box>
      <Heading w="100%" textAlign={"center"}  mb="2%">
      SIGN UP WITH ..
      </Heading>
      <Grid templateColumns='repeat(3,1fr)' alignContent={'center'} mb='30px'>
                  <GridItem border={'1px solid black'} w='120px' p='10px'> <Icon boxSize={'20px'}><FaGoogle/></Icon> GOOGLE</GridItem>
                  <GridItem border={'1px solid black'} w='120px' p='10px'> <Icon boxSize={'22px'}  ><FaApple/></Icon>APPLE</GridItem>
                  <GridItem border={'1px solid black'} w='150px' p='10px' > <Icon boxSize={'22px'} ><FaFacebook/></Icon>FACEBOOK</GridItem>
                </Grid>

          <Heading mb={'20px'}>OR SIGN UP WITH EMAIL..</Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
          
           
            value={formState.first_name}
            name={"first_name"}
            onChange={handleChange}
            isRequired={true}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
          
          
            value={formState.last_name}
            name={"last_name"}
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
        
         
          value={formState.email}
          name={"email"}
          onChange={handleChange}
        />
        
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
          
            value={formState.password}
            name={"password"}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

// initial state for sign up form
const intiState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  country: "",
  address: "",
  city: "",
  state: "",
  ZIP: "",
};

// reducer function to change the state of the form
const reducer = (state, action) => {
  switch (action.type) {
    case "first_name": {
      return {
        ...state,
        first_name: action.payload,
      };
    }
    case "last_name": {
      return {
        ...state,
        last_name: action.payload,
      };
    }
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

export default function Signup() {
  // const toast = useToast();
  // const [step, setStep] = useState(1);
  // const [progress, setProgress] = useState(50);
  const [errmsg, setErrmsg] = useState("");
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(reducer, intiState);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  //   this function will call the dispatch for formState
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  //   this function will handle the submit button
  const handleSubmit = () => {
    if (!formState.email || !formState.password || formState.name) {
      setErrmsg("Fill All Fields");
      return;
    }
    setErrmsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, formState.email, formState.password)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: formState.first_name,
        });
        console.log(updateProfile);
      })
      .catch((err) => {
        setErrmsg(err.message);
        setSubmitButtonDisabled(false);
        console.log("Error:", err);
      });

    console.log(formState.email, formState.password, formState.first_name);
    navigate("/login");
  };

  return (
    <Box py={"100px"} bg={useColorModeValue('#eeeeee')} h={"100%"}>
      <Box
        borderWidth="1px"
        rounded="lg"
        maxWidth={600}
        p={6}
        m="10px auto"
        as="form"
        bg={useColorModeValue('#eeeeee')}
      >
        {/* <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme={"red"}
        ></Progress> */}

        <Form1 formState={formState} handleChange={handleChange} />

        {/* <Form2 formState={formState} handleChange={handleChange} />
        )} */}
        <p style={{ color: "red" }}>{errmsg}</p>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Button
              w="40rem"
              bg='black'
              color={'white'}
              variant="solid"
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              JOIN
            </Button>
          </Flex>
        </ButtonGroup>
        <Text fontSize={"xl"} pt={"20px"} w={"auto"}>
          Are you an existing customer?{" "}
          <RouteLink to={"/login"}>Login</RouteLink>
        </Text>
      </Box>
    </Box>
  );
}