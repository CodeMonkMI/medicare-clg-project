
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Headphones,
  FileText
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: ["123 Healthcare Street", "Medical District", "New York, NY 10001"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: ["Main: +1 (555) 123-4567", "Emergency: +1 (555) 987-6543", "Available 24/7"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: ["info@medicare.com", "support@medicare.com", "appointments@medicare.com"],
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Mon - Fri: 8:00 AM - 8:00 PM", "Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      color: "text-orange-600"
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with appointments or website"
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Request or update medical information"
    },
    {
      icon: Phone,
      title: "Emergency",
      description: "Urgent medical concerns"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help! Reach out to us for any questions, support, or to schedule an appointment.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${info.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="appointment">Appointment Related</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your inquiry or how we can help you..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Support Options & Map */}
            <div className="space-y-6">
              {/* Support Options */}
              <Card>
                <CardHeader>
                  <CardTitle>How can we help you?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {supportOptions.map((option, index) => (
                      <div
                        key={index}
                        className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <option.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{option.title}</h4>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        123 Healthcare Street, Medical District
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-medium mb-2">Directions</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Located in the heart of the Medical District, easily accessible by:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Public transportation (Metro Station: Medical Center)</li>
                      <li>• Free parking available on-site</li>
                      <li>• Wheelchair accessible entrance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Notice */}
          <Card className="mt-12 bg-red-50 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Medical Emergency?</h3>
                  <p className="text-red-700 mb-3">
                    If you are experiencing a medical emergency, do not use this contact form. 
                    Please call 911 or go to your nearest emergency room immediately.
                  </p>
                  <p className="text-red-700">
                    For urgent but non-emergency medical concerns, call our 24/7 hotline: 
                    <span className="font-semibold"> +1 (555) 987-6543</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
