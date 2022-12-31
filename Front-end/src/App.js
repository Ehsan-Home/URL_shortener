import { Route, Routes } from "react-router-dom";
import "./Styles/Styles.css";
import Home from "./Views/Home";
import RedirectToLongURL from "./Views/RedirectToLongURL";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:key" element={<RedirectToLongURL />} />
    </Routes>
  );
}

export default App;
