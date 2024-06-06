import {
  Box,
  Center,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import CurrentDateTime from "./CurrentTimeDate";
import { WiDayHail } from "react-icons/wi";
import LineChart from "./Chart";
import WetherCard from "./wether_card";

function App() {
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      bg={"blue.100"}
      color={"black"}
      padding={{ base: "4", md: "8", lg: "12" }}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
    >
      <Box
        padding={{ base: "4", md: "8", lg: "12" }}
        paddingX={{ base: "8", md: "16", lg: "32" }}
        // alignItems="center"
        width={"100%"}
        height="100%"
        bg="white"
        boxShadow="2xl"
        borderRadius="xl"
        overflow={"hidden"}
      >
        <Flex direction={"row"} gap={20}>
          <Flex direction={"column"} gap={10}>
            <Flex
              direction={"row"}
              width={"20%"}
              gap={"3"}
              align={"center"}
              //justifyItems={"center"}
            >
              <Text color={"black"} sx={{ textWrap: "nowrap" }}>
                Your City
              </Text>
              <FormControl>
                <Input
                  placeholder="Enter City"
                  size={"sm"}
                  borderRadius={"3px"}
                  borderColor={"black"}
                />
              </FormControl>
            </Flex>
            <CurrentDateTime />
            <HStack>
              <WiDayHail size={200} />
              <Text fontWeight={"5"} fontSize={50} color={"black"}>
                72°{" "}
              </Text>
            </HStack>
            <Flex gap={5} direction={"row"}>
              <VStack>
                <Text>Humidity</Text>
                <Text>43%</Text>
              </VStack>
              <VStack>
                <Text>Wind Speed</Text>
                <Text>19.2 km/j</Text>
              </VStack>
            </Flex>
          </Flex>
          <Flex width={"60%"} direction={"column"} gap={7}>
            <LineChart />
            <HStack>
              <WetherCard />
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
