import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Lefter from "./lefter/Lefter";

function App() {
  const [isUnderlay, setIsUnderlay] = useState(false);

  return (
    <>
      <Header isUnderlay={isUnderlay} />
      <div className="flex h-screen">
        <Lefter />
        <div className="flex p-4 bg-white"></div>
      </div>
    </>
  );
}

export default App;
