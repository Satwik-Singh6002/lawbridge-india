import { ScrollReveal } from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Law Student, Delhi University",
    quote: "ADHIKAR helped me understand the BNS provisions in minutes. The AI chatbot explains complex sections better than many textbooks.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "RTI Activist, Bihar",
    quote: "The RTI filing guide and government portal links saved me hours. Everything I need is in one place.",
    rating: 5,
  },
  {
    name: "Fatima Sheikh",
    role: "Social Worker, Maharashtra",
    quote: "Being able to read about women's rights in Marathi made all the difference for the communities I work with.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="container">
        <ScrollReveal className="text-center mb-14">
          <p className="text-saffron font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">Trusted by Citizens</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight">
            What People Are Saying
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 80}>
              <div className="bg-card rounded-2xl p-6 sm:p-7 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-saffron text-saffron" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                  "{item.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-border/50">
                  <p className="font-semibold text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
