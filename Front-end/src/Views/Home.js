import { Col, Row } from "antd";
import { useState } from "react";
import Header from "../Components/Header";
import Notes from "../Components/Notes";
import ShortURLBox from "../Components/ShortURLBox";
import TextInputBox from "../Components/TextInputBox";

const Home = () => {
  const [shortURL, setShortURL] = useState();
  return (
    <div className="background">
      <Row justify="center" gutter={[0, 24]}>
        <Col xs={24} sm={24} md={18} lg={20} xl={20}>
          <Header />
        </Col>
        <Col xs={24} sm={24} md={18} lg={20} xl={20}>
          <TextInputBox setShortURL={setShortURL} />
        </Col>
        <Col xs={24} sm={24} md={18} lg={20} xl={20}>
          <ShortURLBox shortURL={shortURL} />
        </Col>
        <Col xs={24} sm={24} md={18} lg={20} xl={20}>
          <Notes />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
