import { Star, Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                <Star className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold hindi-text">
                  आकाश के तारे
                </h3>
                <p className="text-sm warm-text">Aakash Ke Taare</p>
              </div>
            </div>
            <p className="text-white leading-relaxed mb-6 max-w-md">
              Empowering underprivileged youth through the transformative power of theatre. 
              Together, we're lighting up the sky, one workshop at a time.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:aakashketaare@gmail.com"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919990059050"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/aakash_ke_taare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold golden-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-white hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold golden-text mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm warm-text">Email</p>
                <p className="text-white">bindalanshika10@gmail.com</p>
              </div>
              <div>
                <p className="text-sm warm-text">Phone</p>
                <p className="text-white">+91 99900 59050</p>
              </div>
              <div>
                <p className="text-sm warm-text">Location</p>
                <p className="text-white">NCR, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © 2024 Aakash Ke Taare. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm warm-text">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Abhyudaya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;