import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import Messages from "./Messages";

function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
  const gamePerPage = 6;

  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGame(
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

  const fetchedGameCount =
    data?.pages.reduce((acc, curr) => acc + curr.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGameCount}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={
        <Box textAlign={"center"}>
          <Spinner />
        </Box>
      }
    >
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
    </InfiniteScroll>
  );
}

export default GameGrid;
