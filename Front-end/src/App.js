import { Button, Col, Row } from "antd";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import ShortURLBox from "./Components/ShortURLBox";
import TextInputBox from "./Components/TextInputBox";

function App() {
  return (
    <Row justify="center" gutter={[0, 24]}>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <Header />
      </Col>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <TextInputBox />
      </Col>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <ShortURLBox />
      </Col>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <Notes />
      </Col>
    </Row>
  );
}

export default App;
