import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BlurText from "@/components/ui/blur-text";
import SplitText from "@/components/ui/split-text";
import Particles from "@/components/ui/particles";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <Particles className="absolute inset-0" quantity={80} color="#ffffff" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <BlurText
          text="Welcome to WhisperLip"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          wordClassName="bg-gradient-primary bg-clip-text text-transparent"
          baseDelay={0.1}
          wordDelay={0.25}
        />

        <SplitText
          text="A tool to convert lip-sync with Hindi audio using any model of your choice."
          className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          delay={1.5}
        />

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
