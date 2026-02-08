import { GraduationCap, School } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "B.Tech Textile Technology",
      institution: "Kumaraguru College of Technology, Coimbatore",
      period: "2023 - 2027 (Ongoing)",
      status: "3rd Year",
      highlight: true,
    },
    {
      icon: School,
      degree: "Higher Secondary (Grade 12)",
      institution: "Sri Vijay Matric Higher Secondary School",
      period: "2009 - 2023",
      status: "Completed",
      highlight: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Academic Journey
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className={`glass-card rounded-2xl p-6 lg:p-8 flex gap-6 items-start ${
                item.highlight ? "border-primary/30" : ""
              }`}
            >
              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${
                  item.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <item.icon size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.degree}
                  </h3>
                  {item.highlight && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {item.status}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-1">{item.institution}</p>
                <p className="text-sm text-muted-foreground/70">{item.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
