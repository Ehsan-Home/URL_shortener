import { Button, Form, Input } from "antd";
import { useState } from "react";

const ShortenedURLInput = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = () => {
    console.log("finish clicked");
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="long_url"
        rules={[
          {
            required: true,
            message: "Please enter shortened URL",
          },
        ]}
      >
        <Input placeholder="Enter shortened URL" />
      </Form.Item>
      <Form.Item className="center">
        <Button type="primary" htmlType="submit" loading={loading}>
          Preview
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ShortenedURLInput;
