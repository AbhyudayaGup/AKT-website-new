import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users2, Mic, Drama } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Drama,
      title: "Theatre Workshops",
      description: "Comprehensive acting and storytelling sessions that build confidence and self-expression.",
      features: ["Acting fundamentals", "Character development", "Stage presence", "Emotional expression"],
      duration: "2-3 hours per session"
    },
    {
      icon: Mic,
      title: "Storytelling Sessions",
      description: "Interactive storytelling workshops that enhance communication and creativity.",
      features: ["Narrative skills", "Voice modulation", "Creative writing", "Public speaking"],
      duration: "1.5-2 hours per session"
    },
    {
      icon: Users2,
      title: "Group Activities",
      description: "Collaborative exercises that foster teamwork and social skills development.",
      features: ["Team building", "Improvisation", "Group dynamics", "Leadership skills"],
      duration: "2-4 hours per session"
    },
    {
      icon: Sparkles,
      title: "Creative Expression",
      description: "Open-ended creative sessions where children explore their artistic talents freely.",
      features: ["Art therapy", "Music integration", "Dance movement", "Personal projects"],
      duration: "1-3 hours per session"
    }
  ];

  return (
    <section id="programs" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="hero-text">Our Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Carefully designed workshops that nurture creativity, build confidence, 
            and unlock the potential within every child.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <program.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl font-heading text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What We Cover:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <strong>Duration:</strong> {program.duration}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-8 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-foreground">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join us in our mission to empower underprivileged children through the transformative power of theatre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
              Host a Workshop
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;