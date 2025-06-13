// app/contact/page.tsx or pages/contact.tsx (depending on routing structure)
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Headphones,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: [
        "123 Healthcare Street",
        "Medical District",
        "New York, NY 10001",
      ],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: [
        "Main: +1 (555) 123-4567",
        "Emergency: +1 (555) 987-6543",
        "Available 24/7",
      ],
      color: "text-green-600",
    },
    {
      icon: FileText,
      title: "Email Us",
      content: [
        "info@medicare.com",
        "support@medicare.com",
        "appointments@medicare.com",
      ],
      color: "text-purple-600",
    },
    {
      icon: MessageSquare,
      title: "Office Hours",
      content: [
        "Mon - Fri: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 4:00 PM",
      ],
      color: "text-orange-600",
    },
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Help with appointments or website",
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Request or update medical information",
    },
    {
      icon: Phone,
      title: "Emergency",
      description: "Urgent medical concerns",
    },
  ];

  return (
    <main className="flex-1 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Reach out to us for any questions, support, or
            to schedule an appointment.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 ${info.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.content.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
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
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Support Options & Map */}
          <div className="space-y-6">
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
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
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
                    Located in the heart of the Medical District, easily
                    accessible by:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • Public transportation (Metro Station: Medical Center)
                    </li>
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
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Medical Emergency?
                </h3>
                <p className="text-red-700 mb-3">
                  If you are experiencing a medical emergency, do not use this
                  contact form. Please call 911 or go to your nearest emergency
                  room immediately.
                </p>
                <p className="text-red-700">
                  For urgent but non-emergency medical concerns, call our 24/7
                  hotline:
                  <span className="font-semibold"> +1 (555) 987-6543</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
