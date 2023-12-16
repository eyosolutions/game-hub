import { Image } from "@chakra-ui/image";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";

const NavBar = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" gap={3} margin={5}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
