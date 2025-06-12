
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Clock, User, Phone, Mail, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const Appointment = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const doctors = [
    { id: "1", name: "Dr. Sarah Johnson", specialty: "Cardiology" },
    { id: "2", name: "Dr. Michael Chen", specialty: "Dermatology" },
    { id: "3", name: "Dr. Emily Davis", specialty: "Pediatrics" },
    { id: "4", name: "Dr. James Wilson", specialty: "Orthopedics" }
  ];

  const availableTimes = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment booked:", {
      doctor: selectedDoctor,
      date,
      time: selectedTime,
      ...formData
    });
    navigate("/confirmation");
  };

  const isFormValid = formData.name && formData.email && formData.phone && date && selectedTime && selectedDoctor;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-cyan-600 rounded-full mb-6">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gradient mb-4">Book Your Appointment</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a consultation with our expert medical professionals. Choose your preferred doctor, date, and time.
            </p>
          </div>

          {/* Main Form Card */}
          <Card className="glass-effect shadow-2xl border-white/20">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-semibold">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="h-12 glass-effect border-white/30"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="h-12 glass-effect border-white/30"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className="h-12 glass-effect border-white/30"
                      required
                    />
                  </div>
                </div>

                {/* Appointment Scheduling Section */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Appointment Details</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Select Doctor *</Label>
                    <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                      <SelectTrigger className="h-12 glass-effect border-white/30">
                        <Stethoscope className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Choose your doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {doctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "h-12 w-full justify-start text-left font-normal glass-effect border-white/30",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Preferred Time *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="h-12 glass-effect border-white/30">
                          <Clock className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTimes.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Additional Information</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Reason for Visit / Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your symptoms or reason for the visit (optional)"
                      rows={4}
                      className="glass-effect border-white/30 resize-none"
                    />
                  </div>
                </div>

                {/* Appointment Summary */}
                {date && selectedTime && selectedDoctor && (
                  <div className="bg-gradient-to-r from-primary/5 to-cyan-600/5 rounded-xl p-6 border border-primary/10">
                    <h4 className="font-semibold text-lg mb-4 text-primary">Appointment Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Doctor</p>
                        <p className="font-medium">{doctors.find(d => d.id === selectedDoctor)?.name}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Specialty</p>
                        <p className="font-medium">{doctors.find(d => d.id === selectedDoctor)?.specialty}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{format(date, "EEEE, MMMM do, yyyy")}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Time</p>
                        <p className="font-medium">{selectedTime}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate(-1)}
                    className="flex-1 h-12 glass-effect border-white/30 hover:bg-white/50"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className="flex-1 h-12 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Book Appointment
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Appointment;
