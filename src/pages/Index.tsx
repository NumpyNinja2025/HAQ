import QueryOfTheDay from "@/components/QueryOfTheDay";
import SubscriptionForm from "@/components/SubscriptionForm";
import DatasetDownload from "@/components/DatasetDownload";
import { Stethoscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-medical-background">
      {/* Header */}
      <header className="bg-medical-crimson text-white py-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Stethoscope className="h-12 w-12 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Health care Analysis HQ (HAQ)
          </h1>
        </div>
        <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
          Enhance your medical knowledge with our daily curated questions from real clinical datasets. 
          Subscribe to receive queries at 9 AM and answers at 8 PM.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Query of the Day (spans 8 columns) */}
          <div className="lg:col-span-8">
            <QueryOfTheDay />
          </div>

          {/* Right Column - Subscription & Dataset (spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <SubscriptionForm />
            <DatasetDownload />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
