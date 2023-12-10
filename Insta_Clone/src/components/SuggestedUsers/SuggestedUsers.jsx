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
        <SuggestedUser name="Kylie Jenner" followers={"399 M"} avatar="https://resize-elle.ladmedia.fr/rcrop/1024,1024/img/var/plain_site/storage/images/beaute/news-beaute/beaute-des-stars/kylie-jenner-mes-soeurs-et-ma-mere-sont-mes-icones-beaute-3865885/93209302-1-fre-FR/Kylie-Jenner-mes-soeurs-et-ma-mere-sont-mes-icones-beaute.jpg" />
        <SuggestedUser name="therock" followers={"394 M"} avatar="https://risibank.fr/cache/medias/0/13/1379/137965/full.png"/>
        <SuggestedUser name="Charlie Puth" followers={"18,1 M"} avatar="https://static1.purepeople.com/articles/3/46/64/53/@/6718213-charlie-puth-photocall-du-gala-de-l-am-1200x0-4.jpg"/>

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2023 Built By {" "}
            <Link href="https://github.com/hug0-cstrs" target="_blank" color={"blue.500"} fontSize={14}>
                Hugo
            </Link>
        </Box>
    </VStack>
  )
}

export default SuggestedUsers