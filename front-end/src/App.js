import { Route, Routes } from "react-router-dom";
import "./Styles/Styles.css";
import Home from "./Views/Home";
import ErrorBox from "./Views/ErrorBox";
import RedirectToLongURL from "./Views/RedirectToLongURL";
import { ConfigProvider } from "antd";
import MaliciousLinksAlert from "./Components/MaliciousLinks";
import Preview from "./Views/Preview";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <ConfigProvider componentSize="large">
      <Navbar />
      <MaliciousLinksAlert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:key" element={<RedirectToLongURL />} />
        <Route path="/preview" element={<Preview />} />
        <Route
          path="*"
          element={
            <ErrorBox status={404} message="The page cannot be found." />
          }
        />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
