import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Brain, 
  Cpu, 
  Code, 
  Globe, 
  ArrowRight,
  Zap,
  Eye,
  BarChart3,
  Network,
  Database,
  Cloud,
  Smartphone,
  Palette
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      title: "AI Development",
      description: "Custom AI solutions designed to revolutionize your business processes and unlock new growth opportunities.",
      features: [
        {
          icon: <Cpu className="w-5 h-5" />,
          title: "Custom AI Model Development",
          description: "Tailored algorithms built for your unique requirements."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Natural Language Processing (NLP)",
          description: "Intelligent systems that understand and respond in human language."
        },
        {
          icon: <Eye className="w-5 h-5" />,
          title: "Computer Vision Solutions",
          description: "Image and video analysis for automation and insights."
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Predictive Analytics",
          description: "Forecast trends and outcomes to make smarter decisions."
        }
      ]
    },
    {
      icon: <Network className="w-12 h-12 text-purple-400" />,
      title: "Machine Learning",
      description: "Adaptive ML models that learn from your data, delivering continuous improvement over time.",
      features: [
        {
          icon: <Brain className="w-5 h-5" />,
          title: "Deep Learning Models",
          description: "Advanced neural networks for complex problem‑solving."
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Pattern Recognition",
          description: "Identify trends and anomalies in massive datasets."
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Data Mining & Analysis",
          description: "Extract actionable insights from raw data."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Automated Decision Systems",
          description: "AI‑driven automation for faster, smarter operations."
        }
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-purple-400" />,
      title: "Software Development",
      description: "Powerful, scalable, and reliable software solutions built for performance and growth.",
      features: [
        {
          icon: <Code className="w-5 h-5" />,
          title: "Custom Software Development",
          description: "Bespoke applications to meet your business objectives."
        },
        {
          icon: <Network className="w-5 h-5" />,
          title: "API Development & Integration",
          description: "Seamless connections between your systems and third‑party services."
        },
        {
          icon: <Cloud className="w-5 h-5" />,
          title: "Cloud‑Native Solutions",
          description: "Future‑proof, scalable apps optimized for cloud environments."
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Enterprise Applications",
          description: "Secure and robust systems for large‑scale operations."
        }
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-400" />,
      title: "Web Development",
      description: "Modern, responsive web applications crafted for speed, functionality, and beauty.",
      features: [
        {
          icon: <Smartphone className="w-5 h-5" />,
          title: "Progressive Web Apps (PWAs)",
          description: "App‑like experiences directly in the browser."
        },
        {
          icon: <Code className="w-5 h-5" />,
          title: "Full‑Stack Development",
          description: "End‑to‑end solutions covering both front‑end and back‑end."
        },
        {
          icon: <Palette className="w-5 h-5" />,
          title: "UI/UX Design",
          description: "Engaging, user‑friendly interfaces that keep customers coming back."
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Performance Optimization",
          description: "Faster load times and smoother navigation for better conversions."
        }
      ]
    }
  ];

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
              Comprehensive AI, ML, and software development solutions tailored to accelerate your business growth 
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
                    
                    <div className="mt-8 flex justify-end">
                      <Button 
                        variant="outline"
                        className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business needs, challenges, and objectives through detailed consultation."
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Developing a comprehensive roadmap with technology choices and implementation timeline."
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution using agile methodology with regular updates and feedback loops."
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launching your solution with comprehensive testing, monitoring, and ongoing support."
              }
            ].map((process, index) => (
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss your project requirements and explore how our services can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;