import { nextui } from "@nextui-org/react";

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      KellySlab: ["Kelly Slab"],
    },
    colors: {
      deepBlue: "#0796EF",
      white: "#FFFFFF",
      softBrown: "#857878",
    },
  },
};
export const plugins = [nextui()];
