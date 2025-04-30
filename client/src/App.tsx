import { useState, useEffect } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import SplashScreen from "@/components/SplashScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { toast } = useToast();

  // Listen for custom toast events
  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      if (event.detail) {
        const { title, description, duration } = event.detail;
        toast({
          title,
          description,
          duration: duration || 3000
        });
      }
    };

    // Add event listener for custom toast events
    document.addEventListener('toast', handleToast as EventListener);
    
    return () => {
      document.removeEventListener('toast', handleToast as EventListener);
    };
  }, [toast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
          <Toaster />
          <Router />
        </>
      )}
    </TooltipProvider>
  );
}

export default App;
