import { Box, Button, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { optimizedImage } from "../helper/image-optimization";
import useGenre from "../hooks/useGenre";
import useGameAction from "../store";

function GenreList() {
  const handleGenre = useGameAction((state) => state.handleGenre);
  const genreId = useGameAction((state) => state.gameQuery.genreId);

  const { data: genres, isLoading } = useGenre();

  if (isLoading)
    return (
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner />
      </Box>
    );

  return (
    <List>
      {genres?.results.map(({ id, image_background, name }) => (
        <ListItem
          key={id}
          display={"flex"}
          alignItems={"center"}
          gap={"0.5rem"}
          mb={"12px"}
        >
          <Image
            height={"30px"}
            width={"30px"}
            src={optimizedImage(image_background)}
            borderRadius={"8px"}
          />
          <Button
            onClick={() => handleGenre(id)}
            variant={"link"}
            fontWeight={id === genreId ? "bold" : "normal"}
            fontSize={"1rem"}
          >
            {name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
