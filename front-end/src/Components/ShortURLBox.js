import { Button, Card, Input, Typography, message, Row } from "antd";
import "../Styles/Styles.css";

const { Title } = Typography;

const ShortURLBox = ({ shortURL }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const onCopyClicked = () => {
    navigator.clipboard.writeText(shortURL);
    messageApi.info("URL copied");
  };

  return (
    <>
      {contextHolder}
      <Card>
        <Title level={5}>Shorten URL</Title>
        <Input value={shortURL} />
        <Row justify="center" className="mt-1">
          <Button type="primary" onClick={onCopyClicked}>
            Copy Link
          </Button>
        </Row>
      </Card>
    </>
  );
};

export default ShortURLBox;
