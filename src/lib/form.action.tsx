"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.timeweb.ru",
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!,
  },
  port: 465,
  secure: true,
  dkim: {
    domainName: process.env.DKIM_DOMAIN!,
    keySelector: "mail",
    privateKey: process.env.DKIM_PRIVATE_KEY!,
  },
});

const textMail = (data: {
  name: string;
  type: string;
  phone: string;
  email: string;
  comment?: string;
}) => `
Тип запроса:  ${data.type}
Имя:          ${data.name}
Телефон:      ${data.phone}
Почта:        ${data.email}
Комментарий:  ${data.comment || "нет"}
`;

export default async function onFormSubmit(data: {
  name: string;
  type: string;
  phone: string;
  email: string;
  comment?: string;
}) {
  try {
    const ReactDomServer = await import("react-dom/server");
    await transporter.sendMail({
      from: process.env.MAIL_USER!,
      to: process.env.MAIL_TO!,
      subject: `[BIOTECH.INDUSTRIES][${data.type}] ${data.name}`,
      text: textMail(data),
      html: ReactDomServer.renderToString(
        <html>
          <head>
            <style>{`
              table {
                border-collapse: collapse;
                width: 100%;
              }
              td {
                border: 1px solid black;
                padding: 8px;
              }
            `}</style>
          </head>
          <body>
            <table>
              <tr>
                <td>Тип запроса</td>
                <td>{data.type}</td>
              </tr>
              <tr>
                <td>Имя</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Телефон</td>
                <td>
                  <a href={`tel:${data.phone}`}>{data.phone}</a>
                </td>
              </tr>
              <tr>
                <td>Почта</td>
                <td>
                  <a href={`mailto:${data.email}`}>{data.email}</a>
                </td>
              </tr>
              <tr>
                <td>Комментарий</td>
                <td>{data.comment || "нет"}</td>
              </tr>
            </table>
          </body>
        </html>,
      ),
    });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error };
  }
}
