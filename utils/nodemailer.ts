import nodemailer from "nodemailer";
export const nodeMailer = ({
  name,
  email,
  link,
  comments,
}: {
  name: string;
  email: string;
  link: string;
  comments: string;
}) => {
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
    to: "accounts@uifry.com",
    subject: "Brief Sent by User.",
    html: `<div style="">
      <div style="display:flex;gap:10px;">
      <span style="font-weight:700;color:#000000;">User Name: </span>
      <span style="font-weight:400;color:grey;">${name}</span>
      </div>
      <div style="display:flex;gap:10px;">
      <span style="font-weight:700;color:#000000;">User Email: </span>
      <span style="font-weight:400;color:grey;">${email}</span>
      </div>
      <div style="display:flex;gap:10px;">
      <span style="font-weight:700;color:#000000;">User Comments: </span>
      <span style="font-weight:400;color:grey;">${comments}</span>
      </div>
      <div style="display:flex;gap:10px;">
      <span style="font-weight:700;color:#000000;">Figma/Google Drive Link: </span>
      <a href="${link}" style="">${link}</a>
      </div>
    </div>`,
    // attachments:[...options.attachments]
  });
};
