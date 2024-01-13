import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";

function GameDetail() {
  const { slug } = useParams();
  const { data, isLoading } = useGameDetails(slug as string);

  if (isLoading || !data?.description_raw) return null;

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data.description_raw} />
      <GameAttributes />
    </Box>
  );
}

export default GameDetail;
