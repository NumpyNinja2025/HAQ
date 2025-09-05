import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Clock, CheckCircle } from "lucide-react";

const QueryOfTheDay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Example data - in a real app this would come from your backend
  const todaysQuery = {
    question: "A 65-year-old patient presents with chest pain and elevated troponin levels. ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely location of the myocardial infarction?",
    answer: "Inferior wall myocardial infarction. The ST-elevation in leads II, III, and aVF indicates inferior wall involvement, typically caused by occlusion of the right coronary artery (RCA) or left circumflex artery (LCX)."
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
    <Card className="p-0 bg-white shadow-xl border-0 rounded-3xl overflow-hidden">
      <div className="bg-gradient-to-r from-medical-crimson to-medical-crimson-dark p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold text-white">Query of the Day</h2>
          <div className="flex items-center gap-3">
            {showAnswer ? (
              <div className="bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/30">
                <CheckCircle className="h-5 w-5" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Answer Revealed</span>
                  <span className="text-xs opacity-90">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm text-white px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/30">
                <Clock className="h-5 w-5" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Query Active</span>
                  <span className="text-xs opacity-90">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-8 space-y-8">
        {showQuery ? (
          <>
            {/* Question */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-medical-crimson to-medical-crimson-dark rounded-full"></div>
              <div className="bg-gradient-to-br from-medical-crimson/5 to-medical-crimson/10 border border-medical-crimson/20 p-8 rounded-2xl ml-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-medical-crimson rounded-full flex items-center justify-center text-white font-bold text-sm">
                    Q
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-medical-crimson mb-3 uppercase tracking-wide">Medical Challenge</h3>
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      {todaysQuery.question}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Answer section */}
            {showAnswer ? (
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-200 p-8 rounded-2xl ml-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-emerald-700 mb-3 uppercase tracking-wide flex items-center gap-2">
                        Clinical Answer
                      </h3>
                      <p className="text-lg text-emerald-900 leading-relaxed font-medium">
                        {todaysQuery.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-muted to-muted/60 rounded-full"></div>
                <div className="bg-muted/30 border border-muted p-8 rounded-2xl ml-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Awaiting Solution</h3>
                      <p className="text-muted-foreground">
                        The clinical answer will be revealed at 8:00 PM daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-medical-crimson/10 to-medical-crimson/20 rounded-3xl mb-6">
              <Clock className="h-10 w-10 text-medical-crimson" />
              <div className="absolute inset-0 bg-medical-crimson/5 rounded-3xl animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Preparing Today's Challenge
            </h3>
            <p className="text-muted-foreground text-lg mb-2">
              Daily medical queries are available from 9:00 AM to 11:59 PM
            </p>
            <p className="text-sm text-muted-foreground">
              Return at 9:00 AM for your next clinical challenge
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QueryOfTheDay;