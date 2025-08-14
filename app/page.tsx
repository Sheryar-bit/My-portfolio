"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Play,
  Award,
  BookOpen,
  MapPin,
  Database,
  Globe,
  Users,
  Phone,
} from "lucide-react"
import Image from "next/image"
import { Chatbot } from "@/components/chatbot"
import { Navigation } from "@/components/navigation"
import { FeedbackForm } from "@/components/feedback-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20">
                  Available for opportunities
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Backend Developer &<span className="text-primary"> Passionate About AI/ML </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate about building scalable and innovative solutions with modern web technologies and
                  artificial intelligence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1IsW7qPt--xgHm89A3kEiOHDG1H2Fs2Cu",
                      "_blank",
                    )
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sheryar-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Github className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sheryar-ali-53349a219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="mailto:alisharyar93@gmail.com"
                  className="p-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Mail className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile.png"
                    alt="Sheryar Ali - Full Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-sm font-medium">Google Developer Group DSU</div>
                  <div className="text-xs opacity-90">Core Team Member</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer exploring and learning backend development and AI/ML
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a dedicated Backend developer and AI enthusiast currently pursuing my BS in Computer Science at
                  DHA Suffa University. My passion lies in creating scalable and innovative solutions that bridge the
                  gap between cutting-edge technology and real-world applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a core team member of Google Developer Group On Campus at DHA Suffa University, I actively
                  contribute to the developer community and stay at the forefront of emerging technologies. My
                  participation in the Google Solution Challenge demonstrates my commitment to using technology for
                  positive social impact.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">What I Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Full-stack web development with Next.js, React, and Node.js</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Backend development with Express.js, NestJS, and database management both SQL/NoSQL</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>AI/ML solutions using Hugging Face Transformers and Python</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Community building and developer advocacy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">ReactJS</Badge>
                        <Badge variant="secondary">NodeJS</Badge>
                        <Badge variant="secondary">ExpressJS</Badge>
                        <Badge variant="secondary">NestJS</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Database & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">PostgreSQL</Badge>
                        <Badge variant="secondary">Prisma ORM</Badge>
                        <Badge variant="secondary">Redis</Badge>
                        <Badge variant="secondary">Supabase</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Others Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Git</Badge>
                        <Badge variant="secondary">Postman</Badge>
                        <Badge variant="secondary">NginX</Badge>
                        <Badge variant="secondary">Docker</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Education & Community</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-foreground">DHA Suffa University</div>
                        <div className="text-sm text-muted-foreground">BS Computer Science (2022-2026)</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="font-medium text-foreground">Google Developer Group</div>
                        <div className="text-sm text-muted-foreground">Core Team Member</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in full-stack development, AI/ML, and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-green-500 hover:bg-green-600">Full Stack</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Live Location Tracker</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Real-time location tracking system with role-based access control. Features interactive maps, JWT
                  authentication, and comprehensive user management dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Socket.IO</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href="https://github.com/Sheryar-bit/Live-Location-Tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-500 hover:bg-blue-600">Scalable</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Inventory Tracking System</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Highly scalable backend system for multi-store inventory management with Redis caching, audit logging,
                  and real-time stock alerts. 60% performance improvement with caching.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href="https://github.com/Sheryar-bit/Inventory-Tracking-System"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div
                  className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4 relative overflow-hidden cursor-pointer"
                  onClick={() => window.open("https://youtu.be/EeYeeCv_dgA?si=cQd6lPsqZXYYYVrl", "_blank")}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-red-500 hover:bg-red-600">Watch Demo</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Google Solution Challenge 2025</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  PainPals - AI-driven solution for positive change across the APAC region. Built with modern web
                  technologies to address real-world healthcare challenges.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Healthcare</Badge>
                  <Badge variant="secondary">Social Impact</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href="https://youtu.be/EeYeeCv_dgA?si=cQd6lPsqZXYYYVrl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Sheryar-bit" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones and accomplishments in my journey as a developer and community member
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Google Solution Challenge 2025
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Image
                    src="/images/google-certificate.png"
                    alt="Google Solution Challenge Certificate"
                    width={500}
                    height={350}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Participated in the APAC Solution Challenge 2025, powered by Hack2skill. Developed PainPals, an
                  AI-driven solution focused on building positive change across the APAC region.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Social Impact</Badge>
                  <Badge variant="secondary">APAC Region</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Google Developer Group On Campus Dha Suffa University
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Core Team Member</h3>
                    <p className="text-muted-foreground mb-3">Google Developer Group On Campus DHA Suffa University</p>
                    <p className="text-sm text-muted-foreground">
                      Active contributor to the developer community, organizing events, workshops, and mentoring fellow
                      students in modern web technologies and best practices.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Contributions:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Organized technical workshops on AI/ML and web development</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Mentored students in Google technologies and best practices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Led community initiatives and developer advocacy programs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Articles & Writing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge and insights about web development, and emerging technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-orange-500 hover:bg-orange-600">Featured</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Getting Started with Hugging Face Transformers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A comprehensive guide to Hugging Face Transformers, covering pipelines, models, and practical
                  implementations. Perfect for developers starting their AI/ML journey.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Hugging Face</Badge>
                  <Badge variant="secondary">Transformers</Badge>
                  <Badge variant="secondary">Tutorial</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a
                      href="https://medium.com/@alisharyar93/getting-started-with-hugging-face-transformers-transformers-pipelines-models-made-easy-da7f6dcba467"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg opacity-75">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-blue-500 hover:bg-blue-600">Coming Soon</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Building Scalable APIs with Node.js
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Deep dive into creating high-performance, scalable backend APIs using Node.js, Express, and modern
                  database technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Scalability</Badge>
                  <Badge variant="secondary">Backend</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" disabled>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg opacity-75">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-green-500 hover:bg-green-600">Coming Soon</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  Real-time Applications with WebSockets
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Learn how to build real-time applications using WebSockets, Socket.IO, and modern frontend frameworks
                  for seamless user experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">WebSockets</Badge>
                  <Badge variant="secondary">Real-time</Badge>
                  <Badge variant="secondary">Socket.IO</Badge>
                  <Badge variant="secondary">Frontend</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" disabled>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://medium.com/@alisharyar93" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Articles on Medium
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">alisharyar93@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+923332733901</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Karachi, Pakistan</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Sheryar-bit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sheryar-ali-53349a219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:alisharyar93@gmail.com"
                    className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <FeedbackForm />
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  )
}
