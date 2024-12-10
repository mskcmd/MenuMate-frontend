import React, { useState, useEffect } from "react";
import MenuButten from "./Menu/MenuButten";
import withButtonState from "../utils/withButtonState";
import ItemList from "./Menu/ItemList";

interface MenuListProps {
  selectedValue: string;
  onButtonClick: (value: string) => void;
}

const MenuList: React.FC<MenuListProps> = ({
  selectedValue,
  onButtonClick,
}) => {
  const [menuData, setMenuData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const activeCategory = selectedValue || "FOOD";
  console.log(activeCategory);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_B_URI}/getMenu/?header=${activeCategory}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }

        const data = await response.json();
        setMenuData(data);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setIsLoading(false);
      }
    };

    fetchMenuData();
  }, [activeCategory]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("menuData", menuData);

  return (
    <div>
      <MenuButten
        onButtonClick={onButtonClick}
        activeCategory={activeCategory}
      />
      <ItemList items={menuData} activeCategory={activeCategory} />
    </div>
  );
};

export default withButtonState(MenuList);
