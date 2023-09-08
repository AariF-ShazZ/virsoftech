import React, { useState } from "react";
import {
    Box,
    Heading,
    Flex,
    Input,
    Select,
    Button,

} from "@chakra-ui/react";

const MyTemp = () => {
    const [param, setParam] = useState("Celsius");
    const [tempValue, setTempValue] = useState(undefined);
    const [result, setResult] = useState(undefined);

    const handleCelsius = () => {
        if (param === "Celsius" && tempValue) {
            const convertedTemp = (tempValue * 9) / 5 + 32;
            setResult(`${tempValue}°C  to ${convertedTemp} F`);
        } else {
            setResult("Please enter a valid number");
        }
    };
    const handleFahrenheit = () => {
        if (param === "Fahrenheit" && tempValue) {
            const convertedTemp = ((tempValue - 32) * 5) / 9;
            setResult(`${tempValue} F to ${convertedTemp} °C `);
        } else {
            setResult("Please enter a valid number");
        }
    };
    return (
        <Box bg={"gray.100"} h={"100vh"} p={"5% 2%"}>
            <Box boxShadow={" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"} bg={"gray.200"} p={"2%"} > 
                <Input bg={"gray.100"}  placeholder={"Enter the Temperature "} name="num" onChange={(e) => setTempValue(e.target.value)} />
                <Select m={"2% 0"} bg={"gray.100"}  defaultValue={"Celsius"} onChange={(e) => setParam(e.target.value)}>
                    <option value="Fahrenheit">fahrenheit</option>
                    <option value="Celsius">celsius</option>
                </Select>
                <Flex align={"center"} justify={"space-evenly"}>
                <Button onClick={handleFahrenheit}  colorScheme="teal.300" bg={"teal.300"}>Convert to Celsius</Button>
                <Button onClick={handleCelsius} colorScheme="teal.300" bg={"teal.300"}>Convert to Fahrenheit</Button>
                </Flex>
               
            </Box>


            <Box mt={"5%"}><Heading color={"green"}>{result}</Heading></Box>
        </Box>
    );
};

export default MyTemp;