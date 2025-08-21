import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import TechnicalEvents from "./pages/TechnicalEvents";
import NonTechnicalEvents from "./pages/NonTechnicalEvents";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import AboutFest from "./pages/AboutFest";
import Hackthon from "./pages/Hackathon";
import ScrollToTop from "@/components/ScrollToTop";
import { HashRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* HashRouter with basename for better production compatibility */}
      <HashRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/" element={<Index />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/technical-events" element={<TechnicalEvents />} />
          <Route path="/non-technical-events" element={<NonTechnicalEvents />} />
          <Route path="/about" element={<AboutFest />} />
          <Route path="/hackathon" element={<Hackthon />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;