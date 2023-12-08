import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Game } from "../hooks/useGames";
import { HStack, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GameCard;
