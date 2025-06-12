
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { CalendarIcon, Clock, User, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Mock doctor data
  const doctor = {
    id: parseInt(doctorId || "1"),
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    hospital: "City General Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    fees: "$150"
  };

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
    console.log("Booking submitted:", {
      doctorId,
      date,
      time: selectedTime,
      ...formData
    });
    navigate("/confirmation");
  };

  const isFormValid = formData.name && formData.email && formData.phone && date && selectedTime;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Book Appointment</h1>
            <p className="text-muted-foreground">Schedule your consultation with {doctor.name}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Doctor Info Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                    <p className="text-primary mb-2">{doctor.specialty}</p>
                    <p className="text-muted-foreground text-sm mb-4">{doctor.hospital}</p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">Consultation Fee</p>
                      <p className="text-2xl font-bold text-primary">{doctor.fees}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Personal Information
                      </h3>
                      
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
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Enter your phone number"
                            required
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
                    </div>

                    {/* Appointment Scheduling */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center">
                        <CalendarIcon className="h-5 w-5 mr-2" />
                        Schedule Appointment
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>Preferred Date *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
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
                        
                        <div>
                          <Label>Preferred Time *</Label>
                          <Select value={selectedTime} onValueChange={setSelectedTime}>
                            <SelectTrigger>
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
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="message">Reason for Visit / Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Please describe your symptoms or reason for the visit (optional)"
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    {date && selectedTime && (
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Appointment Summary</h4>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Doctor:</span> {doctor.name}</p>
                          <p><span className="font-medium">Date:</span> {format(date, "EEEE, MMMM do, yyyy")}</p>
                          <p><span className="font-medium">Time:</span> {selectedTime}</p>
                          <p><span className="font-medium">Consultation Fee:</span> {doctor.fees}</p>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(-1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={!isFormValid}
                        className="flex-1"
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookAppointment;
