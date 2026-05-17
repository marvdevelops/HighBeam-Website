// v2 redesign — 2026-05-17
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CapabilitiesPage from "@/pages/capabilities";
import WorkPage from "@/pages/work";
import ProjectDetailPage from "@/pages/project-detail";
import ProcessPage from "@/pages/process";
import AboutPage from "@/pages/about";
import AgenciesPage from "@/pages/agencies";
import ContactPage from "@/pages/contact";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

function Router() {
  useScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/capabilities" component={CapabilitiesPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/work/:slug" component={ProjectDetailPage} />
      <Route path="/process" component={ProcessPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/agencies" component={AgenciesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
