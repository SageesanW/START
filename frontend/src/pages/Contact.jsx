import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: "Email",
      details: "hello@quantumcodeai.com",
      action: "mailto:hello@quantumcodeai.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: "Location",
      details: "San Francisco, CA",
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-thin text-white mb-6">
              Contact
              <span className="text-purple-400"> Us</span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI and cutting-edge technology? 
              Let's discuss your project and explore the possibilities together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">
                    Get In Touch
                  </CardTitle>
                  <p className="text-gray-300">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 transition-colors duration-300"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-white">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-400 transition-colors duration-300 resize-none"
                        placeholder="Tell us about your project, requirements, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Whether you're looking to implement AI solutions, develop custom software, 
                  or explore machine learning opportunities, our team is here to help. 
                  We pride ourselves on understanding your unique challenges and delivering 
                  solutions that exceed expectations.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-gray-900/50 border-gray-800 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-white mb-1">
                            {info.title}
                          </h3>
                          {info.action.startsWith('#') ? (
                            <p className="text-gray-300 text-sm">
                              {info.details}
                            </p>
                          ) : (
                            <a 
                              href={info.action}
                              className="text-gray-300 text-sm hover:text-purple-400 transition-colors duration-300"
                            >
                              {info.details}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github className="w-6 h-6" />, href: "#", label: "GitHub" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
                    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-400/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-purple-400" />
                    <div>
                      <h3 className="font-medium text-white">Quick Response</h3>
                      <p className="text-gray-300 text-sm">
                        We typically respond to inquiries within 2-4 hours during business hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;