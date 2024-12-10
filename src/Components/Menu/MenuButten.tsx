import React from "react";
import { Button } from "@nextui-org/react";

type Category = string;

interface MenuButtonProps {
  onButtonClick: (value: string) => void;
  activeCategory: Category;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onButtonClick, activeCategory }) => {
  const imageSrc =
    "https://s3-alpha-sig.figma.com/img/0571/aff9/d875fd6fec8f3801ba095cc39be0e4b1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RFxLpkEjoVAaVTqtbYQ6wCIrA6xu5Su4oaxaoU4fJXge9N0oT5bfhXf1MvvYyEQKDDglsuCzYjW5UH11gUKShNqp0lx2KqvyRyo7tcQ-UVU9aTd2V8VYR~TT-Bedh6cVgRzyk0b08d~vnAymLEUHwTe29hrgkmqdPUaNYGA9bZLf~vWpJdktWALZ7Rqy30ri3KbMzBJe9nS9zY0dhrPpZn-iojkhXLUAleFXqJ2Q7K4BX-FkenzVxoWVW-5Ig79YAfzOl1XCnnmgR3iGKKTuZrDcAHWqe-BspqDDRhXcEKwSKHRusOF6pFsUJUTFjMA0OrcDjHm~BGtN3WyLNzCJkQ__";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 relative">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`relative group ${index > 0 ? "hidden sm:block" : ""}`}
        >
          <img
            src={imageSrc}
            alt={`Menu Item ${index + 1}`}
            className="w-full h-[90px] sm:h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-23 flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:mt-10 mt-6 z-10">
        <Button
          className={`bg-black text-white shadow-lg hover:bg-gray-800 ${activeCategory === "FOOD" ? "bg-primary" : ""}`}
          size="lg"
          radius="none"
          variant="ghost"
          onClick={() => onButtonClick("FOOD")}
        >
          Food
        </Button>
        <Button
          className={`bg-black text-white shadow-lg hover:bg-gray-800 ${activeCategory === "DRINKS" ? "bg-primary" : ""}`}
          size="lg"
          radius="none"
          color="primary"
          variant="ghost"
          onClick={() => onButtonClick("DRINKS")}
        >
          Drinks
        </Button>
        <Button
          className={`bg-black text-white shadow-lg hover:bg-gray-800 ${activeCategory === "BRUNCH COCKTAILS" ? "bg-primary" : ""}`}
          size="lg"
          radius="none"
          color="primary"
          variant="ghost"
          onClick={() => onButtonClick("BRUNCH COCKTAILS")}
        >
          Brunch
        </Button>
      </div>
    </div>
  );
};

export default MenuButton;
