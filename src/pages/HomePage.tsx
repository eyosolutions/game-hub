import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <Show above="md">
        <GridItem area="aside" marginLeft={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginX={5}>
          <GameHeading />
          <Flex marginY={5} gap={3}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
