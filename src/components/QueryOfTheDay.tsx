import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Clock, CheckCircle, Brain, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BASE_URL } from "@/config";

const QueryOfTheDay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const { toast } = useToast();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  // Example data - in a real app this would come from your backend
  // const todaysQuery = {
  //   question: "A 65-year-old patient presents with chest pain and elevated troponin levels. ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely location of the myocardial infarction?",
  //   answer: "Inferior wall myocardial infarction. The ST-elevation in leads II, III, and aVF indicates inferior wall involvement, typically caused by occlusion of the right coronary artery (RCA) or left circumflex artery (LCX)."
  // };
  
  useEffect(() => {
  const fetchQuestion = async () => {
    const localTime = new Date().toISOString();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(localTime);
    console.log(timezone);
    //const res = await fetch('https://mite-kind-neatly.ngrok-free.app/webhook/getQuestion', {
    const res = await fetch(`${BASE_URL}/getQuestion`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ localTime: localTime,zone: timezone })
    });
    
    const data = await res.json();
    
    setQuestion(data.question);
    setAnswer(data.correct_answer);
  };
  fetchQuestion();
}, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Simulate loading and then show content with animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setContentVisible(true), 100);
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const currentHour = currentTime.getHours();
  //const showAnswer = currentHour >= 20; // 8 PM or later
  //const showQuery = currentHour >= 19; // 9 AM or later

  
// Show query from 9:00 AM until next day 8:59 AM
  const showQuery = currentHour >= 9 || currentHour < 9;

// Show answer from 8:00 PM until next day 8:59 AM
  const showAnswer = currentHour >= 20 || currentHour < 9;

  // Show toast when answer is revealed
  useEffect(() => {
    if (showAnswer && !answerRevealed && !isLoading) {
      setAnswerRevealed(true);
      const timeString = currentTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      toast({
        title: "✓ Answer Revealed",
        description: timeString,
        className: "bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white [&_*]:text-white",
        duration: 5000,
      });
    }
  }, [showAnswer, answerRevealed, isLoading, currentTime, toast]);
  
  
  if (isLoading) {
    return (
      <Card 
        className="p-0 bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center"
        role="status"
        aria-label="Loading today's medical query"
      >
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto">
              <Brain className="h-8 w-8 text-blue-400 animate-pulse" />
            </div>
            <Loader2 className="h-6 w-6 text-blue-400 animate-spin absolute -top-1 -right-1" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-blue-500 rounded-full w-48 mx-auto animate-pulse"></div>
            <p className="text-slate-400">Loading today's challenge...</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      className="p-0 bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden h-full"
      role="main"
      aria-labelledby="query-title"
    >
      {/* Progress Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
      
      {/* Header Section */}
      <header className="p-6 sm:p-8">
        <h1 
          id="query-title"
          className="text-2xl font-bold text-white mb-2"
        >
          Today's Medical Query
        </h1>
      </header>
      
      {/* Main Content */}
      <main className="p-6 sm:p-8 space-y-6">
        {showQuery ? (
          <div className={`space-y-6 transition-all duration-500 ${contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            {/* Loading State or Question */}
            {!showAnswer && (
              <div className="flex items-center gap-3 text-slate-400 mb-4">
                <h3 
                  id="answer-heading"
                  className="text-lg font-semibold text-white mb-4 flex items-center gap-2"
                >
                  
                  Question
                </h3>
                
              </div>
              
            )}
            
            {/* Question Section */}
            <section 
              className="space-y-4"
              role="article"
              aria-labelledby="question-heading"
            >
              <div className="bg-slate-700/50 border border-slate-600 p-6 rounded-xl">
                <p className="text-base text-slate-200 leading-relaxed">
                  {question}
                </p>
              </div>
            </section>
            
            {/* Answer Section */}
            {showAnswer ? (
              <section 
                className="animate-fade-in"
                role="article"
                aria-labelledby="answer-heading"
              >
                <h3 
                  id="answer-heading"
                  className="text-lg font-semibold text-white mb-4 flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Expert Analysis & Answer
                </h3>
                <div className="bg-slate-700/50 border border-slate-600 p-6 rounded-xl">
                  <p className="text-slate-200 leading-relaxed">
                    {answer}
                  </p>
                </div>
              </section>
            ) : (
              <section 
                role="article"
                aria-labelledby="waiting-heading"
              >
                <h3 
                  id="waiting-heading"
                  className="text-lg font-semibold text-white mb-4 flex items-center gap-2"
                >
                  <Clock className="h-5 w-5 text-slate-400 animate-pulse" />
                  Expert Analysis & Answer
                </h3>
                <div className="bg-slate-700/30 border border-slate-600 p-6 rounded-xl">
                  <p className="text-slate-400">
                    The detailed answer and clinical explanation will be revealed here at 8:00 PM daily.
                  </p>
                </div>
              </section>
            )}
          </div>
        ) : (
          <section 
            className="text-center py-12 animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <div className="relative inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-2xl mb-6">
              <Clock className="h-8 w-8 text-slate-400" aria-hidden="true" />
              <div className="absolute inset-0 bg-slate-600/20 rounded-2xl animate-pulse"></div>
            </div>
            <h2 className="text-xl font-bold text-white mb-3">
              Preparing Today's Challenge
            </h2>
            <p className="text-slate-400 text-base mb-2 max-w-md mx-auto">
              Daily medical queries are available from 9:00 AM to 11:59 PM
            </p>
            <p className="text-sm text-slate-500">
              Return at 9:00 AM for your next clinical challenge
            </p>
          </section>
        )}
      </main>
    </Card>
  );
};

export default QueryOfTheDay;