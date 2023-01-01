import Network from "./Setup";

const URLRequest = (data, setUniqueKey, setLoading) => {
  Network.post("url/", data)
    .then((response) => {
      setLoading(false);
      const data = response.data;
      // console.log("resInStr.unique_key: ", data["unique_key"]);
      const uniqueKey = data["unique_key"];
      // console.log("unique key", uniqueKey);
      setUniqueKey("localhost:3000/" + uniqueKey);
    })
    .catch((error) => {
      setLoading(false);
      console.log("error from url request" + error);
    });
};

export default URLRequest;
