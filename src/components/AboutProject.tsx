import { Card } from "@/components/ui/card";

const AboutProject = () => {
  return (
    <section className="py-20 px-6">
      {/* Premium Background Container */}
      <div className="bg-gradient-primary rounded-3xl p-12 relative overflow-hidden shadow-premium">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Premium Card Container */}
          <div className="bg-gradient-surface rounded-3xl shadow-xl p-12 border border-white/10 backdrop-blur-sm">
            <div className="text-center space-y-8">
               {/* Title */}
               <div className="mb-10">
                 <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                   Daily Medical Challenge
                 </h2>
                 <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto"></div>
               </div>

               {/* Body Text */}
               <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
                 This platform provides daily medical queries sourced from clinical datasets to help healthcare professionals and students enhance their diagnostic and analytical skills.
               </p>

               {/* Source Line */}
               <div className="pt-8 border-t border-border/20">
                 <p className="text-muted-foreground text-lg leading-relaxed">
                   Data sourced from{" "}
                   <a
                     href="https://physionet.org"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-primary hover:text-primary-dark font-semibold underline decoration-primary/30 hover:decoration-primary-dark transition-all duration-300 hover:scale-105 inline-block"
                   >
                     PhysioNet
                   </a>
                   {" "}– A repository of freely-available medical research data
                 </p>
               </div>

               {/* Features grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/10">
                 <div className="text-center space-y-3">
                   <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                     <span className="text-primary font-bold">🎯</span>
                   </div>
                   <h3 className="font-semibold text-foreground">Daily Challenges</h3>
                   <p className="text-sm text-muted-foreground">Fresh clinical scenarios every day</p>
                 </div>
                 <div className="text-center space-y-3">
                   <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                     <span className="text-primary font-bold">📊</span>
                   </div>
                   <h3 className="font-semibold text-foreground">Real Data</h3>
                   <p className="text-sm text-muted-foreground">Authentic clinical datasets</p>
                 </div>
                 <div className="text-center space-y-3">
                   <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                     <span className="text-primary font-bold">🏥</span>
                   </div>
                   <h3 className="font-semibold text-foreground">Professional Focus</h3>
                   <p className="text-sm text-muted-foreground">For healthcare professionals</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;