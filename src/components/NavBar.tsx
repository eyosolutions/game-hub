import { Image } from "@chakra-ui/image";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";

const NavBar = () => {
  return (
    <Flex
      alignItems="center"
      gap={2}
      justifyContent="space-between"
      margin="20px 20px 0px 16px"
    >
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <Flex alignItems="center" gap={3} justifyContent="flex-end" width="84%">
        <SearchInput />
        <ColorModeSwitch />
      </Flex>
    </Flex>
  );
};

export default NavBar;
