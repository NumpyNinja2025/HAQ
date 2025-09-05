import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

const QueryOfTheDay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Example data - in a real app this would come from your backend
  const todaysQuery = {
    question: "What is the normal fasting blood glucose range?",
    answer: "70–99 mg/dL (3.9–5.5 mmol/L) is considered normal for adults"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const currentHour = currentTime.getHours();
  const showAnswer = currentHour >= 20; // 8 PM or later
  const showQuery = currentHour >= 9; // 9 AM or later

  return (
    <Card className="p-8 rounded-2xl shadow-lg bg-card border-0">
      <div className="text-center space-y-6">
        {showQuery ? (
          <>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-medical-blue">
                Today's Medical Query
              </h3>
              <p className="text-xl font-medium text-foreground leading-relaxed">
                {todaysQuery.question}
              </p>
            </div>
            
            {showAnswer ? (
              <div className="mt-8 p-6 bg-medical-blue-light rounded-xl">
                <h4 className="text-lg font-semibold text-medical-blue mb-3">
                  Answer:
                </h4>
                <p className="text-lg text-medical-text leading-relaxed">
                  {todaysQuery.answer}
                </p>
              </div>
            ) : (
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <p className="text-muted-foreground italic">
                  💡 The answer will be revealed at 8 PM
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Current time: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="py-8">
            <p className="text-muted-foreground text-lg">
              🌅 Today's medical query will be available at 9 AM
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Current time: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QueryOfTheDay;