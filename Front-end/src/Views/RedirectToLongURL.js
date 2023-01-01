import { Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchLongURL from "../Network/FetchLongURL";
import ErrorBox from "./ErrorBox";

const RedirectToLongURL = () => {
  const { key } = useParams();
  const [longURL, setLongURL] = useState();
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    fetchLongURL(key, setLongURL, setFetchError);
  }, []);

  useEffect(() => {
    if (longURL) {
      window.location = longURL;
    }
  }, [longURL]);

  return fetchError ? (
    <ErrorBox status={fetchError.status} message={fetchError.message} />
  ) : (
    <Row justify="center" className="mt-4">
      <Spin tip="Redirecting" size="large" />
    </Row>
  );
};

export default RedirectToLongURL;
