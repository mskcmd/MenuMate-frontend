import "./App.css";
import DashBord from "./Pages/DashBord";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <NextUIProvider>
        <DashBord />
      </NextUIProvider>
    </>
  );
}

export default App;
