export const sendgrid = {
    apiKey: process.env.SENDGRID_API_KEY || "",
    from: process.env.SENDGRID_FROM || "",
    to: process.env.SENDGRID_TO || "",
  };
