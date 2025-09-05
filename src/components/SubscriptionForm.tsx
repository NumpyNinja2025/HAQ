import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // TODO: Save to Supabase when connected
    console.log("Email subscription:", email);
    
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed! 🎉",
      description: "You'll receive daily medical insights in your inbox",
    });
    
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <Card className="p-8 rounded-2xl shadow-lg bg-card border-0 text-center">
        <div className="space-y-4">
          <div className="text-4xl">✅</div>
          <h3 className="text-xl font-semibold text-medical-blue">
            Welcome to HAQ!
          </h3>
          <p className="text-muted-foreground">
            You're all set to receive daily medical insights. Check your inbox for confirmation!
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubscribed(false)}
            className="mt-4"
          >
            Subscribe Another Email
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 rounded-2xl shadow-lg bg-card border-0">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            Get Daily Medical Insights
          </h3>
          <p className="text-muted-foreground">
            Subscribe to receive curated medical queries and evidence-based answers directly in your inbox
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-center"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white font-medium py-3"
          >
            Subscribe to Daily Queries
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground">
          📧 No spam, unsubscribe anytime. Your privacy is our priority.
        </p>
      </div>
    </Card>
  );
};

export default SubscriptionForm;