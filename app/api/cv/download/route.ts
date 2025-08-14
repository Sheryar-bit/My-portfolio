import { NextResponse } from "next/server"

export async function GET() {
  try {
    // CV content formatted for download
    const cvContent = `MUHAMMAD SHERYAR
================

CONTACT INFORMATION
Phone: +923332733901
E-mail: alisharyar93@gmail.com
LinkedIn: https://www.linkedin.com/in/sheryar-ali-53349a219
GitHub: https://github.com/Sheryar-bit

ACADEMIC QUALIFICATION
======================
2022-2026    BS Computer Science    DHA Suffa University
2019-2021    HSSC I/II             Rockford Cambridge School

SKILLS
======
Development: JavaScript, Node JS, Express JS, Nginx(Familiar), WebSocket, RESTful APIs, GraphQL
Framework: NestJS (Familiar and Learning)
Database: MongoDB, PostgreSQL, Prisma (ORM), Redis Caching, NeonDB
Languages: Java (Familiar), C (Familiar), JavaScript (Familiar)
Tools: Git, GitHub, Docker(Familiar), Figma (Familiar)
Soft Skills: Time Management, Team Player, Public Speaking, Quick Learner

PROJECTS
========

1. Full Stack Live Location Tracker Web App
   Repository: Live-Location-Tracker
   
   The Live Location Tracking System is a full stack real-time application that allows users to share their live
   location and admins to view the locations of all users on a map, with separate roles for Admin and User, enabling
   dynamic tracking on an interactive map. Built with React, Node.js, Express, Socket.IO, and MongoDB, this system
   is designed for simplicity and scalability.
   
   Key Features:
   • Real-time GPS location tracking
   • Interactive map visualization with custom markers and tooltips
   • Role-based access control (admin/user interfaces)
   • Secure JWT authentication and authorization
   • Dark/light theme support with system preference detection
   • Comprehensive user management dashboard for administrators
   • Mobile-responsive design optimized for all devices
   • User location history with timeline visualization and secure data storage with encryption
   • Real-time status indicators and connection monitoring

2. Highly Scalable Backend for Inventory Tracking System
   Repository: Inventory-Tracking-System
   
   Developed a highly scalable Inventory Tracking System starting from a single kiryana store and evolving into a
   multi-store, multi-supplier platform with built-in audit capabilities. This system is designed for high performance,
   scalability, and reliability to support high-volume retail operations. Built with NodeJS, Prisma, PostgreSQL,
   Redis Caching, BullMQ.
   
   Key Features:
   • Built CRUD operations for products/stores with real-time stock visibility
   • Implemented JWT authentication + rate limiting for secure API access
   • Designed audit logging system with BullMQ queues for async processing
   • Developed low-stock alerts triggering at 10% inventory threshold
   • Optimized performance: Redis caching (60% faster reads) + PostgreSQL ACID compliance
   • Dockerized for scalable deployment (20% throughput improvement)

EXTRACURRICULAR ACTIVITIES
==========================
1. Core Team Member, Google Developers Group On Campus DHA Suffa University
2. Participated in Google Solution Challenge 2025 and worked on an App called PainPals`

    // Return as a downloadable text file with proper headers
    const response = new NextResponse(cvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "Content-Disposition": 'attachment; filename="Muhammad_Sheryar_CV.txt"',
        "Cache-Control": "no-cache",
      },
    })

    return response
  } catch (error) {
    console.error("Error generating CV:", error)
    return NextResponse.json({ error: "Failed to generate CV" }, { status: 500 })
  }
}
