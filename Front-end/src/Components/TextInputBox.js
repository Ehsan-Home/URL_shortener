import { Button, Card, Col, Divider, Form, Input, Typography } from "antd";

const { Title } = Typography;

const TextInputBox = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    console.log("finished tapped");
    console.log(form);
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
          <Button type="primary" htmlType="submit">
            Shorten
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TextInputBox;
