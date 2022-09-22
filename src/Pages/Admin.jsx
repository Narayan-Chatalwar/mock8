import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, getData } from "../Redux/App/action";

const Admin = () => {
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [type, settype] = useState("");
  const [bedtype, setbedtype] = useState("");
  const [adults, setadults] = useState("");
  const [capacity, setcapacity] = useState("");
  const [cost, setcost] = useState("");

  const dispatch = useDispatch();
  const appData = useSelector((store) => store.AppReducer.appData);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  console.log(appData);

  const handleadd = () => {
    const params = {
      category: category,
      image: image,
      type_of_room: type,
      bed_type: bedtype,
      no_of_persons: adults,
      capacity: capacity,
      cost: cost,
      booked: false,
    };

    dispatch(addData(params)).then((r)=>dispatch(getData()))
  };

  const handledelete=(id)=>{
    dispatch(deleteData(id)).then((r)=>dispatch(getData()))
  }

  return (
    <Box>
      <Text fontWeight={"bold"}>Wellcome Admin</Text>
      <Box width="90%" display="flex">
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          margin="auto"
          gap="20px"
          width="250px"
          p={5}
          shadow="md"
        >
          <Text fontWeight="bold">Add new Hotel</Text>
          <Flex gap="20px" alignItems="center">
            <label> Category</label>
            <Select
              placeholder="Select Category"
              onChange={(e) => setcategory(e.target.value)}
            >
              <option value="family">family</option>
              <option value="deluxe">deluxe</option>
              <option value="suite">suite</option>
            </Select>
          </Flex>

          <Input
            type="text"
            placeholder="Image of room"
            onChange={(e) => setimage(e.target.value)}
          />
          <RadioGroup onChange={settype} value={type}>
            <Stack direction="row">
              <Radio value="ac">AC</Radio>
              <Radio value="nonac">Non AC</Radio>
            </Stack>
          </RadioGroup>
          <Flex gap="20px" alignItems="center">
            <label>Bed-type</label>
            <Select
              placeholder="Select bed type"
              onChange={(e) => setbedtype(e.target.value)}
            >
              <option value="single">single</option>
              <option value="double">double</option>
            </Select>
          </Flex>
          <Flex gap="20px" alignItems="center">
            <label>No-of-Adults</label>
            <Input
              type="number"
              placeholder="No of adults"
              onChange={(e) => setadults(e.target.value)}
            />
          </Flex>
          <Flex gap="20px" alignItems="center">
            <label>Max-capacity</label>
            <Input
              type="number"
              placeholder="Max capacity"
              onChange={(e) => setcapacity(e.target.value)}
            />
          </Flex>
          <Flex gap="20px" alignItems="center">
            <label>cost-per-night</label>
            <Input
              type="number"
              placeholder="Cost per night"
              onChange={(e) => setcost(e.target.value)}
            />
          </Flex>
          <Button onClick={handleadd}>Add Hotel</Button>
        </Box>
        <Box>
          <Text fontWeight="bold">Hotels listed</Text>

          {/* ..........Table............... */}

          <TableContainer height="100vh">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>Category</Th>
                  <Th>Type of Room</Th>
                  <Th>Bed type</Th>
                  <Th>No of room</Th>
                  <Th>Capacity</Th>
                  <Th>Cost</Th>
                  <Th>status</Th>
                  <Th>Edit</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {appData.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.type_of_room}</Td>
                    <Td>{item.bed_type}</Td>
                    <Td>{item.no_of_persons}</Td>
                    <Td>{item.capacity}</Td>
                    <Td>{item.cost}</Td>
                    <Td>{item.booked?"booked":"Available"}</Td>
                    <Td>
                      <Button>Edit</Button>{" "}
                    </Td>
                    <Td>
                      <Button onClick={(e)=>handledelete(item.id)}>Delete</Button>{" "}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
