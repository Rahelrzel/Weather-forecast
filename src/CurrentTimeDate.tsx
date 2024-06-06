import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { HStack, Text } from "@chakra-ui/react";

const CurrentDateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(currentDateTime, "EEE, MMM d, yyyy");
  const formattedTime = format(currentDateTime, "hh:mm a");

  return (
    <div>
      <HStack>
        <Text color={"black"}>{formattedTime} </Text>
        <Text color={"black"}>{formattedDate}</Text>
      </HStack>
    </div>
  );
};

export default CurrentDateTime;
