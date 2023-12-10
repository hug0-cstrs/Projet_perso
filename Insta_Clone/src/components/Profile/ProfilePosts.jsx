import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" />
          <ProfilePost img="/post1.png" />
          <ProfilePost img="/post2.png" />
          <ProfilePost img="/post3.png" />
          <ProfilePost img="/post4.png" />
          <ProfilePost img="/post5.png" />
          <ProfilePost img="/post6.png" />
          <ProfilePost img="/post7.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
