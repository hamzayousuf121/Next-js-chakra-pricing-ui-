"use client"
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Features from "./components/Features";
import Header from "./components/Header";
import PricingBox from "./components/PricingBox";
export default function Home() {
  return (
    <ChakraProvider>
        <Header />
        <PricingBox />
        <Features />
    </ChakraProvider>
  )
}
