import nodemailer from "nodemailer";
export const nodeMailer = () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "safiullah.eb19102107@gmail.com",
      pass: "dlgdfeihgiufmahz",
      // user: 'info@creaditech.com', // your email address
      // pass: 'Tob_a,?A$!LT'
    },
  });
  return transporter.sendMail({
    from: "safiullah.xeon@gmail.com",
    // to: "kashaf.creaditech@gmail.com",
    to: "safiullah.xeon@gmail.com",
    subject: "options.subject",
    html: `<div class"text-[10rem] text-[#000]">
    <h1>Email Sent</h1>
  </div>`,
    // attachments:[...options.attachments]
  });
};
