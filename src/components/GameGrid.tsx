import { SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import Messages from "./Messages";

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
    <SimpleGrid
      padding={"20px"}
      columns={{
        md: 2,
        lg: 3,
        ["2xl"]: 4,
      }}
      gap={6}
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
  );
}

export default GameGrid;
