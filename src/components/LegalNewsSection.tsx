import { ScrollReveal } from "@/components/ScrollReveal";
import { Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";

const newsItems = [
  {
    id: 1,
    title: "Nirbhaya Case: Supreme Court Upholds Death Penalty for All Four Convicts",
    category: "Criminal Law",
    date: "2020",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
    summary: "The landmark 2012 Delhi gang rape case that led to sweeping criminal law reforms including the Criminal Law (Amendment) Act, 2013. All four convicts were executed in March 2020.",
    tags: ["IPC 376", "Death Penalty", "Criminal Reform"],
  },
  {
    id: 2,
    title: "Ayodhya Verdict: SC Awards Disputed Land for Ram Temple Construction",
    category: "Constitutional Law",
    date: "2019",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    summary: "A five-judge Constitution bench unanimously ruled in the decades-old Babri Masjid-Ram Janmabhoomi title dispute, awarding the 2.77-acre site to the Hindu side and directing 5 acres of alternate land for a mosque.",
    tags: ["Article 142", "Civil Dispute", "Land Title"],
  },
  {
    id: 3,
    title: "Bilkis Bano Case: SC Quashes Remission of 11 Convicts",
    category: "Criminal Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    summary: "The Supreme Court overturned the premature release of 11 convicts in the 2002 Gujarat riots gang rape and murder case, ordering them to surrender and return to prison.",
    tags: ["Remission Policy", "CrPC 432", "Gujarat Riots"],
  },
  {
    id: 4,
    title: "Article 370 Abrogation Upheld by Supreme Court",
    category: "Constitutional Law",
    date: "2023",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&h=400&fit=crop",
    summary: "A five-judge bench unanimously upheld the Centre's 2019 decision to abrogate Article 370, which granted special status to Jammu & Kashmir, and directed elections by September 2024.",
    tags: ["Article 370", "J&K", "Federalism"],
  },
  {
    id: 5,
    title: "Electoral Bonds Scheme Struck Down as Unconstitutional",
    category: "Election Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    summary: "The Supreme Court unanimously struck down the Electoral Bonds scheme as violative of the right to information under Article 19(1)(a), ordering disclosure of all bond purchase and encashment data.",
    tags: ["Article 19", "RTI", "Electoral Reform"],
  },
  {
    id: 6,
    title: "Bulldozer Demolitions: SC Lays Down Nationwide Guidelines",
    category: "Property Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    summary: "The Supreme Court issued pan-India guidelines against arbitrary demolitions of properties of accused persons, stating that executive cannot become the judge and demolish properties as punishment.",
    tags: ["Article 21", "Due Process", "Property Rights"],
  },
  {
    id: 7,
    title: "Unnao Rape Case: Life Imprisonment for Former MLA Kuldeep Sengar",
    category: "Criminal Law",
    date: "2019",
    image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=600&h=400&fit=crop",
    summary: "A Delhi court convicted former BJP MLA Kuldeep Singh Sengar for raping a minor in Unnao, sentencing him to life imprisonment. The case highlighted institutional failures in protecting victims.",
    tags: ["POCSO Act", "IPC 376", "Political Crime"],
  },
  {
    id: 8,
    title: "Same-Sex Marriage Petition: SC Declines Legal Recognition",
    category: "Civil Rights",
    date: "2023",
    image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&h=400&fit=crop",
    summary: "A five-judge Constitution bench declined to legally recognize same-sex marriages but recognized queer couples' right to cohabit. The court left the legislative route open for Parliament.",
    tags: ["Article 21", "Article 14", "LGBTQ Rights"],
  },
  {
    id: 9,
    title: "Pegasus Spyware: SC Orders Expert Committee Investigation",
    category: "Privacy Law",
    date: "2021",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
    summary: "The Supreme Court appointed a technical committee to investigate allegations of government surveillance using Pegasus spyware, underlining the fundamental right to privacy under Article 21.",
    tags: ["Article 21", "Right to Privacy", "Surveillance"],
  },
  {
    id: 10,
    title: "CAA Challenge: Supreme Court Upholds Citizenship Amendment Act",
    category: "Constitutional Law",
    date: "2025",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
    summary: "The Supreme Court upheld the constitutional validity of the Citizenship Amendment Act (CAA) 2019 while emphasizing that it does not strip citizenship from any existing citizen of India.",
    tags: ["Article 14", "Citizenship", "NRC"],
  },
  {
    id: 11,
    title: "Manipur Violence: SC Monitors Relief & Rehabilitation Efforts",
    category: "Human Rights",
    date: "2023-2024",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&h=400&fit=crop",
    summary: "The Supreme Court took suo motu cognizance of ethnic violence in Manipur, ordering CBI investigation and monitoring rehabilitation of displaced persons across the state.",
    tags: ["Article 21", "NHRC", "Ethnic Violence"],
  },
  {
    id: 12,
    title: "Chandigarh Mayoral Election: SC Orders Re-election After Vote Tampering",
    category: "Election Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop",
    summary: "The Supreme Court declared the presiding officer's conduct as 'murder of democracy' after ballot defacing in Chandigarh mayoral polls, ordering fresh elections and criminal proceedings.",
    tags: ["Election Commission", "Democracy", "Municipal Law"],
  },
];

const categories = ["All", "Criminal Law", "Constitutional Law", "Civil Rights", "Election Law", "Property Law", "Privacy Law", "Human Rights"];

export const LegalNewsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = activeCategory === "All" ? newsItems : newsItems.filter(n => n.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="py-24 bg-background" id="legal-news">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Legal Headlines</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">Landmark Cases & Legal News</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore the most significant legal cases and rulings that have shaped India's legal landscape.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-saffron text-white shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-saffron/10 hover:text-saffron"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visible.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 60}>
              <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-border/50 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-saffron/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-navy/70 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-saffron transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-green-india-pale text-green-india text-[11px] font-medium px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-saffron text-sm font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-navy text-white rounded-full font-semibold hover:bg-navy/90 transition-colors"
            >
              Load More Cases
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
