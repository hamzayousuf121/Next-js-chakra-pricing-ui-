import { Box, Flex, Text, Button, Icon, HStack } from '@chakra-ui/react'
import React from 'react'
import CheckMarkIcon from '../icons/CheckMarkIcon'

export default function PricingBox() {
    return (
        <Box maxW="950px" mx={{base:"15px", md:"20px", lg:"auto"}} mt="-160px" borderRadius={"15px"} overflow={"hidden"} bg="white"
        boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>
            <Flex direction={{base:"column", md:"column", lg:"row"}}>
                <Box bg="#F0EAFB" textAlign="center" p={{base:"40px", md: "60px", lg: "60px"}} >
                    <Text fontWeight="800" fontSize="24px"> Premium PRO</Text>
                    <Text fontWeight="800" fontSize="60px">$329</Text>
                    <Text fontWeight="500" fontSize="18px">billed just once</Text>
                    <Button bgColor="#6B46C1" color="white" width={{base:"100%", sm:"300px", md: "300px", lg:"300px"}} mt="15">Get Started</Button>
                </Box>
                <Box py={"50px"} px={"24px"}>
                    <Text fontSize={"18"} fontWeight={"400"} mb="15px" fontFamily={"Inter"}>Access these features when you get this pricing package for your business.</Text>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text fontSize={"18"} fontWeight={"400"} fontFamily={"Inter"}>International calling and messaging API</Text>
                    </HStack>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text fontSize={"18"} fontWeight={"400"} fontFamily={"Inter"}>Additional phone numbers</Text>
                    </HStack>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text fontSize={"18"} fontWeight={"400"} fontFamily={"Inter"}>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack mb={"15px"}>
                        <Icon as={CheckMarkIcon} />
                        <Text fontSize={"18"} fontWeight={"400"} fontFamily={"Inter"}>24/7 support and consulting</Text>
                    </HStack>
                </Box>

            </Flex>
        </Box>


    )
}
