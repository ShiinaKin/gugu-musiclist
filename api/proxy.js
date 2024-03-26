import axios from "axios";

export default async function (req, res) {
  axios
    .get("https://docs.qq.com/dop-api/opendoc?id=DQ2t2R3lIWVZRbWVq&normal=1", {
      headers: {
        Referer: "https://docs.qq.com/"
      }
    })
    .then((response) => {
      console.log("==========");
      console.log(response.data);
      console.log("==========");
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
