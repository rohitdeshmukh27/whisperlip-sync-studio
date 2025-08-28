import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Upload, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Convert = () => {
  const navigate = useNavigate();
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    if (!audioFile || !videoFile || !selectedModel) return;

    setIsLoading(true);

    // Simulate processing time
    setTimeout(() => {
      setIsLoading(false);
      setShowResult(true);
    }, 4000);
  };

  const models = [
    "Wav2Lip ONNX HQ",
    "OpenTalker/SadTalker (GUI)",
    "Wav2Lip - Rudrabha",
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-foreground transition-smooth"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Convert Your Media
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your audio and video files, select a model, and let AI do
              the magic
            </p>
          </div>

          {!isLoading && !showResult && (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Audio Upload */}
              <Card className="p-6 bg-gradient-dark border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Select Audio</h3>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="audio-upload"
                  />
                  <label
                    htmlFor="audio-upload"
                    className="inline-block cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg transition-smooth"
                  >
                    {audioFile ? audioFile.name : "Choose File"}
                  </label>
                </div>
              </Card>

              {/* Video Upload */}
              <Card className="p-6 bg-gradient-dark border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="text-center">
                  <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Select Video</h3>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="video-upload"
                  />
                  <label
                    htmlFor="video-upload"
                    className="inline-block cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg transition-smooth"
                  >
                    {videoFile ? videoFile.name : "Choose File"}
                  </label>
                </div>
              </Card>

              {/* Model Selection */}
              <Card className="p-6 bg-gradient-dark border-border shadow-card hover:shadow-glow transition-all duration-300">
                <div className="text-center">
                  <div className="h-12 w-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold">
                    AI
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Select Model</h3>
                  <Select
                    value={selectedModel}
                    onValueChange={setSelectedModel}
                  >
                    <SelectTrigger className="w-full bg-secondary border-border">
                      <SelectValue placeholder="Choose AI Model" />
                    </SelectTrigger>
                    <SelectContent>
                      {models.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Processing Your Request...
              </h2>
              <div className="max-w-md mx-auto mb-8">
                <img
                  src="https://cdn-fikdj.nitrocdn.com/BeQKQJEEMTzFulppeCBPmpmURlzfZAZR/assets/images/optimized/rev-b1a63b5/www.insideoutgroup.co.uk/wp-content/uploads/2018/02/Rackspace_Office_Time_Lapse.gif"
                  alt="Processing..."
                  className="w-full rounded-lg shadow-glow"
                />
              </div>
              <p className="text-muted-foreground">
                Our AI models are working their magic. This will take a few
                moments...
              </p>
            </div>
          )}

          {/* Result State */}
          {showResult && (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Your Result is Ready!
              </h2>
              <div className="max-w-md mx-auto mb-8">
                <video
                  controls
                  className="w-full rounded-lg shadow-glow"
                  poster="/placeholder-video.jpg"
                >
                  <source
                    src="/result.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Download Result
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setShowResult(false);
                    setAudioFile(null);
                    setVideoFile(null);
                    setSelectedModel("");
                  }}
                >
                  Start New Conversion
                </Button>
              </div>
            </div>
          )}

          {/* Generate Button */}
          {!isLoading && !showResult && (
            <div className="text-center">
              <Button
                variant="hero"
                size="lg"
                onClick={handleGenerate}
                disabled={!audioFile || !videoFile || !selectedModel}
                className="text-xl px-12 py-6"
              >
                Generate Lip-Sync
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Convert;
