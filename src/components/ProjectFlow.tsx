import { Upload, Settings, Download, ArrowRight } from "lucide-react";

const ProjectFlow = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Audio + Video",
      description: "Select your audio and video files to get started"
    },
    {
      icon: Settings,
      title: "Choose Model",
      description: "Pick from our advanced AI lip-sync models"
    },
    {
      icon: Download,
      title: "Get Lip-Synced Result",
      description: "Download your perfectly synchronized video"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your videos with AI-powered lip-sync in just three simple steps
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Step Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500" />
                <div className="relative bg-gradient-dark border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105 min-w-[280px]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 shadow-3d">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-glow">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Arrow (hidden on last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFlow;