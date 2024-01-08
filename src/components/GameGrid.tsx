import { HStack, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import Messages from "./Messages";
import useGame from "../hooks/useGame";

function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
  const { data: games, isLoading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (!games?.results.length && !isLoading)
    return (
      <Messages>
        <h3>Game Not Found 😥</h3>
      </Messages>
    );
  return (
    <HStack>
      <SimpleGrid
        padding={"10px"}
        columns={{
          md: 2,
          lg: 3,
          ["2xl"]: 4,
        }}
        gap={4}
      >
        {isLoading &&
          skeleton.map((ske) => (
            <GameCardContainer key={ske}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.results?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard {...game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </HStack>
  );
}

export default GameGrid;
