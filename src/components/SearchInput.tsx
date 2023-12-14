import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (refInput.current) setSearchText(refInput.current?.value);
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
  );
};

export default SearchInput;
