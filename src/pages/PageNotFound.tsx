import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function PageNotFound() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Opps....</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Does not exists"
            : "An Unexpected Error Occurred"}
        </Text>
      </Box>
    </>
  );
}

export default PageNotFound;
