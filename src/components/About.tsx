import { Card, CardContent } from "@/components/ui/card";
import { Theater, Users, Drum, Camera} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Theater,
      title: "Theater workshops",
      description: "Transform performing arts from a hobby to a skill, building confidence through acting, storytelling, and creative expression in a safe space."
    },
    {
      icon: Users,
      title: "Dance workshops",
      description: "Empower children through the joy of dance, fostering creativity, confidence, and community connection with expressive movement."
    },
    {
      icon: Drum,
      title: "Percussion workshops",
      description: "Discover rhythm and teamwork, boosting confidence and creativity through percussion in an engaging, lifelong learning experience."
    },
    {
      icon: Camera,
      title: "Photography workshops",
      description: "Capture and celebrate creativity in performing arts, teaching children storytelling and expression through photography to showcase their talents visually."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="golden-text">About Our Mission</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            We are a passionate group of high school students dedicated to empowering 
            underprivileged youth through transformative workshops.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 warm-text">
              Lighting Up Lives Through Theatre
            </h3>
            <p className="text-lg text-white mb-6 leading-relaxed">
              In India, performing arts are often viewed as highly stigmatized and dismissed as mere hobbies. 
              Through our collective experience in the performing arts, we aim to break this harmful notion 
              and showcase the transformative power of creative expression.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Our mission is to foster creativity, confidence, and communication skills in underprivileged 
              children, helping them express themselves authentically and discover their hidden talents. 
              Together, we're building a brighter future, one workshop at a time.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold golden-text mb-2">7</div>
                <div className="text-white">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold golden-text mb-2">5+</div>
                <div className="text-white">Communities Served</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 golden-text">{value.title}</h4>
                  <p className="text-white leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <blockquote className="text-2xl md:text-3xl font-heading font-medium italic warm-text max-w-4xl mx-auto">
            "Let's help our community, one workshop at a time!"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;