import { Card, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const ErrorBox = ({ status, message }) => {
  return (
    <Row justify="center" className="mt-4">
      <Card className="w-80 center">
        <Title level={1}>{status}</Title>
        <Paragraph>{message}</Paragraph>
        <Link to="/" replace>
          Home
        </Link>
      </Card>
    </Row>
  );
};

export default ErrorBox;
