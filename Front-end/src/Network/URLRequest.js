import showErrorNotif from "../Components/ErrorNotification";
import Network from "./Setup";

const URLRequest = (data, setUniqueKey, setLoading, api) => {
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
      setUniqueKey(null);
      console.log("error", error);
      setLoading(false);

      showErrorNotif(
        error.response.status,
        error.response.data["long_url"],
        api
      );
    });
};
export default URLRequest;
