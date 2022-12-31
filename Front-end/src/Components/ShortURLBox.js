import { Button, Card, Input, Typography, message } from "antd";
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
        <Input.Group compact>
          <Input
            value={shortURL}
            style={{
              width: "calc(100% - 80px)",
            }}
          />
          <Button type="primary" onClick={onCopyClicked}>
            Copy
          </Button>
        </Input.Group>
      </Card>
    </>
  );
};

export default ShortURLBox;
