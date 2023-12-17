import {
  Flex,
  HStack,
  Hide,
  Show,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex alignItems="center" justifyContent="flex-end" gap={2}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Hide below="sm">
        <Text style={{ textTransform: "capitalize" }} whiteSpace="nowrap">
          {`${colorMode} `}mode
        </Text>
      </Hide>
    </Flex>
  );
};

export default ColorModeSwitch;
