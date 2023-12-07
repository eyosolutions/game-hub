import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres, { Genre } from "../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCroppedImageUrl from "../services/image-url";
import { Spinner } from "@chakra-ui/spinner";
import { Skeleton, SkeletonText } from "@chakra-ui/skeleton";
import { Button } from "@chakra-ui/button";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: GenreListProps) => {
  const { data: genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // if (isLoading) return <Spinner />; // using spinner for loading
  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton}>
            <HStack paddingY="5px">
              <Skeleton width="32px" height="32px" borderRadius={8} />
              <Skeleton width="100px" height={4} borderRadius={3} />
            </HStack>
          </ListItem>
        ))}
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            {/* <Text noOfLines={1}> */}
            <Text noOfLines={1}>
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
