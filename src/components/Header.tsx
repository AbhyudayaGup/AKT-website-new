import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="/akt.svg" 
                alt="AKT Logo" 
                className="w-full h-full object-cover logo-svg"
              />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold hindi-text">
                आकाश के तारे
              </h1>
              <p className="text-sm warm-text">Aakash Ke Taare</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden relative w-12 h-12 flex flex-col justify-center items-center group focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between z-10">
              <span 
                className="block h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-left group-hover:bg-yellow-300"
                style={{
                  transform: isMenuOpen ? 'rotate(45deg) translateY(2px)' : 'none',
                  width: isMenuOpen ? '28px' : '24px'
                }}
              />
              <span 
                className="block h-0.5 w-6 bg-white transform transition-all duration-200 ease-in-out group-hover:bg-yellow-300"
                style={{
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
                }}
              />
              <span 
                className="block h-0.5 bg-white transform transition-all duration-300 ease-in-out origin-left group-hover:bg-yellow-300"
                style={{
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-2px)' : 'none',
                  width: isMenuOpen ? '28px' : '24px'
                }}
              />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;