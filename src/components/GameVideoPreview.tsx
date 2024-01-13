import { useParams } from "react-router-dom";
import useGameVideo from "../hooks/useGameVideo";
import { Heading } from "@chakra-ui/react";

function GameVideoPreview() {
  const { slug } = useParams();
  const { data, isLoading } = useGameVideo(slug as string);

  if (isLoading) return null;

  if (!data?.results.length) return <Heading>Video Not Found !</Heading>;

  return (
    <video
      controls
      src={data?.results.map((result) => result.data["480"])[0]}
      poster={data?.results.map((result) => result.preview)[0]}
      muted
    >
      Sorry, your browser doesn't support embedded videos, but don't worry, you
      can
      <a href={data?.results.map((result) => result.data.max)[0]}>
        download it
      </a>
      and watch it with your favorite video player!
    </video>
  );
}

export default GameVideoPreview;
