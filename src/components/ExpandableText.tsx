import { Button } from "@chakra-ui/react";
import { useState } from "react";

function ExpandableText({ text }: { text?: string }) {
  const [hasMore, setHasMore] = useState(true);

  const expandableText = hasMore ? (
    <>
      {text?.substring(0, 300)}...{" "}
      <Button colorScheme="yellow" size="xs" onClick={() => setHasMore(false)}>
        Show More
      </Button>
    </>
  ) : (
    <>
      {text}{" "}
      <Button colorScheme="yellow" size="xs" onClick={() => setHasMore(true)}>
        Show Less
      </Button>
    </>
  );

  return expandableText;
}

export default ExpandableText;
