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
    <Card className="p-8 bg-white shadow-lg border-0 rounded-2xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Database className="h-6 w-6 text-medical-text" />
            <h3 className="text-xl font-semibold text-medical-text">
              Dataset Access
            </h3>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={handleDownload}
            className="w-full bg-medical-crimson hover:bg-medical-crimson-dark text-white font-medium py-3 flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Dataset (SQL)
          </Button>
          
          <Button 
            onClick={handlePhysioNetDetails}
            variant="outline"
            className="w-full py-3 flex items-center justify-center gap-2 border-medical-crimson text-medical-crimson hover:bg-medical-crimson hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            PhysioNet Details
          </Button>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Settings className="h-5 w-5 text-medical-crimson mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-medical-crimson mb-2">
                🔧 Restore in pgAdmin:
              </h4>
              <ol className="text-sm text-medical-text space-y-1">
                <li>1. Open pgAdmin and connect to your server</li>
                <li>2. Right-click on "Databases" → "Create Database"</li>
                <li>3. Name it "medical_queries"</li>
                <li>4. Right-click new database → "Restore"</li>
                <li>5. Select the downloaded SQL file</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DatasetDownload;