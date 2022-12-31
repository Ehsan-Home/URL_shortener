import Network from "./Setup";

const URLRequest = (data, setUniqueKey) => {
  Network.post("url/", data)
    .then((response) => {
      const data = response.data;
      // console.log("resInStr.unique_key: ", data["unique_key"]);
      const uniqueKey = data["unique_key"];
      // console.log("unique key", uniqueKey);
      setUniqueKey("http:/localhost:3000/" + uniqueKey);
    })
    .catch((error) => console.log("error from url request" + error));
};

export default URLRequest;
