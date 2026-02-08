import { Code, Brain } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Java", level: 75 },
    { name: "Python", level: 80 },
    { name: "MATLAB", level: 70 },
  ];

  const softSkills = [
    "Analytical Thinking",
    "Review Paper Analysis",
    "Team Management",
    "Leadership",
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            What I Bring
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Skills
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-primary" size={24} />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Technical Skills
              </h3>
            </div>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-primary" size={24} />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
