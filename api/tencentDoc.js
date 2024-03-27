import axios from "axios";

export default async function (req, res) {
  axios
    .get("https://docs.qq.com/dop-api/opendoc?id=DQ2t2R3lIWVZRbWVq&normal=1", {
      headers: {
        Referer: "https://docs.qq.com/"
      }
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
