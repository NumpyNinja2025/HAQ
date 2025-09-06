import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, Database, ExternalLink, Settings, Server, FolderPlus, FileText, Upload, Play } from "lucide-react";

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
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="w-full py-3 flex items-center justify-center gap-2 border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Settings className="h-4 w-4" />
                Setup Guide
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-white flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-400" />
                  pgAdmin Database Setup Guide
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-semibold">1</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Server className="h-4 w-4 text-blue-400" />
                      <span className="font-medium">Connect to Server</span>
                    </div>
                    <p className="text-slate-300 text-sm">Open pgAdmin and connect to your PostgreSQL server.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-semibold">2</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FolderPlus className="h-4 w-4 text-green-400" />
                      <span className="font-medium">Create Database</span>
                    </div>
                    <p className="text-slate-300 text-sm">Right-click on "Databases" → "Create" → "Database..."</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-semibold">3</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium">Name Database</span>
                    </div>
                    <p className="text-slate-300 text-sm">Name the database <code className="bg-slate-600 px-1 rounded">medical_queries</code> and click "Save".</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-semibold">4</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Upload className="h-4 w-4 text-purple-400" />
                      <span className="font-medium">Start Restore</span>
                    </div>
                    <p className="text-slate-300 text-sm">Right-click the new database → "Restore..."</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-semibold">5</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Play className="h-4 w-4 text-green-400" />
                      <span className="font-medium">Complete Restore</span>
                    </div>
                    <p className="text-slate-300 text-sm">Select the downloaded SQL file and click "Restore" to import the dataset.</p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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