import { Button, Card, Input, Typography, message, Row } from "antd";
import "../Styles/Styles.css";
import { CopyOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const ShortURLBox = ({ shortURL }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const onCopyClicked = () => {
    navigator.clipboard.writeText(shortURL);
    messageApi.info("URL copied");
  };

  return (
    <>
      {contextHolder}
      <Input
        value={shortURL}
        addonAfter={
          <Button type="text" icon={<CopyOutlined />} onClick={onCopyClicked}>
            Copy
          </Button>
        }
        readOnly
      />
    </>
  );
};

export default ShortURLBox;
