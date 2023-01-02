import { Button, Card, Form, Input, Typography } from "antd";
import { useState } from "react";
import URLRequest from "../Network/URLRequest";

const { Title } = Typography;

const TextInputBox = ({ setShortURL }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    URLRequest(values, setShortURL, setLoading);
  };

  return (
    <Card>
      <Title level={5}>Long URL</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="url"
          rules={[
            {
              required: true,
              message: "Please enter URL",
            },
          ]}
        >
          <Input placeholder="Enter your URL" />
        </Form.Item>
        <Form.Item className="center">
          <Button type="primary" htmlType="submit" loading={loading}>
            Shorten
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TextInputBox;
