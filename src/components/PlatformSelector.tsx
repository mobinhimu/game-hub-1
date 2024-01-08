import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import { type GameQuery } from "../App";

interface PlatformSelectorProps {
  onPlatform: (platformId?: number) => void;
  gameQuery: GameQuery;
}

function PlatformSelector({
  onPlatform,
  gameQuery: { platformId },
}: PlatformSelectorProps) {
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
          <MenuItem key={id} onClick={() => onPlatform(id)}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
