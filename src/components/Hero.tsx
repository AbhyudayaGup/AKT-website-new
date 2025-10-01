import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max--w4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 pt-14">
            <span className="hindi-text">आकाश के तारे</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4 golden-text">
            Aakash Ke Taare
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 warm-text font-medium">
            Together, Let's Light Up the Sky
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white leading-relaxed">
            Empowering underprivileged youth through the magic of performing arts. 
            Building confidence, creativity, and communication skills one workshop at a time.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-md mx-auto">
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold golden-text mb-2">120+</div>
              <div className="text-white">Students Taught</div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold golden-text mb-2">35+</div>
              <div className="text-white">Hours Taught</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect group px-8 py-4 text-lg"
            >
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce opacity-30">
        <div className="w-4 h-4 bg-accent rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce opacity-30" style={{ animationDelay: '0.5s' }}>
        <div className="w-6 h-6 bg-primary rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce opacity-30" style={{ animationDelay: '1s' }}>
        <div className="w-5 h-5 bg-accent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;