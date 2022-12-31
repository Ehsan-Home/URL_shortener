import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchLongURL from "../Network/FetchLongURL";

const RedirectToLongURL = () => {
  const { key } = useParams();
  const [longURL, setLongURL] = useState();

  useEffect(() => {
    fetchLongURL(key, setLongURL);
  }, []);

  useEffect(() => {
    if (longURL) {
      window.location = longURL;
    }
  }, [longURL]);

  return <div>Redirect to Long URL with {key}</div>;
};

export default RedirectToLongURL;
