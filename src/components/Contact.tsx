import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, MapPin, Clock, Users } from "lucide-react";
import contactBg from "@/assets/contact.jpg";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 99900 59050",
    },
    {
      icon: Mail,
      title: "Email",
      content: "bindalanshika10@gmail.com",
    },  
    {
      icon: Instagram,
      title: "Instagram",
      content: "@aakash_ke_taare",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "NCR, India",
    }
  ];

  return (
    <section id="contact" className="pt-16 pb-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/85" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring theatre workshops to your community? Have questions about our services? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 text-foreground">
              Let's Start a Conversation!
            </h3>
            
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center glass-card p-4 rounded-lg">
                <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-lg font-bold hero-text">50+</div>
                <div className="text-xs text-muted-foreground">Hours Taught</div>
              </div>
              <div className="text-center glass-card p-4 rounded-lg">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-lg font-bold hero-text">160+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
              <div className="text-center glass-card p-4 rounded-lg">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-lg font-bold hero-text">5+</div>
                <div className="text-xs text-muted-foreground">Communities</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      className="bg-input border-border" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                      className="bg-input border-border" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="bg-input border-border" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone (Optional)</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 12345 67890" 
                    className="bg-input border-border" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Workshop inquiry, partnership, etc." 
                    className="bg-input border-border" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your community, organization, or how we can help..."
                    className="bg-input border-border min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                
                {submitMessage && (
                  <p className={`text-sm text-center ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;