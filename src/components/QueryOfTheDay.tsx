import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Clock, CheckCircle, Brain, Loader2 } from "lucide-react";

const QueryOfTheDay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  
  // Example data - in a real app this would come from your backend
  const todaysQuery = {
    question: "A 65-year-old patient presents with chest pain and elevated troponin levels. ECG shows ST-segment elevation in leads II, III, and aVF. What is the most likely location of the myocardial infarction?",
    answer: "Inferior wall myocardial infarction. The ST-elevation in leads II, III, and aVF indicates inferior wall involvement, typically caused by occlusion of the right coronary artery (RCA) or left circumflex artery (LCX)."
  };

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
  const showAnswer = currentHour >= 20; // 8 PM or later
  const showQuery = currentHour >= 9; // 9 AM or later

  if (isLoading) {
    return (
      <div 
        className="p-0 bg-gradient-surface shadow-premium border-0 rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center backdrop-blur-sm"
        role="status"
        aria-label="Loading today's medical query"
      >
        <div className="text-center space-y-8 animate-fade-in">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-lg">
              <Brain className="h-10 w-10 text-white animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-primary/20 rounded-3xl animate-pulse"></div>
            <Loader2 className="h-6 w-6 text-primary animate-spin absolute -top-2 -right-2 bg-white rounded-full p-1" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Preparing Your Medical Challenge</h3>
            <p className="text-muted-foreground text-lg">Curating today's clinical scenario...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="p-0 bg-gradient-surface shadow-premium border-0 rounded-3xl overflow-hidden h-full backdrop-blur-sm"
      role="main"
      aria-labelledby="query-title"
    >
      {/* Header Section */}
      <header className="bg-gradient-primary p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent"></div>
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Brain className="h-8 w-8 text-white flex-shrink-0" />
            </div>
            <h1 
              id="query-title"
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Query of the Day
            </h1>
          </div>
          <div 
            className="flex items-center gap-3"
            role="status"
            aria-live="polite"
          >
            {showAnswer ? (
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/30 transition-all duration-300 hover:bg-white/30">
                <CheckCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Answer Revealed</span>
                  <span className="text-xs opacity-90" aria-label={`Current time: ${currentTime.toLocaleTimeString()}`}>
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/30 transition-all duration-300 hover:bg-white/30">
                <Clock className="h-5 w-5 flex-shrink-0 animate-pulse" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Query Active</span>
                  <span className="text-xs opacity-90" aria-label={`Current time: ${currentTime.toLocaleTimeString()}`}>
                    {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="p-8 sm:p-10 space-y-10">
        {showQuery ? (
          <div className={`space-y-6 sm:space-y-8 transition-all duration-500 ${contentVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
            {/* Question Section */}
            <section 
              className="relative"
              role="article"
              aria-labelledby="question-heading"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-medical-crimson to-medical-crimson-dark rounded-full"></div>
              <div className="bg-gradient-to-br from-medical-crimson/5 to-medical-crimson/10 border border-medical-crimson/20 p-6 sm:p-8 rounded-2xl ml-6 hover:shadow-lg transition-all duration-300 hover-scale">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 bg-medical-crimson rounded-full flex items-center justify-center text-white font-bold text-sm"
                    role="img"
                    aria-label="Question indicator"
                  >
                    Q
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 
                      id="question-heading"
                      className="text-sm font-semibold text-medical-crimson mb-3 uppercase tracking-wide"
                    >
                      Medical Challenge
                    </h2>
                    <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
                      {todaysQuery.question}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Answer Section */}
            {showAnswer ? (
              <section 
                className="relative animate-fade-in"
                role="article"
                aria-labelledby="answer-heading"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-200 p-6 sm:p-8 rounded-2xl ml-6 hover:shadow-lg transition-all duration-300 hover-scale">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white"
                      role="img"
                      aria-label="Answer indicator"
                    >
                      <CheckCircle className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 
                        id="answer-heading"
                        className="text-sm font-semibold text-emerald-700 mb-3 uppercase tracking-wide"
                      >
                        Clinical Answer
                      </h2>
                      <p className="text-base sm:text-lg text-emerald-900 leading-relaxed font-medium">
                        {todaysQuery.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <section 
                className="relative"
                role="article"
                aria-labelledby="waiting-heading"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-muted to-muted/60 rounded-full"></div>
                <div className="bg-muted/30 border border-muted p-6 sm:p-8 rounded-2xl ml-6 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div 
                      className="flex-shrink-0 w-10 h-10 bg-muted rounded-full flex items-center justify-center"
                      role="img"
                      aria-label="Waiting indicator"
                    >
                      <Clock className="h-5 w-5 text-muted-foreground animate-pulse" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 
                        id="waiting-heading"
                        className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide"
                      >
                        Awaiting Solution
                      </h2>
                      <p className="text-muted-foreground">
                        The clinical answer will be revealed at 8:00 PM daily
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        ) : (
          <section 
            className="text-center py-12 sm:py-16 animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-medical-crimson/10 to-medical-crimson/20 rounded-3xl mb-6">
              <Clock className="h-10 w-10 text-medical-crimson" aria-hidden="true" />
              <div className="absolute inset-0 bg-medical-crimson/5 rounded-3xl animate-pulse"></div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Preparing Today's Challenge
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-2 max-w-md mx-auto">
              Daily medical queries are available from 9:00 AM to 11:59 PM
            </p>
            <p className="text-sm text-muted-foreground">
              Return at 9:00 AM for your next clinical challenge
            </p>
          </section>
        )}
      </main>
    </div>
  );
};

export default QueryOfTheDay;