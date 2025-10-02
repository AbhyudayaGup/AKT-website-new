import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone,} from "lucide-react";

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
      name: "Abhyudaya Gupta",
      role: "Photography Head and Website Manager",
      bio: "Meet Abhyudaya gupta who is not only the master behind the lens but also has a drive for STEM. He hosts our photography sessions and manages our website.",
      email: "abhyudaya.gupta.ag@gmail.com",
      phone: "+91 99587 72009",
      image: "AG"
    },
    {
      name: "Keya A Chaudhuri",
      role: "Media Relations Manager",
      bio: "Keya is a 11th grader passionate about connecting with others making a positive impact on her community. Her passion for artistic expressions infuses itself into her work.",
      email: "keya@aakashketaare.org",
      phone: "+91 92052 65954",
      image: "KC"
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
      name: "Saessha Passi",
      role: "Marketing Head",
      bio: "Saessha is a dedicated drama enthusiast passionate about performing arts. With talent for teaching, she actively participates in event positively impacting her community.",
      email: "saessha.passi@gmail.com",
      phone: "+91 98183 44402",
      image: "SP"
    },
    {
      name: "Aalia Nath",
      role: "Secretary of Dance",
      bio: "Aalia brings her passion and expertise in dance to the team, using movement as a form of storytelling and expression. She inspires creativity and energy wherever she goes.",
      email: "aalianath31@gmail.com",
      phone: "+91 70429 70422",
      image: "AN"
    },
    {
      name: "Aryash Vaisoha",
      role: "Head of Rhythmic Arts",
      bio: "Aryash is a passionate and confident drummer, a enthusiast of performing arts, who loves to aspire young minds and take them to the next level step by step.",
      email: "aryashvaisoha@gmail.com",
      phone: "+91 98710 02663",
      image: "AV"
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