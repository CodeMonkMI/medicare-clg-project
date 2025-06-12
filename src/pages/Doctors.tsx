import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDoctors } from "@/store/doctorsStore"; // ✅ Zustand store import
import { Clock, MapPin, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = useDoctors(); // ✅ Get from Zustand
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  // ✅ Extract specialties and locations dynamically
  const specialties = useMemo(() => {
    const set = new Set(doctors.map((d) => d.specialty));
    return ["all", ...Array.from(set)];
  }, [doctors]);

  const locations = useMemo(() => {
    const set = new Set(doctors.map((d) => d.location));
    return ["all", ...Array.from(set)];
  }, [doctors]);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "all" || doctor.specialty === selectedSpecialty;
    const matchesLocation =
      selectedLocation === "all" || doctor.location === selectedLocation;

    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <main className="flex-1 py-8">
      <div className="container mx-auto px-4">
        {/* Search and Filter Section */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
          <h1 className="text-3xl font-bold mb-6">Find Your Doctor</h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select
              value={selectedSpecialty}
              onValueChange={setSelectedSpecialty}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty === "all" ? "All Specialties" : specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === "all" ? "All Locations" : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="w-full">Search</Button>
          </div>

          <p className="text-muted-foreground">
            Found {filteredDoctors.length} doctors matching your criteria
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <Badge
                    variant={
                      doctor.availability?.includes("today")
                        ? "default"
                        : "secondary"
                    }
                    className="absolute top-0 right-1/4 text-xs"
                  >
                    {doctor.availability?.includes("today")
                      ? "Available"
                      : "Busy"}
                  </Badge>
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-sm">
                    {doctor.hospital}
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {doctor.experience}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.location}</span>
                  </div>
                  <span className="font-medium text-foreground">
                    {doctor.fees}
                  </span>
                </div>

                <p className="text-sm text-center text-muted-foreground mb-4">
                  {doctor.availability}
                </p>

                <div className="flex space-x-2">
                  <Link to={`/doctor/${doctor.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                  <Link to={`/book/${doctor.id}`} className="flex-1">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No doctors found matching your criteria.
            </p>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search filters.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Doctors;
