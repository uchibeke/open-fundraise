import fetch from "node-fetch";

const dev = process.env.NODE_ENV == "development";
let server = "https://api.chimoney.io/v0.2";

const create = async (req, res) => {
  try {
    const headers = {
      Authorization: `Bearer ${""}`,
      "X-api-key": process.env.CHIMONEY_API_SECRET,
      "Content-Type": "application/json",
    };
    const config = {
      method: "POST",
      url: `${server}/accounts/transactions`,
      headers,
      body: JSON.stringify(req.body),
    };

    const response = await fetch(config.url, config).then((res) => {
      return res.json();
    });
    return res.send({
      data: response.data || response,
      status: "success",
    });
  } catch (error) {
    console.log({ error });
    res.send({ status: "success", error });
  }
};

export default create;
