import { HStack, Image } from "@chakra-ui/react";

import image from "../assets/logo.webp";
import ToggleDarkMode from "./ToggleDarkMode";
import SearchGame from "./SearchGame";

function NavBar() {
  return (
    <HStack padding={"10px"}>
      <Image boxSize="60px" src={image} />
      <SearchGame />
      <ToggleDarkMode />
    </HStack>
  );
}

export default NavBar;
