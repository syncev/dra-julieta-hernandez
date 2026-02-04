import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Clock, Heart } from "lucide-react";
import officePresencial from "@/assets/office-presencial.jpg";
import officeRemote from "@/assets/office-remote.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/2616956909?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta";
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="min-h-screen pt-20 lg:pt-0 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-0">
          {/* Content */}
          <div className="order-2 lg:order-1 lg:col-span-2 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-secondary-foreground">
                +7 años de experiencia
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Tu bienestar mental es{" "}
              <span className="text-primary">mi prioridad</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Atención psiquiátrica profesional y empática. Te acompaño en el camino hacia una vida más plena y equilibrada con atencion. 
              <span className="text-primary font-bold"> presencial </span> 
              y
              <span className="text-primary font-bold"> virtual</span>.
              Solo adultos 18+ años
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="cta" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Agendar Consulta por WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#sobre-mi">Conocer Más</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            {/* <div className="grid grid-cols-3 gap-4 lg:gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-display text-2xl lg:text-3xl font-semibold text-foreground">+2000</span>
                </div>
                <span className="font-body text-sm text-muted-foreground">Pacientes atendidos</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="font-display text-2xl lg:text-3xl font-semibold text-foreground">98%</span>
                </div>
                <span className="font-body text-sm text-muted-foreground">Satisfacción</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="font-display text-2xl lg:text-3xl font-semibold text-foreground">7+</span>
                </div>
                <span className="font-body text-sm text-muted-foreground">Años de experiencia</span>
              </div>
            </div> */}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/4]">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              
              <div className="relative w-full h-full rounded-3xl shadow-card overflow-hidden">
                <img
                  src={officePresencial}
                  alt="Consultorio psiquiátrico presencial"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    currentImage === 0 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <img
                  src={officeRemote}
                  alt="Consultorio psiquiátrico virtual"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    currentImage === 1 ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Respuesta rápida</p>
                    <p className="font-body text-xs text-muted-foreground">Vía WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
