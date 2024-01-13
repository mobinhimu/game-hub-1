import { useParams } from "react-router-dom";
import useGameVideo from "../hooks/useGameVideo";

function GameVideoPreview() {
  const { slug } = useParams();
  const { data } = useGameVideo(`${slug}/movies` as string);

  return (
    <video
      controls
      src={data?.results.map((result) => result.data["480"])[0]}
      poster={data?.results.map((result) => result.preview)[0]}
      muted
    >
      Sorry, your browser doesn't support embedded videos, but don't worry, you
      can
      <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
      and watch it with your favorite video player!
    </video>
  );
}

export default GameVideoPreview;
