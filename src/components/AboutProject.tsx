import { Card } from "@/components/ui/card";

const AboutProject = () => {
  return (
    <section className="py-16 px-4">
      {/* Gradient Background Container */}
      <div className="bg-gradient-to-b from-medical-crimson to-medical-crimson/70 rounded-3xl p-8">
        <div className="max-w-4xl mx-auto">
          {/* White Card Container */}
          <Card className="bg-white rounded-2xl shadow-xl p-8 border-0">
            <div className="text-center space-y-6">
               {/* Title */}
               <div className="mb-8">
                 <h2 className="text-3xl font-bold text-foreground">
                   Daily Medical Challenge
                 </h2>
               </div>

              {/* Body Text */}
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto font-inter">
                This platform provides daily medical queries sourced from clinical datasets to help healthcare professionals and students enhance their diagnostic and analytical skills.
              </p>

              {/* Source Line */}
              <p className="text-muted-foreground text-base leading-relaxed pt-4 border-t border-border/20">
                Data sourced from{" "}
                <a
                  href="https://physionet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-600/30 hover:decoration-blue-700 transition-colors"
                >
                  PhysioNet
                </a>
                {" "}– A repository of freely-available medical research data
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;