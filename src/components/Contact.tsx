import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, MapPin, Clock, Users } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
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
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Your first name" className="bg-input border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" className="bg-input border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="bg-input border-border" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone (Optional)</label>
                <Input type="tel" placeholder="+91 12345 67890" className="bg-input border-border" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input placeholder="Workshop inquiry, partnership, etc." className="bg-input border-border" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your community, organization, or how we can help..."
                  className="bg-input border-border min-h-[120px]"
                />
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;