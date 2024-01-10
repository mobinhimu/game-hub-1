import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameAction from "../store";

function GameHeading() {
  const genreId = useGameAction((state) => state.gameQuery.genreId);
  const platformId = useGameAction((state) => state.gameQuery.platformId);

  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const heading = `${
    genres?.results.find(({ id }) => id === genreId)?.name || ""
  } ${
    platforms?.results.find(({ id }) => id === platformId)?.name || ""
  } Games`;

  return (
    <Heading as={"h2"} mb={4}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
