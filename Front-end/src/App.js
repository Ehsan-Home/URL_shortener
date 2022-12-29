import { Button } from "antd";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import ShortURLBox from "./Components/ShortURLBox";
import TextInputBox from "./Components/TextInputBox";

function App() {
  return (
    <div>
      <Header />
      <TextInputBox />
      <ShortURLBox />
      <Notes />
    </div>
  );
}

export default App;
