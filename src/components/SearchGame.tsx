import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { type FormEvent, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameAction from "../store";
import { useNavigate } from "react-router-dom";

function SearchGame() {
  const handleGameSearch = useGameAction((state) => state.handleGameSearch);
  const navigate = useNavigate();

  const gameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(eve: FormEvent) {
    eve.preventDefault();

    if (gameRef.current?.value) handleGameSearch(gameRef.current.value);
    formRef.current?.reset();
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch />
        </InputLeftElement>
        <Input
          placeholder={"Search Games...."}
          borderRadius={100}
          ref={gameRef}
        />
      </InputGroup>
    </form>
  );
}

export default SearchGame;
