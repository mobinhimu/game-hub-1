import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameVideoPreview from "../components/GameVideoPreview";
import GameScreenshots from "../components/GameScreenshots";

function GameDetail() {
  const { slug } = useParams();
  const { data, isLoading } = useGameDetails(slug as string);

  if (isLoading || !data?.description_raw) return null;

  return (
    <SimpleGrid
      gap={{
        base: 4,
        lg: 6,
      }}
      columns={{
        base: 1,
        lg: 2,
      }}
    >
      <Box>
        <Heading>{data?.name}</Heading>
        <ExpandableText text={data.description_raw} />
      </Box>
      <GameAttributes />
      <GameVideoPreview />
      <GameScreenshots />
    </SimpleGrid>
  );
}

export default GameDetail;
