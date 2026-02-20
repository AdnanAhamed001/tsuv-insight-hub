import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Program from "./pages/Program";
import Apply from "./pages/Apply";
import InvestorHub from "./pages/InvestorHub";
import Portfolio from "./pages/Portfolio";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import People from "./pages/People";
import ContactUs from "./pages/ContactUs";
import EquityDilutionCalculator from "./pages/tools/EquityDilutionCalculator";
import RunwayBurnRate from "./pages/tools/RunwayBurnRate";
import MarketSizing from "./pages/tools/MarketSizing";
import ExitScenario from "./pages/tools/ExitScenario";
import BreakEven from "./pages/tools/BreakEven";
import BerkusMethod from "./pages/tools/BerkusMethod";
import StartupHealthCheck from "./pages/tools/StartupHealthCheck";
import FundraisingReadiness from "./pages/tools/FundraisingReadiness";
import IdeaValidator from "./pages/tools/IdeaValidator";
import LTVCalculator from "./pages/tools/LTVCalculator";
import IRRCalculator from "./pages/tools/IRRCalculator";
import CustomerPayback from "./pages/tools/CustomerPayback";
import RuleOf40 from "./pages/tools/RuleOf40";
import BurnMultiple from "./pages/tools/BurnMultiple";
import CapitalDeployment from "./pages/tools/CapitalDeployment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/program" element={<Program />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/investor-hub" element={<InvestorHub />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Tools */}
          <Route path="/resources/equity-dilution" element={<EquityDilutionCalculator />} />
          <Route path="/resources/runway-burn-rate" element={<RunwayBurnRate />} />
          <Route path="/resources/market-sizing" element={<MarketSizing />} />
          <Route path="/resources/exit-scenario" element={<ExitScenario />} />
          <Route path="/resources/break-even" element={<BreakEven />} />
          <Route path="/resources/berkus-method" element={<BerkusMethod />} />
          <Route path="/resources/startup-health-check" element={<StartupHealthCheck />} />
          <Route path="/resources/fundraising-readiness" element={<FundraisingReadiness />} />
          <Route path="/resources/idea-validator" element={<IdeaValidator />} />
          <Route path="/resources/ltv-calculator" element={<LTVCalculator />} />
          <Route path="/resources/irr-calculator" element={<IRRCalculator />} />
          <Route path="/resources/customer-payback" element={<CustomerPayback />} />
          <Route path="/resources/rule-of-40" element={<RuleOf40 />} />
          <Route path="/resources/burn-multiple" element={<BurnMultiple />} />
          <Route path="/resources/capital-deployment" element={<CapitalDeployment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
