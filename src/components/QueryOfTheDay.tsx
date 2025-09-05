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
    <Card className="p-8 bg-white shadow-lg border-0 rounded-2xl">
        <div className="space-y-6">
          {/* Header with status */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-medical-text">Query of the Day</h2>
            <div className="flex items-center gap-2">
              {showAnswer ? (
                <div className="bg-medical-crimson text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Answer Revealed</span>
                  <span className="text-sm">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ) : (
                <div className="bg-medical-crimson-dark text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Query Active</span>
                  <span className="text-sm">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              )}
            </div>
          </div>
          
          {showQuery ? (
            <>
              {/* Question */}
              <div className="bg-red-50 border-l-4 border-medical-crimson p-6 rounded-r-lg">
                <p className="text-lg text-medical-text leading-relaxed">
                  {todaysQuery.question}
                </p>
              </div>
              
              {/* Answer section */}
              {showAnswer ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Answer Revealed!
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {todaysQuery.answer}
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg">
                  <p className="text-gray-600 italic">
                    The answer will appear here at 8 PM daily.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Loading today's medical query...
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Daily queries are available from 9 AM to 11:59 PM
              </p>
            </div>
          )}
        </div>
      </Card>
  );
};

export default QueryOfTheDay;