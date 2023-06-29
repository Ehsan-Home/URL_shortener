import { Alert, Typography } from "antd";

const { Paragraph } = Typography;

const MaliciousLinksAlert = () => {
  return (
    <Alert
      closable
      message="Beware of malicious URLs"
      description={
        <Paragraph>
          When using URL shortener services, exercise caution as they can hide
          malicious destinations and make it difficult to assess website
          credibility. Be mindful of potential risks and check the destination
          using our <a href="#">preview</a> section.
        </Paragraph>
      }
      banner
    />
  );
};

export default MaliciousLinksAlert;
