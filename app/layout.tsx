import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sheryar Ali - Backend Developer & AI Enthusiast",
  description: "Professional portfolio of Sheryar Ali - Backend Developer, LLM and AI integration",
  keywords: [
    "Sheryar Ali",
    "Backend Developer",
    "AI Integrations",
    "Machine Learning",
    "NestJS",
    "NodeJS",
    "Portfolio",
  ],
  authors: [{ name: "Sheryar Ali" }],
  openGraph: {
    title: "Sheryar Ali - Backend Developer & AI Enthusiast",
    description: "Professional portfolio showcasing projects in AI/ML, web development, and software engineering",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
