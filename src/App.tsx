"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronRight,
  Code2,
  Globe,
  Palette,
  Star,
  Award,
  BookOpen,
  Coffee,
  Download,
} from "lucide-react"

function App() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number }>>([])
  const particlesRef = useRef<HTMLDivElement>(null)

  // Add this near the top of the component with other useEffect hooks
  useEffect(() => {
    document.title = "Yassin Salah | Portfolio"
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalScroll) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Particle animation
  useEffect(() => {
    const particleCount = 50
    const initialParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))
    setParticles(initialParticles)

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let { x, y, vx, vy } = particle
          x += vx
          y += vy

          if (x < 0 || x > window.innerWidth) vx = -vx
          if (y < 0 || y > window.innerHeight) vy = -vy

          return { x, y, vx, vy }
        }),
      )
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  // Update the projects array with new images and content
  const projects = [
    {
      title: "Split Stores",
      description: "Modern fashion e-commerce platform with seamless shopping experience",
      link: "https://splitstores.com",
      tags: ["Next.js", "E-commerce", "Fashion", "Stripe"],
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 165, forks: 48 },
      highlights: [
        "Streamlined checkout process",
        "Advanced filtering system",
        "Wishlist functionality",
        "Collection management",
      ],
    },
    {
      title: "Energy Supplements Egypt",
      description: "Premium supplements & fitness e-commerce platform with advanced features",
      link: "https://www.energysupplements-eg.com",
      tags: ["Next.js", "E-commerce", "Payment Integration", "Loyalty System"],
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 178, forks: 45 },
      highlights: [
        "Advanced loyalty points system",
        "Multi-payment gateway integration",
        "Real-time inventory management",
        "Branch locator system",
      ],
    },
    {
      title: "Kairox Collective",
      description: "Premium streetwear and fashion brand with immersive shopping experience",
      link: "https://kairox-collective.com",
      tags: ["React", "Next.js", "Framer Motion", "CMS"],
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 145, forks: 38 },
      highlights: [
        "Dynamic collection showcase",
        "Virtual try-on system",
        "Exclusive drops platform",
        "Member rewards program",
      ],
    },
    {
      title: "Rollce Store",
      description: "Luxury perfume boutique with premium fragrance experience",
      link: "https://rollcestore.com/",
      tags: ["Next.js", "React", "E-commerce"],
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 128, forks: 34 },
      highlights: [
        "Virtual fragrance exploration",
        "Scent profile matching",
        "Scent profile matching",
        "Premium packaging system",
        "VIP customer portal",
      ],
    },
    {
      title: "Muscles Factory Egypt",
      description: "Premium fitness & supplements e-commerce platform with bilingual support",
      link: "https://musclesfactory-eg.com",
      tags: ["Next.js", "RTL Support", "E-commerce", "Dark Theme"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 156, forks: 42 },
      highlights: [
        "Bilingual (Arabic/English) interface",
        "Advanced product filtering",
        "Real-time inventory management",
      ],
    },
    {
      title: "The Ra Cake Cairo",
      description: "Gourmet bakery website showcasing delectable treats",
      link: "https://theracakecairo.com",
      tags: ["React", "Gatsby", "Styled Components"],
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 95, forks: 28 },
      highlights: ["Online ordering system", "Custom cake designer", "Event booking platform"],
    },
    {
      title: "Gorilla Outfit",
      description: "Streetwear fashion e-commerce with urban aesthetics",
      link: "https://gorillaoutfit.com/",
      tags: ["Shopify", "Liquid", "JavaScript"],
      image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&fit=crop&q=80",
      status: "active",
      stats: { stars: 112, forks: 41 },
      highlights: ["Size recommendation AI", "Virtual try-on feature", "Social shopping integration"],
    },
  ]

  // Update the skills array with more advanced categorization
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      name: "Frontend Architecture",
      items: [
        "React/Next.js Optimization",
        "State Management (Redux/Context)",
        "GraphQL Integration",
        "Micro-Frontend Architecture",
        "Performance Optimization",
        "Advanced Animation Systems",
      ],
      proficiency: 95,
      certifications: ["React Advanced Patterns", "Next.js Enterprise"],
      specializations: ["SSR/SSG", "Progressive Web Apps", "Micro-frontends"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Backend Systems",
      items: [
        "Node.js/Express Architecture",
        "Database Design (SQL/NoSQL)",
        "API Gateway Implementation",
        "Microservices Design",
        "Real-time Systems",
        "Cache Optimization",
      ],
      proficiency: 85,
      certifications: ["System Design", "Database Architecture"],
      specializations: ["Distributed Systems", "Message Queues", "Caching Strategies"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      name: "Creative Development",
      items: [
        "Design System Architecture",
        "Motion Design Integration",
        "3D Web Experiences",
        "Interactive Prototypes",
        "Accessibility Design",
        "Visual Effects",
      ],
      proficiency: 90,
      certifications: ["UI/UX Advanced", "Creative Development"],
      specializations: ["WebGL", "Canvas Animation", "SVG Animation"],
    },
  ]

  const achievements = [
    { icon: <Star className="w-6 h-6" />, title: "10+ Years Experience", description: "In software development" },
    { icon: <Award className="w-6 h-6" />, title: "50+ Projects", description: "Delivered successfully" },
    { icon: <BookOpen className="w-6 h-6" />, title: "15+ Technologies", description: "Mastered and implemented" },
    { icon: <Coffee className="w-6 h-6" />, title: "24/7 Dedication", description: "To continuous learning" },
  ]

  // Update the timeline with university education and fix duplicate entry
  const timeline = [
    {
      period: "2022 - Present",
      role: "Computer Science and Data Informatics",
      company: "Alexandria University",
      description: "Pursuing degree in Computer Science with focus on modern software development",
      achievements: [
        "Studying advanced algorithms and data structures",
        "Participating in software development projects",
        "Learning modern development practices",
        "Exploring data science and AI applications",
      ],
      technologies: ["Python", "Java", "Data Structures", "Algorithms"],
      type: "learning",
    },
    {
      period: "2022",
      role: "Full Stack Web Development",
      company: "Udacity",
      description: "Foundation in full-stack development principles and practices",
      achievements: [
        "Completed comprehensive web development nanodegree",
        "Developed multiple portfolio projects",
        "Learned modern JavaScript and React fundamentals",
        "Mastered responsive design principles",
      ],
      technologies: ["JavaScript", "React", "CSS", "HTML"],
      type: "learning",
    },
    {
      period: "2023",
      role: "Advanced Frontend Development",
      company: "Udemy",
      description: "Intensive specialization in modern frontend technologies",
      achievements: [
        "Mastered React Advanced Patterns and Hooks",
        "Completed Node.js Advanced Architecture",
        "Built full-stack applications with MERN stack",
        "Earned expert-level certifications",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      type: "learning",
    },
    {
      period: "2024",
      role: "Junior Frontend Developer",
      company: "Crossover",
      description: "Contributed to frontend development and learned from senior team members",
      achievements: [
        "Developed responsive UI components",
        "Improved website accessibility",
        "Collaborated on feature implementations",
        "Participated in code reviews",
      ],
      technologies: ["React", "JavaScript", "CSS"],
      type: "work",
    },
    {
      period: "2024 - Present",
      role: "Mid-level Frontend Developer",
      company: "Crossover",
      description: "Leading frontend development initiatives and mentoring junior developers",
      achievements: [
        "Reduced application load time by 40%",
        "Implemented CI/CD pipeline",
        "Led team of 5 frontend developers",
        "Architected new frontend systems",
      ],
      technologies: ["React", "TypeScript", "Next.js"],
      type: "work",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Particles */}
      <div ref={particlesRef} className="particles">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-25%20at%2000.01.48-Lv4c74s1uPZFlnl9D153VU6rLQJNEk.jpeg"
                  alt="Your Photo"
                  className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="text-center md:text-left slide-in-right">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                  Yassin Salah
                </h1>
                <p className="text-2xl text-gray-300">Full Stack Developer & UI/UX Designer</p>
                <p className="text-lg text-gray-400 max-w-2xl">
                  Crafting digital experiences with passion and precision. Specialized in building scalable web
                  applications and creating intuitive user interfaces.
                </p>
                <div className="flex gap-6 justify-center md:justify-start mt-8">
                  <a
                    href="https://github.com/YassinSalah100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yassin-salah-43b9562a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:yassinsalah.x@gmail.com?subject=Let's%20Connect&body=Hi%20Yassin,%0D%0A%0D%0AI'd%20like%20to%20connect%20regarding..."
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? "bg-white/10 text-white scale-110 shadow-lg shadow-purple-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Professional Journey Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
            Professional Journey
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Animated Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
                <div className="h-full w-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 blur-sm opacity-50"></div>
              </div>

              <div className="space-y-24">
                {timeline.map((item, index) => (
                  <div key={index} className="relative group mt-24">
                    <div className="flex items-center justify-center mb-8">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                            {item.type === "learning" ? (
                              <BookOpen className="w-6 h-6 text-purple-400" />
                            ) : (
                              <Code2 className="w-6 h-6 text-purple-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="text-right md:pr-12 animate-on-scroll">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full pl-4 pr-6 py-2 mb-4">
                          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                          <span className="text-sm text-purple-300">
                            {item.type === "learning" ? "Learning" : "Work Experience"}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                          {item.role}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2">{item.company}</p>
                        <p className="text-sm text-gray-400 mb-4">{item.period}</p>
                        <div className="flex flex-wrap gap-2 justify-end">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div
                        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm
                                border border-white/10 hover:border-white/20 transition-all duration-500
                                transform hover:scale-105 hover:shadow-xl animate-on-scroll group/card"
                      >
                        <div className="space-y-6">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-4 group/item">
                              <div className="p-2 bg-purple-500/10 rounded-lg group-hover/item:bg-purple-500/20 transition-colors">
                                <ChevronRight className="w-6 h-6 text-purple-400" />
                              </div>
                              <div className="space-y-2">
                                <p className="text-gray-400">{achievement}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 opacity-0 group-hover/card:opacity-100 transition-all duration-500">
                          <h5 className="font-semibold text-sm text-purple-300 mb-2">Overview</h5>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6
                    border border-white/10 hover:border-white/20 transition-all duration-300
                    transform hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/10 rounded-lg mr-4 group-hover:animate-spin-slow">{skill.icon}</div>
                  <h3 className="text-2xl font-semibold">{skill.name}</h3>
                </div>
                <div className="mb-6 relative">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                  <span className="absolute right-0 top-4 text-sm text-gray-400">{skill.proficiency}% Proficiency</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <ChevronRight className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Certifications & Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {[...skill.certifications, ...skill.specializations].map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-white/5 rounded-full border border-white/10
                            hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900/0"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient">
            Active Projects
          </h2>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
              All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden
                border border-white/10 hover:border-white/20 transition-all duration-500
                transform hover:scale-[1.02] hover:shadow-2xl animate-on-scroll cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/95"></div>
                <div className="relative p-6">
                  {project.status === "active" && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm text-green-400">Active Project</span>
                    </div>
                  )}
                  <h3
                    className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text 
                      group-hover:bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300"
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  {/* Project Highlights */}
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 
                         py-1 bg-white/5 rounded-full text-sm border border-white/10
                        hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {project.stats.stars}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none">
                          <path d="M7 3V12H3L12 21L21 12H17V3H7Z" fill="currentColor" />
                        </svg>
                        {project.stats.forks}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-purple-400" />
                      <span className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition-colors transform group-hover:translate-x-2">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800/30 to-gray-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-on-scroll">
            I'm always excited to connect with fellow developers, potential clients, and anyone passionate about
            technology. Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <a
              href="mailto:yassinsalah.x@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Yassin,%0D%0A%0D%0AI'm%20interested%20in%20discussing..."
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full
                        font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300
                        transform hover:scale-105 hover:shadow-lg group"
            >
              Get In Touch
              <Mail className="w-5 h-5 ml-2 transform transition-transform group-hover:rotate-12" />
            </a>
            <a
              href="https://drive.google.com/drive/u/2/folders/1BW8tSX8xtrYXyjiZngUiTnbEu1HFcySv?q=sharedwith:public%20parent:1BW8tSX8xtrYXyjiZngUiTnbEu1HFcySv%20type:pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 rounded-full
                        font-semibold hover:bg-white/20 transition-all duration-300
                        transform hover:scale-105 group"
            >
              Download Resume
              <Download className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
