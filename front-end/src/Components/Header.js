import React from "react";
import { Row, Typography } from "antd";
const { Title } = Typography;

const Header = () => {
  return (
    <Row justify="center">
      <Title>URL Shortener</Title>
    </Row>
  );
};

export default Header;
