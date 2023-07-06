import { Col, Row } from "antd";
import Header from "../Components/Header";
import ShortenedURLInput from "../Components/LongURLInput";
import LongURLBox from "../Components/LongURLBox";
import { useState } from "react";

const Preview = () => {
  const [longURL, setLongURL] = useState();
  const [shortURL, setShortURL] = useState();
  return (
    <Row justify="center" gutter={[0, 24]}>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <Header title="Preview Shortened URL" />
      </Col>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <ShortenedURLInput setLongURL={setLongURL} setShortURL={setShortURL} />
        <LongURLBox shortURL={shortURL} longURL={longURL} />
      </Col>
    </Row>
  );
};

export default Preview;
