import { HStack, Text } from "@chakra-ui/layout";
import {
  FaWindows,
  FaLinux,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { PlatformType } from "../hooks/useGames";
import { Icon } from "@chakra-ui/icon";
import { IconType } from "react-icons/lib";

interface PlatformProps {
  platforms: PlatformType[];
}

const PlatformIconList = ({ platforms }: PlatformProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    android: FaAndroid,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
