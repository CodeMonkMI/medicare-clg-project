import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDoctor, useReviews, useSlots } from "@/store/doctorsStore";
import {
  Award,
  Calendar,
  Clock,
  GraduationCap,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const DoctorProfile = () => {
  const { id } = useParams();
  const doctorId = Number(id);

  const doctor = useDoctor(doctorId);
  const slots = useSlots(doctorId);
  const reviews = useReviews(doctorId);

  if (isNaN(doctorId)) {
    return (
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl text-muted-foreground">Doctor not found.</p>
        </div>
      </main>
    );
  }

  if (!doctor) {
    return (
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 text-center">
          <pre>{JSON.stringify(typeof doctorId, undefined, 2)}</pre>
          <p className="text-xl text-muted-foreground">Doctor not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
                <p className="text-xl text-primary mb-2">{doctor.specialty}</p>
                <p className="text-muted-foreground mb-4">{doctor.hospital}</p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground">
                      ({reviews.length} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {doctor.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {doctor.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                  {doctor.languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>

                <p className="text-2xl font-bold text-primary mb-4">
                  Consultation Fee: {doctor.fees}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link to={`/book/${doctor.id}`}>
                  <Button size="lg" className="w-full md:w-auto">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    About Dr. {doctor.name.split(" ")[1]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {doctor.about}
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </h3>
                    <ul className="space-y-2">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-muted-foreground">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Certifications
                    </h3>
                    <ul className="space-y-2">
                      {doctor.certifications.map((cert, index) => (
                        <li key={index} className="text-muted-foreground">
                          • {cert}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="availability" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Available Time Slots
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {slots.map((slot) => (
                    <div key={slot.date} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-3 text-center">
                        {new Date(slot.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                        })}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {slot.times.map((time) => (
                          <Button
                            key={time}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link to={`/book/${doctor.id}`}>
                    <Button size="lg">Book Your Slot Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Patient Reviews</h3>
                <div className="space-y-6">
                  <div className="flex flex-wrap justify-between gap-y-3">
                    {reviews.map((review, index) => (
                      <Card
                        key={index}
                        className="border-b pb-4 w-[33%]  last:border-b-0"
                      >
                        <CardContent className="px-3 pt-2 pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">
                                {review.patient}
                              </span>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-muted-foreground text-sm">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground">
                            {review.comment}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default DoctorProfile;
