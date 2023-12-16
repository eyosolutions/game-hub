import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScrenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5} marginTop={5}>
      {data?.results.map((item) => (
        <Image key={item.id} src={item.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
