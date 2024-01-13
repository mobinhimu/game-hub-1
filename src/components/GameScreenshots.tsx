import { useParams } from "react-router-dom";
import useGameScreenshots from "../hooks/useGameScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

function GameScreenshots() {
  const { slug } = useParams();
  const { data } = useGameScreenshots(slug as string);
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      gap={4}
    >
      {data?.results.map(({ id, image }) => (
        <Image src={image} key={id} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
