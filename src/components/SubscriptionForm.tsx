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
      <Card className="p-8 bg-white shadow-lg border-0 rounded-2xl">
        <div className="text-center space-y-4">
          <div className="text-4xl">✅</div>
          <h3 className="text-xl font-semibold text-gray-900">
            Welcome to HAQ!
          </h3>
          <p className="text-gray-600">
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
    <Card className="p-8 bg-white shadow-lg border-0 rounded-2xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-gray-700" />
            <h3 className="text-xl font-semibold text-gray-900">
              Daily Subscription
            </h3>
          </div>
          <p className="text-gray-600">
            Get the query at 9 AM and the answer at 8 PM delivered to your inbox!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default SubscriptionForm;