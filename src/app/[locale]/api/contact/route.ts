import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json()

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!, // from .env
        pass: process.env.EMAIL_PASS!, // from .env
      },
    })

    const logoUrl = "https://res.cloudinary.com/dkdjygcyy/image/upload/v1749143723/Alogza_Outline_knp1kd.png"

    const companyHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #eccc68; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #eccc68; padding: 20px; text-align: center;">
            <img src="${logoUrl}" alt="Alogza Logo" style="max-width: 120px; margin-bottom: 10px;" />
            <h2 style="margin: 0;">📩 New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </div>
    `

    const userHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #eccc68; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #eccc68; padding: 20px; text-align: center;">
            <img src="${logoUrl}" alt="Alogza Logo" style="max-width: 120px; margin-bottom: 10px;" />
            <h2 style="margin: 0;">🤝 Thank You for Contacting Alogza</h2>
          </div>
          <div style="padding: 20px;">
            <p>Hi ${firstName},</p>
            <p>Thank you for reaching out to <strong>Alogza</strong>. We appreciate your message and will get back to you shortly.</p>
            
            <h3 style="margin-top: 20px;">📝 Your Message Details:</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #eccc68;" />

            <p style="text-align: center;">📲 Follow us on social media for updates and tech insights:</p>
            <p style="text-align: center;">
              <a href="https://facebook.com/alogza" style="color: #eccc68; text-decoration: none;">Facebook</a> |
              <a href="https://instagram.com/alogza" style="color: #eccc68; text-decoration: none;">Instagram</a> |
              <a href="https://linkedin.com/company/alogza" style="color: #eccc68; text-decoration: none;">LinkedIn</a>
            </p>

            <p style="margin-top: 30px;">Warm regards,<br><strong>The Alogza Team</strong></p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"Alogza" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: companyHtml,
    })

    await transporter.sendMail({
      from: `"Alogza" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Alogza – We've received your message!",
      html: userHtml,
    })

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending emails:", error)
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 })
  }
}
