import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useDoctor, useSlots } from "@/store/doctorsStore";
import { format } from "date-fns";
import { CalendarIcon, Clock, User } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().optional(),
  time: z.string().min(1, "Please select a time slot"),
  date: z.date({ required_error: "Please select a date" }),
});

type FormData = z.infer<typeof schema>;

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = useDoctor(Number(doctorId));
  const slots = useSlots(Number(doctorId));

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      time: "",
      date: null,
    },
  });
  const date = watch("date");

  const selectedTime = watch("time");

  const onSubmit = (data: FormData) => {
    console.log("Booking submitted:", {
      doctorId,
      ...data,
    });
    navigate("/confirmation");
  };

  return (
    <>
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Book Appointment</h1>
            <p className="text-muted-foreground">
              Schedule your consultation with {doctor?.name}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src={doctor?.image}
                      alt={doctor?.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1">
                      {doctor?.name}
                    </h3>
                    <p className="text-primary mb-2">{doctor?.specialty}</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {doctor?.hospital}
                    </p>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        Consultation Fee
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {doctor?.fees}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Appointment Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                            {...register("name")}
                            placeholder="Enter your full name"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            placeholder="Enter your phone number"
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

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
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(val) => setValue("date", val)}
                                disabled={(d) => d < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          {errors.date && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.date.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label>Preferred Time *</Label>
                          <Select
                            value={selectedTime}
                            onValueChange={(val) => setValue("time", val)}
                          >
                            <SelectTrigger>
                              <Clock className="mr-2 h-4 w-4" />
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              {slots
                                .map((slot) => slot.times)
                                .flat(Infinity)
                                .map((time: string) => (
                                  <SelectItem key={Math.random()} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                          {errors.time && (
                            <p className="text-sm text-red-500 mt-1">
                              {errors.time.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Additional Information
                      </h3>
                      <div>
                        <Label htmlFor="message">
                          Reason for Visit / Message
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          placeholder="Please describe your symptoms or reason for the visit (optional)"
                          rows={4}
                        />
                        {errors.message && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {date && selectedTime && (
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Appointment Summary
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-medium">Doctor:</span>{" "}
                            {doctor?.name}
                          </p>
                          <p>
                            <span className="font-medium">Date:</span>{" "}
                            {format(date, "EEEE, MMMM do, yyyy")}
                          </p>
                          <p>
                            <span className="font-medium">Time:</span>{" "}
                            {selectedTime}
                          </p>
                          <p>
                            <span className="font-medium">
                              Consultation Fee:
                            </span>{" "}
                            {doctor?.fees}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(-1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button type="submit" className="flex-1">
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
    </>
  );
};

export default BookAppointment;
