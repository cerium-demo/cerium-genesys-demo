import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end()
    return
  }

  if (req.method === "POST") {
    const { email, message } = req.body

    await transporter.sendMail(
      {
        from: email,
        to: "ramziddin.makhmudov@gmail.com",
        subject: `Cerium Networks Website: ${email}`,
        text: message,
      },
      () => {}
    )
  }

  res.end()
}
