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
            <Database className="h-6 w-6 text-gray-700" />
            <h3 className="text-xl font-semibold text-gray-900">
              Dataset Access
            </h3>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={handleDownload}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Dataset (SQL)
          </Button>
          
          <Button 
            onClick={handlePhysioNetDetails}
            variant="outline"
            className="w-full py-3 flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            PhysioNet Details
          </Button>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Settings className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">
                🔧 Restore in pgAdmin:
              </h4>
              <ol className="text-sm text-orange-700 space-y-1">
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