import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectToLongURL = () => {
  const { key } = useParams();

  useEffect(() => {
    console.log("key", key);
  }, []);

  return <div>Redirect to Long URL with {key}</div>;
};

export default RedirectToLongURL;
