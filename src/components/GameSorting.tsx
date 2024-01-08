import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { GameQuery } from "../App";

export interface SortingOrder {
  value: string;
  label: string;
}

interface GameSortingProps {
  onSorting: (sorting: string) => void;
  gameQuery: GameQuery;
}

function GameSorting({
  gameQuery: { sortingValue },
  onSorting,
}: GameSortingProps) {
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
          <MenuItem key={value} value={value} onClick={() => onSorting(value)}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default GameSorting;
