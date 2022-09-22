import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Button onClick={(e) => navigate("/admin")}>Admin</Button>
        <Button onClick={(e) => navigate("/user")}>User</Button>
      </Box>
    </>
  );
};

export default Home;
