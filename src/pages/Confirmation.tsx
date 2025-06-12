import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Home,
  Mail,
  Phone,
  Share2,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  // Mock appointment data - in a real app, this would come from the booking process
  const appointmentDetails = {
    confirmationNumber: "APT-2024-001234",
    doctorName: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    date: "Thursday, June 13, 2024",
    time: "10:30 AM",
    hospital: "City General Hospital",
    patientName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
  };

  return (
    <>
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              Appointment Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your appointment has been successfully scheduled.
            </p>
          </div>

          {/* Appointment Details Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Appointment Details
                </h2>
                <p className="text-muted-foreground">
                  Confirmation Number:{" "}
                  <span className="font-mono font-semibold text-primary">
                    {appointmentDetails.confirmationNumber}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Doctor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Doctor Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">
                          {appointmentDetails.doctorName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {appointmentDetails.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-5 w-5 flex items-center justify-center">
                        <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {appointmentDetails.hospital}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Appointment Time */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Appointment Time
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <p className="font-medium">{appointmentDetails.date}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <p className="font-medium">{appointmentDetails.time}</p>
                    </div>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Patient Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <p className="font-medium">
                        {appointmentDetails.patientName}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {appointmentDetails.email}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {appointmentDetails.phone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">
                    Status
                  </h3>
                  <div className="space-y-3">
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <CheckCircle className="h-4 w-4" />
                      <span>Confirmed</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent to your email address.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Download Confirmation
            </Button>
            <Button variant="outline" className="w-full">
              <Share2 className="h-4 w-4 mr-2" />
              Share Details
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Add to Calendar
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/" className="flex-1">
              <Button variant="outline" className="w-full">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/doctors" className="flex-1">
              <Button className="w-full">Book Another Appointment</Button>
            </Link>
          </div>

          {/* Important Information */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                Important Information
              </h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>
                  • Please arrive 15 minutes before your scheduled appointment
                  time
                </li>
                <li>• Bring a valid ID and your insurance card</li>
                <li>
                  • If you need to reschedule or cancel, please contact us at
                  least 24 hours in advance
                </li>
                <li>
                  • A reminder will be sent to you 24 hours before your
                  appointment
                </li>
                <li>• For any questions, call us at +1 (555) 123-4567</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Confirmation;
