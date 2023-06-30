import { Col, Row } from "antd";
import Header from "../Components/Header";
import ShortenedURLInput from "../Components/LongURLInput";
import LongURLBox from "../Components/LongURLBox";

const Preview = () => {
  return (
    <Row justify="center" gutter={[0, 24]}>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <Header title="Preview Shortened URL" />
      </Col>
      <Col xs={24} sm={24} md={18} lg={20} xl={20}>
        <ShortenedURLInput />
        <LongURLBox />
      </Col>
    </Row>
  );
};

export default Preview;
