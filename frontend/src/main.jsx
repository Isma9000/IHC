import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import NotFound from "./pages/NotFound";




// eslint-disable-next-line react-refresh/only-export-components
const MainRouter = () => {

  return (
    <Routes>

        {/* Ruta para el usuario */}
        <Route path="/*" element={
          <App />
        } />
        
        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </React.StrictMode>
);