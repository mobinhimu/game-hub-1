import { Box, Button, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import { optimizedImage } from "../helper/image-optimization";
import { GameQuery } from "../App";

interface GenreListProps {
  onGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

function GenreList({ onGenre, gameQuery: { genreObj } }: GenreListProps) {
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
      {genres?.results.map((genre) => (
        <ListItem
          key={genre.id}
          display={"flex"}
          alignItems={"center"}
          gap={"0.5rem"}
          mb={"12px"}
        >
          <Image
            height={"30px"}
            width={"30px"}
            src={optimizedImage(genre.image_background)}
            borderRadius={"8px"}
          />
          <Button
            onClick={() => {
              onGenre(genre);
            }}
            variant={"link"}
            fontWeight={genre.id === genreObj?.id ? "bold" : "normal"}
            fontSize={"0.75rem"}
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
