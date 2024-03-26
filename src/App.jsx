import StartGame from "./componets/StartGame";
import GamePlay from "./componets/GamePlay";
import { useState } from "react";

function App() {
const [isStartGame, setIsStartGame] = useState(true);

const toogleStart = () => {
  setIsStartGame((prev) => !prev);
}

  return (
    <>
      {isStartGame ? <StartGame toggle={toogleStart}/> : <GamePlay/>}
    </>
  );
}

export default App
