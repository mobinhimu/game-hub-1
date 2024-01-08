import { Button, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import Messages from "./Messages";
import { Fragment } from "react";

function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
  const gamePerPage = 6;

  const { data, isLoading, isFetching, error, fetchNextPage } = useGame(
    gameQuery,
    gamePerPage
  );
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error && !isLoading)
    return (
      <Messages>
        <h3>Game Not Found 😥</h3>
      </Messages>
    );

  return (
    <>
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
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.results.map((game) => (
              <GameCard {...game} key={game.id} />
            ))}
          </Fragment>
        ))}
      </SimpleGrid>

      <Button disabled={isFetching} my={4} onClick={() => fetchNextPage()}>
        {isFetching ? "Loading ...." : "Load More"}
      </Button>
    </>
  );
}

export default GameGrid;
