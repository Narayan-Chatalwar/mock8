import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import { loadData, saveData } from "../utils/LocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState("admin@gmail.com");
  const [pass,setPass]=useState("masai");
  // const location = useLocation();
  // const comingFrom = location.state?.from?.pathname || "/";



  const handlelogin=()=>{



   const isAuth =loadData("admin");
   if(isAuth)
  {
    return navigate("/admin");
  }

   if(email==="admin@gmail.com" && pass==="masai")
   {
    alert("login success")
    saveData("admin",true);
    return navigate("/admin");
   }
   else{
    alert("Wrong credentials")
   }
   


  }

  


  return (
    <div>
      <Text bg={useColorModeValue("gray.50", "gray.800")} fontWeight="bold">Admin Login</Text>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading
            
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Login

          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Enter you email"
              _placeholder={{ color: "gray.500" }}
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}  placeholder="Enter you password"/>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={handlelogin}
            >
              Submit
            </Button>
            {/* <Text color="blue.500" onClick={()=>navigate("/register")}>New User Register here</Text> */}
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
