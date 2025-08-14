import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would send an email here
    // For now, we'll just log the contact form submission
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending (replace with actual email service)
    // You could use services like:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES

    // For demonstration, we'll return a success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
