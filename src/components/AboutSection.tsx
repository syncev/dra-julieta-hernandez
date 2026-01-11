import { GraduationCap, Users, ShieldCheck, Stethoscope } from "lucide-react";
import officeImage from "@/assets/Dra-Julieta-Hernandez2.jpg";

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Medicina -  Egresada de la Universidad del Aconcagua, Mendoza - Argentina"
    },
    {
      icon: Stethoscope,
      title: "Especialización",
      description: "Psiquiatria - Residencia en Hospital El Carmen, Mendoza - Argentina"
    },
    {
      icon: Users,
      title: "Enfoque Integral",
      description: "Tratamiento personalizado para cada paciente"
    },
    {
      icon: ShieldCheck,
      title: "Confidencialidad",
      description: "Espacio seguro y de absoluta privacidad"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-3xl"></div>
            <img
              src={officeImage}
              alt="Consultorio de la Dra. Julieta Hernández"
              className="relative rounded-3xl shadow-card w-full object-cover aspect-[4/4]"
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <span className="inline-block font-body text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Sobre Mí
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Comprometida con tu salud mental
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Soy la Dra. Julieta Hernández, psiquiatra con más de 7 años de experiencia acompañando a personas en su camino hacia el bienestar emocional. Mi enfoque combina la medicina basada en evidencia con una mirada humanista, entendiendo que cada persona es única.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Creo firmemente en la importancia de crear un espacio de confianza donde puedas expresarte libremente. Juntos trabajaremos para encontrar las mejores estrategias para tu situación particular.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-background hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-foreground mb-1">
                      {credential.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
