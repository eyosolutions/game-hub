import { HStack, Heading, List, ListItem } from "@chakra-ui/layout";
import useGenres, { Genre } from "../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCroppedImageUrl from "../services/image-url";
// import { Spinner } from "@chakra-ui/spinner";
import { Skeleton } from "@chakra-ui/skeleton";
import { Button } from "@chakra-ui/button";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // if (isLoading) return <Spinner />; // using spinner for loading
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginY={5}>
        Genres
      </Heading>
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
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY="5px">
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              {/* <Text noOfLines={1}> */}
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
