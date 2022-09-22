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
import { useNavigate } from "react-router-dom";
import { loadData, saveData } from "../utils/LocalStorage";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handlelogin = () => {
    const isAuth = loadData("user");
    console.log(isAuth.email,isAuth.pass)

    if (isAuth.email === email && isAuth.pass === pass) {
      alert("login success");
      return navigate("/user");
    } else {
      alert("Wrong credentials");
    }

  };

  return (
    <div>
      <Text bg={useColorModeValue("gray.50", "gray.800")} fontWeight="bold">
        User Login
      </Text>
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
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Login
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="Enter you email"
              _placeholder={{ color: "gray.500" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter you password"
            />
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
            <Text color="blue.500" onClick={() => navigate("/register")}>
              New User Register here
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
