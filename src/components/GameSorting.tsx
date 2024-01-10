import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import useGameAction from "../store";

export interface SortingOrder {
  value: string;
  label: string;
}

const sortingOrder: SortingOrder[] = [
  {
    value: "",
    label: "Relevance",
  },
  {
    value: "added",
    label: "Date Added",
  },
  {
    value: "-released",
    label: "Release Date",
  },
  {
    value: "-rating",
    label: "Avg Rating",
  },
  {
    value: "-metacritic",
    label: "Popularity",
  },
];

function GameSorting() {
  const sortingValue = useGameAction((state) => state.gameQuery.sortingValue);
  const handleSorting = useGameAction((state) => state.handleSorting);

  const selectedOrder = sortingOrder.find(
    ({ value }) => value === sortingValue
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Sort By : {selectedOrder ? selectedOrder : "Relevance"}
      </MenuButton>

      <MenuList>
        {sortingOrder.map(({ value, label }) => (
          <MenuItem
            key={value}
            value={value}
            onClick={() => handleSorting(value)}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default GameSorting;
