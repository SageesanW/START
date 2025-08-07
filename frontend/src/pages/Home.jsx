import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';
import { ArrowRight, Code, Target, Users, Lightbulb } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const navigate = useNavigate();

  const whyChooseUsItems = [
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Innovative Software Solutions",
      description: "We craft intelligent software applications that integrate AI capabilities to solve complex business challenges and drive innovation."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "End-to-End Development", 
      description: "From concept to deployment, our comprehensive approach covers the full software development lifecycle with seamless AI integration and measurable results."
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Future-Ready Applications",
      description: "We build scalable software solutions enhanced with AI features, ensuring your applications stay competitive and adaptable to emerging technologies."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Client-Centric Partnership",
      description: "Your success is our priority. We collaborate closely to understand your requirements, delivering custom software solutions that align with your business goals."
    }
  ];

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <BackgroundVideo videoUrl="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-the-earth-turning-27572-large.mp4" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 tracking-tight leading-tight">
            Software Development
            <span className="block text-purple-400 font-light">with AI Integration</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building intelligent software solutions that combine traditional development expertise 
            with cutting-edge AI capabilities to transform your business operations.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleScheduleConsultation}
              size="lg" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started 
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
              Why Choose
              <span className="text-purple-400"> Us</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We combine software development expertise with AI innovation to deliver solutions that drive real business value and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <Card 
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-thin text-white mb-6">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            Let's discuss how our software development expertise combined with AI integration can accelerate your business growth.
          </p>
          <Button 
            onClick={handleScheduleConsultation}
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 text-white px-12 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;