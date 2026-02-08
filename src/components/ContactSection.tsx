import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yokeshrohit2005@gmail.com",
      href: "mailto:yokeshrohit2005@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7812877209",
      href: "tel:+917812877209",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "yokeshwaran-p",
      href: "https://www.linkedin.com/in/yokeshwaran-p-059385290/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Yokeshsumi",
      href: "https://github.com/Yokeshsumi",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Contact Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/50 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-sm break-all">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <a
              href="mailto:yokeshrohit2005@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
