import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Welcome to WhisperLip
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          A tool to convert lip-sync with Hindi audio using any model of your choice.
        </p>
        
        <Button
          variant="hero"
          size="xl"
          onClick={() => navigate("/convert")}
          className="text-2xl px-16 py-8 shadow-3d hover:shadow-glow transform hover:scale-105 transition-spring"
        >
          Click to Convert
        </Button>
      </div>
    </section>
  );
};

export default Hero;