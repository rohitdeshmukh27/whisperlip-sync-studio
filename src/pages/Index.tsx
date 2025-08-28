import Hero from "@/components/Hero";
import ProjectFlow from "@/components/ProjectFlow";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProjectFlow />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
