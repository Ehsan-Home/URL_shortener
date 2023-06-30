import React from "react";
import { Row, Typography } from "antd";
const { Title } = Typography;

const Header = ({ title }) => {
  return (
    <Row justify="center">
      <Title>{title}</Title>
    </Row>
  );
};

export default Header;
