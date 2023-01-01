import { Button, Card, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const NotFound = () => {
  return (
    <Row justify="center" className="mt-4">
      <Card className="w-80 center">
        <Title level={1}>404</Title>
        <Paragraph>The page is not found</Paragraph>
        <Link to="/" replace>
          Home
        </Link>
      </Card>
    </Row>
  );
};

export default NotFound;
