import { Card } from "@/components/ui/card";
import teamAlex from "@/assets/team-alex.jpg";
import teamPriya from "@/assets/team-priya.jpg";
import teamDavid from "@/assets/team-david.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamRaj from "@/assets/team-raj.jpg";
import teamMaya from "@/assets/team-maya.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead AI Engineer",
      image: teamAlex
    },
    {
      name: "Priya Sharma",
      role: "ML Research Scientist",
      image: teamPriya
    },
    {
      name: "David Kumar",
      role: "Full Stack Developer",
      image: teamDavid
    },
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      image: teamSarah
    },
    {
      name: "Raj Patel",
      role: "DevOps Engineer",
      image: teamRaj
    },
    {
      name: "Maya Singh",
      role: "Audio Processing Expert",
      image: teamMaya
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind WhisperLip's cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110" />
              
              <Card className="relative bg-gradient-dark border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.role}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 w-12 h-1 bg-gradient-primary rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;