import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import FetchArticle from "./components/FetchArticle";
import Detail from "./components/Detail";
import Navv from "./components/Navv";

function App() {
  return (
    <BrowserRouter>
      <Navv />
      <Routes>
        <Route path="/" element={<FetchArticle />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
