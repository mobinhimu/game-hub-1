import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import GenreList from "../GenreList";
import GameHeading from "../GameHeading";
import PlatformSelector from "../PlatformSelector";
import GameSorting from "../GameSorting";
import GameGrid from "../GameGrid";

function Home() {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      gridTemplateColumns={{
        base: "1rf",
        lg: "240px 1fr",
      }}
    >
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

export default Home;
