import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Database, ExternalLink, Settings } from "lucide-react";

const DatasetDownload = () => {
  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    window.open("https://physionet.org/", "_blank");
  };

  const handlePhysioNetDetails = () => {
    window.open("https://physionet.org/about/", "_blank");
  };

  return (
    <Card className="p-6 bg-slate-800 border border-slate-700 rounded-2xl">
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-white" />
            <h3 className="text-lg font-semibold text-white">Clinical Dataset</h3>
          </div>
          <p className="text-slate-400 text-sm">
            Access the complete medical database for advanced analysis
          </p>
        </div>
        
        <div className="space-y-3">
          <Button 
            onClick={handleDownload}
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 border border-slate-600 flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Dataset
          </Button>
          
          <Button 
            onClick={handlePhysioNetDetails}
            variant="outline"
            className="w-full py-3 flex items-center justify-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <ExternalLink className="h-4 w-4" />
            PhysioNet Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DatasetDownload;