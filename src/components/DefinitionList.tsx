import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionList {
  headingText: string;
  children: ReactNode | ReactNode[];
}
function DefinitionList({ children, headingText }: DefinitionList) {
  return (
    <Box paddingY={5}>
      <Heading fontSize="medium" as="dt" color="gray.500">
        {headingText}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionList;
