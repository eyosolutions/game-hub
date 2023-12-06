import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { GameType } from "../hooks/useGames";
import { HStack, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: GameType;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GameCard;
