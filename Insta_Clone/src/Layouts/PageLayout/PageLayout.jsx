import { Flex, Box, Spinner } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const checkIfUserIsAuth = !user && loading;

  if (checkIfUserIsAuth) return <PageLayoutSpinner />;

  <Flex flexDir={canRenderNavbar ? "column" : "row"}>
    {/* Left sidebar */}
    {canRenderSidebar ? (
      <Box w={{ base: "70px", md: "240px" }}>
        <Sidebar />
      </Box>
    ) : null}

    {/* Navbar */}
    {canRenderNavbar ? <Navbar /> : null}

    {/* Page content on Right hand-side */}
    <Box
      flex={1}
      w={{ base: "calc(100% - 70px", md: "calc(100% - 240px" }}
      mx={"auto"}
    >
      {children}
    </Box>
  </Flex>;
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  );
};
