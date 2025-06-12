import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/template/HomeLayout";
import Auth from "./pages/Auth";
import BookAppointment from "./pages/BookAppointment";
import Confirmation from "./pages/Confirmation";
import Contact from "./pages/Contact";
import DoctorProfile from "./pages/DoctorProfile";
import Doctors from "./pages/Doctors";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HomeLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/book/:doctorId" element={<BookAppointment />} />

            <Route path="/auth" element={<Auth />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HomeLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
