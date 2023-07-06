import { Card, Typography } from "antd";
import "../Styles/Styles.css";

const { Text } = Typography;

const LongURLBox = ({ shortURL, longURL }) => {
  if (!shortURL || !longURL) {
    return null;
  }
  return (
    <Card className="center">
      <h1>{shortURL}</h1>
      <Text>redirects to</Text>
      <h1 className="word-break">{longURL}</h1>
    </Card>
  );
};

export default LongURLBox;
