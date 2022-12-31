import axios from "axios";
import Network from "./Setup";

const URLRequest = (data) => {
  Network.post("url/", data)
    .then((response) => {
      console.log("url in string: " + JSON.stringify(response.data));
    })
    .catch((error) => console.log("error from url request" + error));
};

export default URLRequest;
