import { Card, Typography } from "antd";

const { Paragraph, Title } = Typography;

const LongURLBox = () => {
  return (
    <Card style={{ textAlign: "center" }}>
      <Title level={3}>www.penniurl.com/21323</Title>
      redirects to
      <Title level={3}>www.google.com/fsdlfjsd</Title>
    </Card>
  );
};

export default LongURLBox;
