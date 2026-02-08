import { Briefcase, Users } from "lucide-react";

const ExperienceSection = () => {
  const internships = [
    {
      title: "Spinning Training",
      company: "Santhosh Spinning Mill, Coimbatore",
      period: "December 2024",
      duration: "7 days",
      description: "Hands-on training in spinning operations and textile manufacturing processes.",
    },
    {
      title: "Digital Printing Training",
      company: "Colorjet Digital Printing, Noida",
      period: "June 2025",
      duration: "Upcoming",
      description: "Training program focused on digital textile printing technologies.",
    },
  ];

  const conferences = [
    {
      title: "Industry Conclave on Technology Integrated Textiles and Fashion",
      organization: "Kumaraguru College of Technology",
      date: "March 2025",
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Professional Growth
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Internships */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={24} />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Internships
              </h3>
            </div>
            <div className="space-y-4">
              {internships.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 border-l-4 border-l-primary hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-primary">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground text-sm">{item.period}</p>
                      <span className="inline-block mt-1 px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conferences */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={24} />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Conferences
              </h3>
            </div>
            <div className="space-y-4">
              {conferences.map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{item.organization}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
