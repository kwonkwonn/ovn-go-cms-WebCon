import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Lefter from "./lefter/Lefter";
import Controller from "./controller/controller";

function App() {
  const [isUnderlay, setIsUnderlay] = useState(false);

  return (
    <>
      <Header isUnderlay={isUnderlay} />
      <div className="flex h-screen">
        <Lefter />
        <div className="flex p-4 bg-white"></div>
        <Controller />
      </div>
    </>
  );
}

export default App;
