import QueryOfTheDay from "@/components/QueryOfTheDay";
import SubscriptionForm from "@/components/SubscriptionForm";
import DatasetDownload from "@/components/DatasetDownload";
import AboutProject from "@/components/AboutProject";
import { Stethoscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Premium Header */}
      <header className="relative bg-gradient-primary overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-dark/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-6 lg:py-32">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Stethoscope className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Health Care Analysis
                <span className="block text-primary-light">HQ</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Elevate your medical expertise with daily curated clinical challenges from real datasets. 
              <span className="block mt-2 font-medium">Questions at 9 AM • Solutions at 8 PM</span>
            </p>
            
            {/* CTA section */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white/90 text-sm font-medium">🎯 Daily Clinical Challenges</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white/90 text-sm font-medium">📊 Real Clinical Data</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white/90 text-sm font-medium">🏥 For Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Premium Layout */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Query of the Day */}
          <div className="lg:col-span-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <QueryOfTheDay />
          </div>

          {/* Right Column - Subscription & Dataset */}
          <div className="lg:col-span-4 space-y-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <SubscriptionForm />
            <DatasetDownload />
          </div>
        </div>
      </main>

      {/* About Section with Premium Styling */}
      <section className="animate-slide-up" style={{animationDelay: '0.6s'}}>
        <AboutProject />
      </section>
    </div>
  );
};

export default Index;
