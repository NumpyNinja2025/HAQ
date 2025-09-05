import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Database } from "lucide-react";

const DatasetDownload = () => {
  const handleDownload = () => {
    // In a real app, this would trigger the actual download
    window.open("https://physionet.org/", "_blank");
  };

  return (
    <Card className="p-8 rounded-2xl shadow-lg bg-card border-0">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-medical-blue-light rounded-full">
            <Database className="h-8 w-8 text-medical-blue" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            Healthcare Dataset
          </h3>
          <p className="text-muted-foreground">
            Access comprehensive medical datasets for research and analysis
          </p>
        </div>
        
        <Button 
          onClick={handleDownload}
          className="bg-medical-blue hover:bg-medical-blue/90 text-white font-medium px-8 py-3"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Dataset
        </Button>
        
        <div className="mt-6 p-4 bg-muted rounded-xl">
          <p className="text-sm text-muted-foreground font-mono">
            <strong>Restore instructions:</strong><br />
            pg_restore -U postgres -d mydb dataset.sql
          </p>
        </div>
        
        <p className="text-xs text-muted-foreground">
          📊 Datasets provided by PhysioNet - A repository of freely-available medical research data
        </p>
      </div>
    </Card>
  );
};

export default DatasetDownload;