import { Image } from "@chakra-ui/image";
import { HStack, Heading, List, ListItem } from "@chakra-ui/layout";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
// import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";
import { Skeleton } from "@chakra-ui/skeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
                onClick={() => setSelectedGenreId(genre.id)}
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
