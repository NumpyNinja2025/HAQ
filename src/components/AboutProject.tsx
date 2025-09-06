import { Card } from "@/components/ui/card";

const AboutProject = () => {
  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
          This platform provides daily medical queries sourced from clinical datasets to help healthcare professionals and students enhance their diagnostic and analytical skills.
        </p>
        
        <p className="text-slate-500 text-sm mt-6">
          Data sourced from{" "}
          <a
            href="https://physionet.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
          >
            PhysioNet
          </a>
          {" "} – A repository of freely-available medical research data
        </p>
      </div>
    </section>
  );
};

export default AboutProject;