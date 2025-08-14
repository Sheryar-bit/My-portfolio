import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    let dbSuccess = false
    try {
      const { error: dbError } = await supabase.from("feedback").insert({
        name: name.trim(),
        email: email.trim(),
        subject: subject?.trim() || null,
        message: message.trim(),
      })

      if (dbError) {
        console.warn("Database insert failed:", dbError.message)
      } else {
        dbSuccess = true
      }
    } catch (dbError) {
      console.warn("Database connection failed:", dbError)
    }

    try {
      const emailSubject = subject ? `Portfolio Contact: ${subject}` : "New Portfolio Contact Message"
      const emailBody = `New message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject || "No subject"}

Message:
${message}

---
Sent from your portfolio website
Time: ${new Date().toLocaleString()}`

      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY || "demo",
          to_email: "alisharyar93@gmail.com",
          from_name: "Portfolio Website",
          from_email: "noreply@portfolio.com",
          subject: emailSubject,
          message: emailBody,
          reply_to: email,
        }),
      })

      if (!emailResponse.ok) {
        throw new Error("Email service failed")
      }

      const successMessage = dbSuccess
        ? "Message sent successfully! Stored in database and email notification sent."
        : "Message sent successfully! Email notification sent. (Database storage unavailable - please run the SQL script to enable database storage.)"

      return NextResponse.json(
        {
          message: successMessage,
          dbStored: dbSuccess,
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("Email notification failed:", emailError)
      if (!dbSuccess) {
        return NextResponse.json(
          {
            error: "Failed to send message. Please try again or contact directly at alisharyar93@gmail.com",
            details: "Both database storage and email notification failed",
          },
          { status: 500 },
        )
      }

      return NextResponse.json(
        {
          message: "Message stored in database successfully, but email notification failed.",
          dbStored: true,
        },
        { status: 200 },
      )
    }
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
