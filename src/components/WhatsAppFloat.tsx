import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.me/2616956909?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300 animate-float"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
