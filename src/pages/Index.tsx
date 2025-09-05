import QueryOfTheDay from "@/components/QueryOfTheDay";
import SubscriptionForm from "@/components/SubscriptionForm";
import DatasetDownload from "@/components/DatasetDownload";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Daily Medical Query 🩺
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn something new every day with evidence-based medical insights
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16 space-y-12">
        {/* Query of the Day */}
        <section>
          <QueryOfTheDay />
        </section>

        {/* Subscription Form */}
        <section>
          <SubscriptionForm />
        </section>

        {/* Dataset Download */}
        <section>
          <DatasetDownload />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Health care Analysis HQ (HAQ) - Advancing medical knowledge through daily learning
        </p>
      </footer>
    </div>
  );
};

export default Index;
