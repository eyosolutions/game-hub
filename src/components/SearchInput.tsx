import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const SearchInput = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <Box width="100%">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (refInput.current) setSearchText(refInput.current?.value);
          navigate("/");
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
            ref={refInput}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
