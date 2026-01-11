import { Brain, Heart, Users, Moon, Pill, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const whatsappLink = "https://wa.me/2616956909?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20sus%20servicios";

  const services = [
    {
      icon: Brain,
      title: "Trastornos de Ansiedad",
      description: "Tratamiento para ansiedad generalizada, ataques de pánico, fobias y TOC.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Heart,
      title: "Depresión",
      description: "Abordaje integral de la depresión, distimia y trastornos del ánimo.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Moon,
      title: "Trastornos del Sueño",
      description: "Evaluación y tratamiento del insomnio y otros problemas del sueño.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Problemas de Adicciones y otras Patologías",
      description: "Acompañamiento en adicciones y otras problematicas.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Pill,
      title: "Psicofarmacología",
      description: "Manejo responsable de medicación cuando es necesario.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Baby,
      title: "Salud Mental Perinatal",
      description: "Acompañamiento durante el embarazo, posparto y maternidad.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Ofrezco atención especializada para diversas condiciones de salud mental, siempre con un enfoque personalizado y empático.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-[#f5f5ff] border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-lg text-muted-foreground mb-6">
            ¿No encontrás tu situación específica? Escribime y conversamos.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Consultá por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
