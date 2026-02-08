import { Target, Lightbulb, Leaf } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Web Development",
      description: "Passionate about building modern web applications",
    },
    {
      icon: Target,
      title: "AI Exploration",
      description: "Actively exploring AI tools and their applications",
    },
    {
      icon: Leaf,
      title: "SSC CGL Aspirant",
      description: "Focused on building a disciplined and successful career",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Get to Know Me
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 lg:p-12 mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am <span className="text-foreground font-medium">Yokeshwaran P</span>, pursuing B.Tech in Textile Technology at 
              <span className="text-foreground font-medium"> Kumaraguru College of Technology</span>. I am passionate about 
              web development and exploring AI tools. I am also an SSC CGL aspirant, focused on building a 
              disciplined and successful career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
