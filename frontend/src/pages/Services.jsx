import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database,
  ArrowRight,
  Zap,
  Eye,
  BarChart3,
  Network,
  Brain,
  Palette
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-purple-400" />,
      title: "Custom Software Development",
      description: "Tailored software applications built from the ground up with intelligent AI features integrated seamlessly into your business workflows.",
      features: [
        {
          icon: <Code2 className="w-5 h-5" />,
          title: "Full-Stack Applications",
          description: "Complete software solutions covering frontend, backend, and database architecture."
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: "AI-Enhanced Features",
          description: "Smart automation, predictive analytics, and intelligent decision-making capabilities."
        },
        {
          icon: <Network className="w-5 h-5" />,
          title: "API Development & Integration",
          description: "Seamless connections between your systems and third‑party services."
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Enterprise-Grade Solutions",
          description: "Secure, scalable, and robust systems designed for large-scale operations."
        }
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-400" />,
      title: "Web & Mobile Development",
      description: "Modern, responsive applications crafted for optimal user experience with AI-powered functionality that engages and converts.",
      features: [
        {
          icon: <Smartphone className="w-5 h-5" />,
          title: "Progressive Web Apps (PWAs)",
          description: "App‑like experiences that work seamlessly across all devices and platforms."
        },
        {
          icon: <Palette className="w-5 h-5" />,
          title: "UI/UX Design with Intelligence",
          description: "User-friendly interfaces enhanced with AI-driven personalization and optimization."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Performance Optimization",
          description: "Lightning-fast applications optimized for speed, conversion, and user retention."
        },
        {
          icon: <Eye className="w-5 h-5" />,
          title: "Smart Analytics Integration",
          description: "Built-in intelligence to track, analyze, and improve user interactions."
        }
      ]
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-400" />,
      title: "Cloud Solutions & DevOps",
      description: "Scalable cloud infrastructure and deployment strategies that grow with your business, enhanced with AI monitoring and optimization.",
      features: [
        {
          icon: <Cloud className="w-5 h-5" />,
          title: "Cloud-Native Architecture",
          description: "Modern applications built specifically for cloud environments with auto-scaling capabilities."
        },
        {
          icon: <Network className="w-5 h-5" />,
          title: "Automated CI/CD Pipelines",
          description: "Streamlined deployment processes with intelligent testing and quality assurance."
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Intelligent Monitoring",
          description: "AI-powered monitoring and alerting systems that predict and prevent issues."
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Data Management Solutions",
          description: "Secure, scalable database solutions with AI-driven optimization and backup strategies."
        }
      ]
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      title: "AI Integration Consulting",
      description: "Strategic guidance on incorporating artificial intelligence into your existing software systems to unlock new capabilities and efficiencies.",
      features: [
        {
          icon: <Brain className="w-5 h-5" />,
          title: "AI Strategy Development",
          description: "Comprehensive planning for AI adoption aligned with your business objectives."
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Process Automation",
          description: "Intelligent automation of repetitive tasks to improve efficiency and reduce costs."
        },
        {
          icon: <Eye className="w-5 h-5" />,
          title: "Data Intelligence Solutions",
          description: "Transform your data into actionable insights with machine learning algorithms."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Performance Enhancement",
          description: "AI-driven optimization of existing systems for better performance and user experience."
        }
      ]
    }
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your business requirements, technical needs, and AI integration opportunities through comprehensive analysis."
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Creating scalable system architecture and user-centric designs that accommodate both current needs and future AI enhancements."
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Building your software solution using agile methodology while seamlessly integrating AI capabilities and conducting regular testing."
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Launching your solution with comprehensive monitoring, performance optimization, and ongoing AI model refinement and support."
    }
  ];

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-thin text-white mb-6">
              Our
              <span className="text-purple-400"> Services</span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Comprehensive software development services enhanced with AI integration to accelerate your business growth 
              and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="p-4 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <p className="text-lg text-gray-300 mt-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group/feature"
                        >
                          <div className="flex-shrink-0 p-2 bg-purple-500/10 rounded-lg group-hover/feature:bg-purple-500/20 transition-colors duration-300">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white mb-2 group-hover/feature:text-purple-400 transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A proven methodology that ensures successful software delivery with seamless AI integration from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 text-center group hover:border-purple-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss your software development needs and explore how AI integration can transform your business operations.
          </p>
          <Button 
            onClick={handleScheduleConsultation}
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;