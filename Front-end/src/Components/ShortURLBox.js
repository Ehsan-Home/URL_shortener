import { Button, Card, Col, Row, Input, Typography } from "antd";
import "../Styles/Styles.css";

const { Text } = Typography;

const ShortURLBox = () => {
  return (
    <Row justify="center">
      <Col xl={12} lg={12} md={18} sm={24} xs={24}>
        <Card>
          <Text type="secondary">Shorten URL</Text>
          <Input.Group compact>
            <Input
              ini
              style={{
                width: "calc(100% - 80px)",
              }}
            />
            <Button type="primary">Copy</Button>
          </Input.Group>
        </Card>
      </Col>
    </Row>
  );
};

export default ShortURLBox;
