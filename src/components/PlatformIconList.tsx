import { HStack } from "@chakra-ui/layout";
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
import { Icon } from "@chakra-ui/icon";
import { IconType } from "react-icons/lib";
import { Platform } from "../hooks/usePlatforms";

interface PlatformProps {
  platforms: Platform[];
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
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
