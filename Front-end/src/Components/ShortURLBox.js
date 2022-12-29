import { Button, Card, Col, Row, Input, Typography, message } from "antd";
import "../Styles/Styles.css";

const { Text, Title } = Typography;

const ShortURLBox = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const onCopyClicked = () => {
    navigator.clipboard.writeText("Shorten URL2");
    messageApi.info("URL copied");
  };
  return (
    <Row justify="center">
      {contextHolder}
      <Col xl={12} lg={12} md={18} sm={24} xs={24}>
        <Card>
          <Title level={5}>Shorten URL</Title>
          <Input.Group compact>
            <Input
              defaultValue={"localhost:3000/tw392"}
              style={{
                width: "calc(100% - 80px)",
              }}
            />
            <Button type="primary" onClick={onCopyClicked}>
              Copy
            </Button>
          </Input.Group>
        </Card>
      </Col>
    </Row>
  );
};

export default ShortURLBox;
