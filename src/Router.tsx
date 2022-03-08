import { Routes, Route } from "react-router-dom";
import DiceSelector from "./components/diceSelector/DiceSelector";
import { MonsterPage } from "./pages/monsters";
import { PATHS } from "./rootStruct";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DiceSelector />} />
      <Route path={PATHS.HOME} element={<>home</>} />
      <Route path={PATHS.MONSTERS} element={<MonsterPage />} />
    </Routes>
  );
};

export default Router;
