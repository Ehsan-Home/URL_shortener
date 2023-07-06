import { Button, Form, Input, notification } from "antd";
import { useEffect, useState } from "react";
import fetchLongURL from "../Network/FetchLongURL";
import showErrorNotif from "./ErrorNotification";
import { isShortenedURLValid } from "../lib/regexes";
import { separateKeyFromShortURL } from "../lib/shortURL";

const ShortenedURLInput = ({ setLongURL, setShortURLKey }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [fetchError, setFetchError] = useState();

  const onFinish = (values) => {
    setShortURLKey(separateKeyFromShortURL(values["short_url"]));
    setLoading(true);
    fetchLongURL(
      separateKeyFromShortURL(values["short_url"]),
      setLongURL,
      setFetchError,
      setLoading
    );
  };

  useEffect(() => {
    fetchError && showErrorNotif(fetchError.status, fetchError.message, api);
  }, [fetchError, api]);

  const validateInput = (_, value) => {
    if (isShortenedURLValid(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("the value is not valid"));
  };

  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="short_url"
          rules={[
            // {
            //   required: true,
            //   message: "Please enter shortened URL",
            // },
            {
              validator: validateInput,
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
    </>
  );
};

export default ShortenedURLInput;
