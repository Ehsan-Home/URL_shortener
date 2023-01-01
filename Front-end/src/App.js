import { Route, Routes } from "react-router-dom";
import "./Styles/Styles.css";
import Home from "./Views/Home";
import ErrorBox from "./Views/ErrorBox";
import RedirectToLongURL from "./Views/RedirectToLongURL";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:key" element={<RedirectToLongURL />} />
      <Route
        path="*"
        element={<ErrorBox status={404} message="The page cannot be found." />}
      />
    </Routes>
  );
}

export default App;
