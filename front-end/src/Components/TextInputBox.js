import { Button, Form, Input, notification } from "antd";
import { useState } from "react";
import URLRequest from "../Network/URLRequest";

const TextInputBox = ({ setShortURL }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const onFinish = (values) => {
    setLoading(true);
    URLRequest(values, setShortURL, setLoading, api);
  };

  return (
    <>
      {contextHolder}
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
            Shorten URL
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TextInputBox;
