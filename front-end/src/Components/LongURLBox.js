import { Card, Typography } from "antd";
import "../Styles/Styles.css";

const { Text } = Typography;

const LongURLBox = () => {
  return (
    <Card className="center">
      <h1>www.penniurl.com/21323</h1>
      <Text>redirects to</Text>
      <h1>www.google.com/fsdlfjsd</h1>
    </Card>
  );
};

export default LongURLBox;
