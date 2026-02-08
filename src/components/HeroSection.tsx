import { Linkedin, Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow">
              <img
                src={profilePhoto}
                alt="Yokeshwaran"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-display text-xl font-bold">YW</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
              Textile Technology Student
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Yokeshwaran</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about web development and exploring AI tools. I am also an SSC CGL aspirant, focused on building a disciplined and successful career.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/yokeshwaran-p-059385290/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Yokeshsumi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="mailto:yokeshrohit2005@gmail.com"
                className="p-3 border border-border text-muted-foreground rounded-full hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
