import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Text } from "@chakra-ui/react";

function GameDetail() {
  const { slug } = useParams();
  const { data, isLoading } = useGameDetails(slug);

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Text
        dangerouslySetInnerHTML={{ __html: data?.description || "null" }}
      ></Text>
    </Box>
  );
}

export default GameDetail;
