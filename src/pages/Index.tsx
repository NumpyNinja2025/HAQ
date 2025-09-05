import QueryOfTheDay from "@/components/QueryOfTheDay";
import SubscriptionForm from "@/components/SubscriptionForm";
import DatasetDownload from "@/components/DatasetDownload";
import { Stethoscope } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Stethoscope className="h-12 w-12 text-white" />
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Daily Medical Query
          </h1>
        </div>
        <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
          Enhance your medical knowledge with our daily curated questions from real clinical datasets. 
          Subscribe to receive queries at 9 AM and answers at 8 PM.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Query of the Day (spans 2 columns) */}
          <div className="lg:col-span-2">
            <QueryOfTheDay />
          </div>

          {/* Right Column - Subscription & Dataset */}
          <div className="space-y-8">
            <SubscriptionForm />
            <DatasetDownload />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
