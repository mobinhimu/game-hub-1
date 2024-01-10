import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import GameSorting from "./components/GameSorting";
import GameHeading from "./components/GameHeading";

function App() {
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
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem ml={"14px"} area={"aside"}>
          <Heading size="sm" pb={4}>
            Genre
          </Heading>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box px={2}>
          <GameHeading />
          <Flex gap={4} mb={6}>
            <PlatformSelector />
            <GameSorting />
          </Flex>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
