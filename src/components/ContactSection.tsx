import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const whatsappLink = "https://wa.me/2616956909?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Av España 934 PB 1",
      subDetails: "Ciudad de Mendoza",
      link: "https://www.google.com/maps/search/?api=1&query=Av+España+934,+Ciudad+de+Mendoza"
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      details: "Lunes a Viernes",
      subDetails: "10:00 - 19:00 hs"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+54 261 695 6909",
      subDetails: "WhatsApp disponible"
    },
    {
      icon: Mail,
      title: "Email",
      details: "julietaher96@gmail.com ",
      subDetails: "Respuesta en 24hs"
    }
  ];

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Contacto
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Estoy para ayudarte
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Dar el primer paso es lo más importante. No dudes en contactarme para agendar una consulta o resolver cualquier inquietud que tengas. La confidencialidad está garantizada.
            </p>

            <div className="bg-card rounded-3xl p-8 shadow-card mb-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Agenda tu consulta
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                La forma más rápida de contactarme es a través de WhatsApp. Respondé con tu disponibilidad y coordinaremos un turno.
              </p>
              <Button variant="cta" size="xl" className="w-full" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Agendar por WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => {
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-body font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="font-body text-foreground">
                    {info.details}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {info.subDetails}
                  </p>
                </>
              );

              if (info.link) {
                return (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 block text-left"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
