import { Card, CardBody, Text } from "@chakra-ui/react";

import { WiDayHail } from "react-icons/wi";

const WetherCard = () => {
  return (
    <Card backgroundColor={"blue.500"}>
      <CardBody
        flexDirection={"column"}
        display={"flex"}
        alignItems={"center"}
        alignContent={"center"}
      >
        <Text fontWeight={"bold"}>Monday</Text>
        <WiDayHail size={70} />
        <Text>Humidity</Text>
        <Text>30%</Text>
      </CardBody>
    </Card>
  );
};

export default WetherCard;
