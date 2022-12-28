import { Button } from "antd";
import Header from "./Components/Header";
import ShortURLBox from "./Components/ShortURLBox";
import TextInputBox from "./Components/TextInputBox";

function App() {
  return (
    <div>
      <Header />
      <TextInputBox />
      <ShortURLBox />
    </div>
  );
}

export default App;
