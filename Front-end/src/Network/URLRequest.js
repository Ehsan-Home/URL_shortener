import axios from "axios";
import Network from "./Setup";

const URLRequest = (data) => {
  Network.post("url/", data)
    .then((response) => console.log("response from url request" + response))
    .catch((error) => console.log("error from url request" + error));
};

export default URLRequest;
