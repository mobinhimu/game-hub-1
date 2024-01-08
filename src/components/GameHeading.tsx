import { Heading } from "@chakra-ui/react";
import { type GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

function GameHeading({ gameQuery }: { gameQuery: GameQuery }) {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const heading =
    `${
      genres?.results.find(({ id }) => id === gameQuery?.genreId)?.name || ""
    } ${
      platforms?.results.find(({ id }) => id === gameQuery?.platformId)?.name ||
      "Games"
    }` || "Games";

  return (
    <Heading as={"h2"} mb={4}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
