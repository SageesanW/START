import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Anujan",
      role: "Founder & Software Engineer",
      expertise: ["Deep Learning", "API Design", "Database Management"],
      bio: "Crafting efficient, scalable software with a focus on problem‑solving and clean architecture.",
      image: "/images/Anujan.jpg"
    },
    {
      name: "Lithushan", 
      role: "Co-Founder & Full-Stack Developer",
      expertise: ["Machine Learning", "System Architecture", "Cloud Computing"],
      bio: "Building intelligent, scalable applications with expertise in machine learning, system architecture, and cloud computing.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Daniel",
      role: "Co-Founder & Full-Stack Developer",
      expertise: ["Full-Stack Development", "Research & Development", "Computer Vision"],
      bio: "Building seamless, user‑focused applications across front‑end and back‑end systems.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Hareesh",
      role: "CEO & Marketing Head", 
      expertise: ["AI Strategy", "Business Development", "Product Vision"],
      bio: "Growing brands through creative strategies and data‑driven marketing campaigns.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Tharveen",
      role: "CFO", 
      expertise: ["Budgeting & Financial Analysis", "Financial Strategy & Planning", "Risk Management & Compliance"],
      bio: "Driving financial clarity and strategic growth through expert analysis and planning.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Harishant",
      role: "AI/ML Engineer",
      expertise: ["Machine Learning Algorithms", "Data Engineering & Analysis", "AI System Deployment"],
      bio: "Creating intelligent systems powered by advanced machine learning and data insights.",
      image: "/images/hari.jpg"
    },
    {
      name: "Mithuran",
      role: "AI Product Manager",
      expertise: ["AI Product Strategy", "Cross‑Functional Collaboration", "Market & User Research"],
      bio: "Driving AI‑powered products from concept to launch with a user‑centric vision.",
      image: "/images/mithu.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-thin text-white mb-6">
              About <span className="text-purple-400">Us</span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              We are a team of passionate technologists dedicated to pushing the boundaries of what's possible 
              with artificial intelligence and software innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize artificial intelligence and make cutting-edge technology accessible to businesses 
                of all sizes. We believe that every organization deserves the power of AI to transform their 
                operations and unlock new possibilities.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through innovative solutions, collaborative partnerships, and a commitment to excellence, 
                we're building the future of intelligent business automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
              Meet Our <span className="text-purple-400">Team</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A diverse group of experts united by our passion for technology and commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 group w-full max-w-xs"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
                    {member.name}
                  </h3>

                  <p className="text-purple-400 font-medium mb-4">{member.role}</p>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-400 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Github className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" />
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" />
                    <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Innovation</h3>
                <p className="text-gray-300">
                  Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Excellence</h3>
                <p className="text-gray-300">
                  Maintaining the highest standards in every project, from conception to delivery and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  Working closely with clients as partners to achieve shared success and mutual growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
