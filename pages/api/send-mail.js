import { nodeMailer } from "../../utils/nodemailer";
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(404).send({ message: "Route Not Found" });
  const { name, email, comments, link } = req.body;
  const node_mailer = await nodeMailer({name, email, comments, link});
  console.log({ node_mailer });
  res.status(200).json({
    message: "Hello World",
  });
}
