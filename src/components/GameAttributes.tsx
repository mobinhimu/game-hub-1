import { SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import DefinitionList from "./DefinitionList";
import MetacriticBadge from "./MetacriticBadge";

function GameAttributes() {
  const params = useParams();

  const { data } = useGameDetails(params.slug as string);

  return (
    <SimpleGrid columns={2}>
      <DefinitionList headingText="Platforms">
        {data?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionList>

      <DefinitionList headingText="Metascore">
        <MetacriticBadge metacritic={data?.metacritic} />
      </DefinitionList>

      <DefinitionList headingText="Genres">
        {data?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionList>

      <DefinitionList headingText="Publishers">
        {data?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionList>
    </SimpleGrid>
  );
}

export default GameAttributes;
