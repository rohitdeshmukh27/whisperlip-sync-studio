import { Card } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sujit N Deshpande",
      role: "Mentor",
      image: "https://www.vupune.ac.in/images/Faculty/dr-sujit-deshpande.jpg",
    },
    {
      name: "Ananya Payas",
      role: "Team Member",
      image: "/ananya.jpeg",
    },
    {
      name: "Chaitanya Ambade",
      role: "Team Member",
      image: "/chaitanya.jpeg",
    },
    {
      name: "Lakxhit Chaurasia",
      role: "Team Member",
      image: "/lakxhit.jpeg",
    },
    {
      name: "Rohit Deshmukh",
      role: "Team Lead",
      image: "/rohit.jpg",
    },
    {
      name: "Ronit Jain",
      role: "Team Member",
      image: "/ronit.jpeg",
    },
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
                  <p className="text-primary font-medium">{member.role}</p>

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
