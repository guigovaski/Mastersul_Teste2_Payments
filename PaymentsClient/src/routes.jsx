import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { GridScreen } from "./screens/GridScreen";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/grids/:username" element={<GridScreen />} />
    </Routes>
  );
}