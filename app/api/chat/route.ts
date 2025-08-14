import { type NextRequest, NextResponse } from "next/server"
//hardCoded
const knowledgeBase = {
  personal: {
    name: "Sheryar Ali",
    role: "Full Stack Developer & AI Enthusiast",
    location: "Karachi, Pakistan",
    email: "alisharyar93@gmail.com",
    university: "DHA Suffa University",
    field: "Computer Science",
  },
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    backend: ["Node.js", "Python", "API Development", "Database Design"],
    ai: ["Hugging Face Transformers", "Machine Learning", "NLP", "AI Integration"],
    tools: ["Git", "GitHub", "VS Code", "Docker"],
  },
  experience: {
    gdg: "Core team member of Google Developer Group On Campus at DHA Suffa University",
    challenge: "Participated in Google Solution Challenge 2025 (APAC region)",
    writing: "Technical writer on Medium, focusing on AI/ML and web development",
    community: "Active in organizing tech events, workshops, and mentoring developers",
  },
  projects: {
    solutionChallenge: {
      name: "Google Solution Challenge 2025 Project",
      description: "AI-driven solution for positive change across the APAC region",
      technologies: ["AI/ML", "Next.js", "Python"],
      link: "https://youtu.be/EeYeeCv_dgA?si=cQd6lPsqZXYYYVrl",
    },
    chatbot: {
      name: "Intelligent Customer Support Bot",
      description: "Advanced chatbot using Hugging Face Transformers for natural language understanding",
      technologies: ["Hugging Face", "NLP", "React", "Node.js"],
    },
    ecommerce: {
      name: "Modern E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory and payment processing",
      technologies: ["Next.js", "TypeScript", "Stripe", "Database"],
    },
  },
  articles: {
    huggingFace: {
      title: "Getting Started with Hugging Face Transformers: Transformers, Pipelines, Models Made Easy",
      platform: "Medium",
      link: "https://medium.com/@alisharyar93/getting-started-with-hugging-face-transformers-transformers-pipelines-models-made-easy-da7f6dcba467",
      description: "Comprehensive guide to understanding and implementing Hugging Face Transformers for NLP tasks",
    },
  },
}

function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! I'm here to help you learn more about Sheryar Ali. You can ask me about his projects, skills, experience, or anything else you'd like to know!"
  }

  if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack")) {
    return `Sheryar has expertise in several areas:

**Frontend:** ${knowledgeBase.skills.frontend.join(", ")}
**Backend:** ${knowledgeBase.skills.backend.join(", ")}
**AI/ML:** ${knowledgeBase.skills.ai.join(", ")}

He's particularly passionate about combining modern web technologies with AI to create innovative solutions. Would you like to know more about any specific technology?`
  }

  if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
    return `Sheryar has worked on several exciting projects:

**Google Solution Challenge 2025:** ${knowledgeBase.projects.solutionChallenge.description}

**AI Chatbot:** ${knowledgeBase.projects.chatbot.description}

**E-commerce Platform:** ${knowledgeBase.projects.ecommerce.description}

You can watch his Solution Challenge project demo at: ${knowledgeBase.projects.solutionChallenge.link}

Would you like to know more about any specific project?`
  }

  if (lowerMessage.includes("experience") || lowerMessage.includes("background") || lowerMessage.includes("about")) {
    return `Sheryar Ali is a ${knowledgeBase.personal.role} based in ${knowledgeBase.personal.location}. Here's his background:

**Education:** ${knowledgeBase.personal.field} student at ${knowledgeBase.personal.university}

 **Community:** ${knowledgeBase.experience.gdg}

**Achievement:** ${knowledgeBase.experience.challenge}

**Writing:** ${knowledgeBase.experience.writing}

He's passionate about using technology to solve real-world problems and actively contributes to the developer community.`
  }

  if (lowerMessage.includes("gdg") || lowerMessage.includes("google developer") || lowerMessage.includes("community")) {
    return `Sheryar is a core team member of Google Developer Group On Campus at DHA Suffa University. In this role, he:

• Organizes technical workshops and hackathons
• Mentors fellow developers in modern technologies
• Builds connections within the developer ecosystem
• Promotes Google technologies and best practices

The GDG community is focused on fostering innovation and helping developers grow their skills in cutting-edge technologies.`
  }

  if (
    lowerMessage.includes("ai") ||
    lowerMessage.includes("machine learning") ||
    lowerMessage.includes("hugging face") ||
    lowerMessage.includes("ml")
  ) {
    return `Sheryar has strong expertise in AI and Machine Learning:

**Specializations:** ${knowledgeBase.skills.ai.join(", ")}

**Published Article:** "${knowledgeBase.articles.huggingFace.title}" - A comprehensive guide to implementing Hugging Face Transformers for NLP tasks.

 **Projects:** He's built intelligent chatbots and integrated AI capabilities into web applications.

You can read his detailed article about Hugging Face Transformers on Medium: ${knowledgeBase.articles.huggingFace.link}`
  }

  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("hire")
  ) {
    return `You can reach Sheryar through several channels:

 **Email:** ${knowledgeBase.personal.email}
 **LinkedIn:** https://www.linkedin.com/in/sheryar-ali-53349a219
 **GitHub:** https://github.com/Sheryar-bit
 **Medium:** https://medium.com/@alisharyar93

He typically responds within 24 hours and is always excited to discuss new opportunities, collaborate on projects, or chat about the latest in web development and AI!`
  }

  if (
    lowerMessage.includes("article") ||
    lowerMessage.includes("writing") ||
    lowerMessage.includes("blog") ||
    lowerMessage.includes("medium")
  ) {
    return `Sheryar is an active technical writer who shares knowledge about AI/ML and web development:

**Featured Article:** "${knowledgeBase.articles.huggingFace.title}"

This comprehensive guide covers:
• Understanding Hugging Face Transformers
• Creating custom pipelines
• Integrating AI capabilities into applications
• Practical implementation examples

Read it here: ${knowledgeBase.articles.huggingFace.link}

He's also working on upcoming articles about Next.js scalability and AI integration in modern web apps.`
  }

  return `I'd be happy to help you learn more about Sheryar! You can ask me about:

• His technical skills and expertise
• Projects he's worked on
• His experience with Google Developer Group
• AI and Machine Learning work
• How to contact him
• His articles and writing

What would you like to know more about?`
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const response = generateResponse(message)

    return NextResponse.json({ response }, { status: 200 })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "I'm experiencing some technical difficulties. Please try again later." },
      { status: 500 },
    )
  }
}
