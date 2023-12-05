import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="md">
        <GridItem area="aside" bg="magenta">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="teal">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
