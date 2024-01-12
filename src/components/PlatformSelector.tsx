import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import useGameAction from "../store";

function PlatformSelector() {
  const platformId = useGameAction((state) => state.gameQuery.platformId);
  const handlePlatform = useGameAction((state) => state.handlePlatform);

  const { data: platforms } = usePlatform();

  const platformName = platforms?.results?.find(
    (pla) => pla.id === platformId
  )?.name;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {platformName ? platformName : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results?.map(({ id, name }) => (
          <MenuItem key={id} onClick={() => handlePlatform(id)}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
