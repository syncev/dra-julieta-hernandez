import { Heart, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/2616956909?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-semibold text-background">
              Dra. Julieta Hernández
            </span>
            <p className="font-body text-sm text-background/60 mt-1">
              Médica Psiquiatra | MN 123456
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="font-body text-sm text-background/80 hover:text-background transition-colors">
              Inicio
            </a>
            <a href="#sobre-mi" className="font-body text-sm text-background/80 hover:text-background transition-colors">
              Sobre Mí
            </a>
            <a href="#servicios" className="font-body text-sm text-background/80 hover:text-background transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="font-body text-sm text-background/80 hover:text-background transition-colors">
              Contacto
            </a>
          </nav>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-body text-sm">WhatsApp</span>
          </a>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8">
          <p className="font-body text-sm text-background/50 text-center flex items-center justify-center gap-1">
            © {currentYear} Dra. Julieta Hernández. Hecho con <Heart className="w-4 h-4 text-accent" /> para tu bienestar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
