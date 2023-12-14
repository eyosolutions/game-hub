import { Image } from "@chakra-ui/image";
import { HStack } from "@chakra-ui/layout";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
