import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Anshika Bindal",
      role: "Founding Director",
      bio: "Anshika is a passionate 11th grader who founded Aakash Ke Taare. She loves storytelling and performance, both on stage and screen, who seeks to inspire change through this project.",
      email: "bindalanshika10@gmail.com",
      phone: "+91 99900 59050",
      image: "AB"
    },
    {
      name: "Saarang Kabra",
      role: "Workshop Director",
      bio: "Saarang brings fun and positivity to every meeting while creating unique activities. His passion for theatre shines through his contributions to the team.",
      email: "kabrasaarang@gmail.com",
      phone: "+91 89205 34150",
      image: "SK"
    },
    {
      name: "Keya A Chaudhuri",
      role: "Media Relations Manager",
      bio: "Keya manages our communications and outreach efforts, ensuring our message reaches the communities that need us most.",
      email: "keya@aakashketaare.org",
      phone: "+91 98765 43210",
      image: "KC"
    },
    {
      name: "Arjun Sharma",
      role: "Creative Director",
      bio: "Arjun leads our creative vision and workshop design, bringing innovative approaches to theatre education.",
      email: "arjun@aakashketaare.org",
      phone: "+91 87654 32109",
      image: "AS"
    },
    {
      name: "Priya Mehta",
      role: "Community Outreach Coordinator",
      bio: "Priya builds relationships with local communities and ensures our programs reach those who need them most.",
      email: "priya@aakashketaare.org",
      phone: "+91 76543 21098",
      image: "PM"
    },
    {
      name: "Rohit Gupta",
      role: "Technical Coordinator",
      bio: "Rohit handles all technical aspects of our workshops and manages our digital presence and resources.",
      email: "rohit@aakashketaare.org",
      phone: "+91 65432 10987",
      image: "RG"
    },
    {
      name: "Sneha Patel",
      role: "Program Coordinator",
      bio: "Sneha organizes and coordinates all our workshops, ensuring smooth operations and positive outcomes for participants.",
      email: "sneha@aakashketaare.org",
      phone: "+91 54321 09876",
      image: "SP"
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="hero-text">Meet Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate group of dedicated individuals working together to light up the sky 
            through the transformative power of theatre.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-center leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">{member.email}</p>
                    <p className="text-sm text-muted-foreground">{member.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-foreground">
              Want to Join Our Mission?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for passionate individuals who want to make a difference in children's lives through theatre.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;