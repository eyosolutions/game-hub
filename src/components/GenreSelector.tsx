// Implementing genres list in mobile mode

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";
import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";

const GenreSelector = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenre = useGenre(selectedGenreId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedGenre?.name || "Genres"}
        </MenuButton>
        <MenuList>
          {data?.results.map((genre) => (
            <MenuItem
              key={genre.id}
              onClick={() => setSelectedGenreId(genre.id)}
            >
              {genre.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default GenreSelector;
