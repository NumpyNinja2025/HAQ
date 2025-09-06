import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

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
      <Card className="p-6 bg-slate-800 border border-slate-700 rounded-2xl">
        <div className="text-center space-y-4">
          <div className="text-4xl">✅</div>
          <h3 className="text-xl font-semibold text-white">
            Welcome to HAQ!
          </h3>
          <p className="text-slate-400">
            You're all set to receive daily medical insights. Check your inbox for confirmation!
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubscribed(false)}
            className="mt-4 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Subscribe Another Email
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-slate-800 border border-slate-700 rounded-2xl">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-white" />
            <h3 className="text-lg font-semibold text-white">Daily Delivery</h3>
          </div>
          <p className="text-slate-400 text-sm">
            Never miss a challenge! Get queries at 9 AM and expert answers at 8 PM.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="your.email@hospital.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3"
          >
            Start My Daily Learning
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default SubscriptionForm;