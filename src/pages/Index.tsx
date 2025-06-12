import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="slide-up">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Healthcare Made
                  <span className="block text-gradient">Simple & Smart</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                  Experience the future of healthcare with instant doctor
                  consultations, seamless appointment booking, and personalized
                  medical care—all in one platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                  <Link to="/doctors">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      Book Appointment
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/doctors">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto text-lg px-8 py-4 rounded-full border-2 hover:bg-accent hover:border-primary transition-all duration-300"
                    >
                      Find Doctors
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-gradient-to-b from-background to-accent/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose MediCare?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're revolutionizing healthcare with cutting-edge technology
                and compassionate care, making quality medical services
                accessible to everyone, everywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="hover-lift border-0 shadow-lg bg-white/50 backdrop-blur-sm"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="py-32 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Medical Specialties
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Connect with world-class specialists across various medical
                fields, each bringing years of expertise and dedication to your
                health journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specialties.map((specialty, index) => (
                <Link key={index} to="/doctors" className="block group">
                  <Card className="hover-lift border-0 shadow-lg bg-white/70 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8 text-center relative">
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${specialty.color}`}
                      ></div>
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${specialty.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <specialty.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {specialty.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        {specialty.count}
                      </p>
                      <div className="flex items-center justify-center mt-4 text-primary group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm font-medium mr-2">
                          Explore
                        </span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-primary via-blue-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="text-xl mb-12 opacity-90 leading-relaxed">
                Join over 50,000 satisfied patients who trust MediCare for their
                healthcare needs. Start your journey to better health today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/auth">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Get Started Today
                    <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "AI-powered appointment booking that finds the perfect time for you and your doctor.",
  },
  {
    icon: Users,
    title: "Top Specialists",
    description:
      "Connect with board-certified doctors and specialists in over 50+ medical fields.",
  },
  {
    icon: Clock,
    title: "Instant Care",
    description:
      "Get same-day appointments and 24/7 telehealth consultations when you need them most.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "HIPAA-compliant platform ensuring your medical data stays protected and confidential.",
  },
];

const specialties = [
  {
    name: "Cardiology",
    icon: Heart,
    count: "25+ Doctors",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "General Medicine",
    icon: Stethoscope,
    count: "40+ Doctors",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Pediatrics",
    icon: Users,
    count: "15+ Doctors",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Orthopedics",
    icon: Award,
    count: "20+ Doctors",
    color: "from-purple-500 to-violet-500",
  },
];

const stats = [
  { number: "50K+", label: "Happy Patients" },
  { number: "200+", label: "Expert Doctors" },
  { number: "15+", label: "Specializations" },
  { number: "24/7", label: "Support Available" },
];
