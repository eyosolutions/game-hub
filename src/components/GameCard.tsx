import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { GameType } from "../hooks/useGames";
import { Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

interface GameCardProps {
  game: GameType;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GameCard;
