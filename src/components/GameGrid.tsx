import { SimpleGrid, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import useGameQueryStore from "../store";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  // Call the custom state hook
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
        next={() => fetchNextPage()}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px 20px"
          spacing={5}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
          {/* {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))} */}
        </SimpleGrid>
      </InfiniteScroll>
      {/* {hasNextPage && (
        <Button
          disabled={isFetchingNextPage}
          marginY={5}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )} */}
    </>
  );
};

export default GameGrid;
