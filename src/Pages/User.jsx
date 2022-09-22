import { Box, Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { getData } from "../Redux/App/action";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialcategory = searchParams.getAll("category");
  const urlSort = searchParams.get("sortby");
  const dispatch = useDispatch();
  const location=useLocation();

  const appData = useSelector((store) => store.AppReducer.appData);
  // console.log(appData);

  const [category, setcategory] = useState(initialcategory || "");
  const [sortby, setSortby] = useState(urlSort || "");

  console.log(appData);

 

  useEffect(() => {
    if (appData.length === 0 || location.search) {
      const sortby = searchParams.get("sortby");
      const getDataParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortby && "release_year",
          _order: sortby,
          
        },
      };

      dispatch(getData(getDataParams));
    }
  }, [location.search,dispatch]);

  // useEffect(() => {
  //   dispatch(getData());
  // }, [dispatch]);

  const handleChangle = (e) => {
    const option = e.target.value;
    setcategory(option);
  };
  const handleSort = (e) => {
    setSortby(e.target.value);
  };

  useEffect(() => {
    if (category || sortby) {
      let params = {};
      category && (params.category = category);
      sortby && (params.sortby = sortby);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortby, dispatch]);
  


  return (
    <Box>
      <Text fontWeight={"bold"}>Hotel page</Text>
      <Box width="300px">
        filters
        <Flex gap="20px" alignItems="center">
          <label> Category</label>
          <Select
            placeholder="Select Category"
            onChange={(e) => handleChangle(e)}
          >
            <option value="family">family</option>
            <option value="deluxe">deluxe</option>
            <option value="suite">suite</option>
          </Select>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <label>Sort By Price</label>
          <Select
            placeholder="Select Category"
            onChange={(e) => setSortby(e.target.value)}
          >
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
          </Select>
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        gap="20px"
      >
        {appData.map((item) => (
          <Flex key={item.id} shadow="md" padding="5px">
            <Box>
              <img src={item.image_url} width="300px" height="300px" alt="" />
            </Box>
            <Box
              display={"flex"}
              flexDirection="column"
              textAlign="start"
              padding="10px"
            >
              <Heading>{item.category} Room</Heading>
              <Text>Adults : {item.no_of_persons}</Text>
              <Text>Capacity : {item.capacity}</Text>
              <Text>Facility : closet with hangers, HD TV</Text>
              <Text>Bed Type : {item.bed_type}</Text>
              <Text>Price : &#8377; {item.cost} /night</Text>
              <Button>Book Now</Button>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default User;
