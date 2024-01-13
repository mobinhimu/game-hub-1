import { HStack, Image } from "@chakra-ui/react";

import image from "../assets/logo.webp";
import ToggleDarkMode from "./ToggleDarkMode";
import SearchGame from "./SearchGame";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image boxSize="60px" src={image} />
      </Link>{" "}
      <SearchGame />
      <ToggleDarkMode />
    </HStack>
  );
}

export default NavBar;
