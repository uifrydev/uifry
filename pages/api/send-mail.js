import { nodeMailer } from "../../utils/nodemailer";
export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(404).send({ message: "Route Not Found" });
  const node_mailer = await nodeMailer();
  console.log({ node_mailer });
  res.status(200).json({
    message: "Hello World",
  });
}
