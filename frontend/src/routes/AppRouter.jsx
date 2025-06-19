import { Routes, Route } from "react-router-dom";
import Home from "../pages/page";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default AppRouter;
