import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import GameSorting from "./components/GameSorting";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  sortingValue: string;
  searchGame: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  function handleGenre(genreId?: number) {
    setGameQuery({ ...gameQuery, genreId });
  }

  function handlePlatform(platformId?: number) {
    setGameQuery({ ...gameQuery, platformId });
  }

  function handleSorting(sortingValue: string) {
    setGameQuery({ ...gameQuery, sortingValue });
  }

  function handleGameSearch(searchGame: string) {
    setGameQuery({ ...gameQuery, searchGame });
  }

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: "1rf",
        lg: "240px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar onSearchGame={handleGameSearch} />
      </GridItem>

      <Show above="lg">
        <GridItem ml={"14px"} area={"aside"}>
          <Heading size="sm" pb={4}>
            Genre
          </Heading>
          <GenreList onGenre={handleGenre} gameQuery={gameQuery} />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box px={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex gap={4} mb={6}>
            <PlatformSelector
              gameQuery={gameQuery}
              onPlatform={handlePlatform}
            />
            <GameSorting gameQuery={gameQuery} onSorting={handleSorting} />
          </Flex>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
