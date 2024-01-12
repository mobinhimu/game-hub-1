import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

function GameDetail() {
  const { slug } = useParams();
  const { data, isLoading } = useGameDetails(slug);

  if (isLoading || !data?.description_raw) return null;

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data.description_raw} />
    </Box>
  );
}

export default GameDetail;
