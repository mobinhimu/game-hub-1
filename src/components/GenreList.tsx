import { Box, Button, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { optimizedImage } from "../helper/image-optimization";
import useGenre from "../hooks/useGenre";

interface GenreListProps {
  onGenre: (genreId?: number) => void;
  gameQuery: GameQuery;
}

function GenreList({ onGenre, gameQuery: { genreId } }: GenreListProps) {
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
            onClick={() => onGenre(id)}
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
