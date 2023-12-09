import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />

        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            {/* Left side */}
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>

            {/* Right side */}
            <Text fontSize={12} fontWeight="bold" _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
            
        {/* Suggested user */}
        <SuggestedUser name="Dan Abrahmov" followers={1645} avatar="https://bit.ly/dan-abramov" />
        <SuggestedUser name="Ryan Florence" followers={419} avatar="https://bit.ly/ryan-florence"/>
        <SuggestedUser name="Christian Nwamba" followers={764} avatar="https://bit.ly/code-beast"/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2023 Built By {" "}
            <Link href="https://github.com/hug0-cstrs" target="_blank" color={"blue.500"} fontSize={14}>
                As a programmer
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers