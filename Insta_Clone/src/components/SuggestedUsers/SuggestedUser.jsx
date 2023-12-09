import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({name, followers, avatar}) => {

    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name={name} src={avatar} size={"md"}/>
                <VStack spacing={2} alignItems={"flex-start"}>
                    {/* Username */}
                    <Box fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Box>
        
                    {/* Followers */}   
                    <Box fontSize={11} color={"gray.500"}>
                        {followers} followers
                    </Box>

                </VStack>
            </Flex>

            {/* Follow button */}
            <Button fontSize={13} bg={"transparent"} p={0} h={"max-content"} fontWeight={"med"} color={"blue.400"} cursor={"pointer"} _hover={{color:"white", fontWeight:"bold"}} onClick={() => setIsFollowed(!isFollowed)}>
                {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </Flex>
    )
}

export default SuggestedUser