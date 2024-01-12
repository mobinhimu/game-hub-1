import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import GameCardIcon from "./GameCardIcon";
import MetacriticBadge from "./MetacriticBadge";
import { optimizedImage } from "../helper/image-optimization";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

function GameCard({
  name,
  background_image,
  parent_platforms,
  metacritic,
  rating_top,
  slug,
}: Game) {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.20s ease",
      }}
    >
      <Image
        borderTopRadius={"10px"}
        src={optimizedImage(background_image)}
        alt={background_image}
      />
      <CardBody>
        <Link to={`games/${slug}`}>
          <Heading width={100} size={"md"}>
            {name}
          </Heading>
        </Link>
        <Emoji rating={rating_top} />

        <HStack justifyContent={"space-between"} mt={"8px"}>
          <Box>
            {parent_platforms?.map(({ platform }) => (
              <GameCardIcon key={platform.id} {...platform} />
            ))}
          </Box>
          <MetacriticBadge metacritic={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
