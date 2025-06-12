import { Button } from "@/components/ui/button";
import { Menu, Stethoscope, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Stethoscope className="h-9 w-9 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold text-gradient">MediCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth">
              <Button variant="ghost" className="rounded-full font-medium">
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-accent/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-6 fade-in">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-6 border-t border-white/10">
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-center rounded-full"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full justify-center rounded-full shadow-lg">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
