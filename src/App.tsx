
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import DiscTest from "./pages/DiscTest";
import DiscResults from "./pages/DiscResults";
import CulturalTest from "./pages/CulturalTest";
import Candidates from "./pages/Candidates";
import Jobs from "./pages/Jobs";
import EditJob from "./pages/EditJob";
import CreateJob from "./pages/CreateJob";
import CandidateJobs from "./pages/CandidateJobs";
import JobDetails from "./pages/JobDetails";

const queryClient = new QueryClient();

import { AuthProvider } from "./contexts/AuthContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <FloatingWhatsApp />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/disc-test" element={<DiscTest />} />
              <Route path="/disc-results" element={<DiscResults />} />
              <Route path="/cultural-test" element={<CulturalTest />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/edit" element={<EditJob />} />
              <Route path="/jobs/create" element={<CreateJob />} />
              <Route path="/candidate-jobs" element={<CandidateJobs />} />
              <Route path="/job/:id" element={<JobDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
