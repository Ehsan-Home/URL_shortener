import { Card, Typography } from "antd";
import "../Styles/Styles.css";

const { Text } = Typography;

const LongURLBox = ({ shortURLKey, longURL }) => {
  if (!shortURLKey || !longURL) {
    return null;
  }
  return (
    <Card className="center">
      <h1>http://localhost:3000/{shortURLKey}</h1>
      <Text>redirects to</Text>
      <h1 className="word-break">{longURL}</h1>
    </Card>
  );
};

export default LongURLBox;
