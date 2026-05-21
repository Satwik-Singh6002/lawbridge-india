import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Search, X, TrendingUp } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

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
  {
    id: 13,
    title: "Sub-classification of SC/ST by States Upheld",
    category: "Constitutional Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&h=400&fit=crop",
    summary: "A seven-judge bench upheld the power of states to create sub-classifications within Scheduled Caste (SC) and Scheduled Tribe (ST) categories for more equitable distribution of reservation benefits.",
    tags: ["Reservation", "Social Justice", "Article 14"],
  },
  {
    id: 14,
    title: "Taxation of Mines and Minerals: State Rights Affirmed",
    category: "Constitutional Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600&h=400&fit=crop",
    summary: "A nine-judge bench ruled that state governments possess the legislative authority to levy taxes on mines and minerals, distinguishing 'royalty' from 'tax.'",
    tags: ["Federalism", "Tax Law", "State Rights"],
  },
  {
    id: 15,
    title: "Private Property and Directive Principles Analyzed",
    category: "Property Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    summary: "A nine-judge bench held that not all privately owned property constitutes 'material resource of the community' under Article 39(b) of the Constitution.",
    tags: ["Article 39(b)", "Private Property", "Fundamental Rights"],
  },
  {
    id: 16,
    title: "Legislator Immunity for Bribery Overruled",
    category: "Criminal Law",
    date: "2024",
    image: "https://images.unsplash.com/photo-1505664173691-03152c1e8469?w=600&h=400&fit=crop",
    summary: "A seven-judge bench held that legislators do not enjoy immunity from criminal prosecution for bribery related to their votes or speeches in the House, overruling a 1998 judgment.",
    tags: ["Corruption", "Legislator Immunity", "Accountability"],
  },
  {
    id: 17,
    title: "Demonetization Policy Upheld by Supreme Court",
    category: "Constitutional Law",
    date: "2023",
    image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd?w=600&h=400&fit=crop",
    summary: "A five-judge bench upheld the 2016 demonetization of ₹500 and ₹1,000 currency notes, ruling that the Union government acted within its legal powers under the RBI Act.",
    tags: ["Economy", "Executive Power", "RBI Act"],
  },
];

const categories = ["All", "Criminal Law", "Constitutional Law", "Civil Rights", "Election Law", "Property Law", "Privacy Law", "Human Rights"];

export const LegalNewsSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    return newsItems.filter(n => {
      const matchCategory = activeCategory === "All" || n.category === activeCategory;
      const matchSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section className="py-24 bg-background" id="legal-news">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("news.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">{t("news.title")}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("news.description")}
          </p>
        </ScrollReveal>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 hide-scrollbar no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={cn(
                    "whitespace-nowrap px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                    activeCategory === cat 
                      ? "bg-saffron text-white shadow-lg shadow-saffron/20" 
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search landmark cases..."
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-white/[0.03] border border-white/5 text-white text-xs font-medium placeholder:text-white/20 focus:outline-none focus:border-saffron/30 transition-all"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                  <X className="w-3 h-3 text-white/20 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
                <Link to={`/news/${item.id}`} className="group relative h-full flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-saffron/90 backdrop-blur-md text-[9px] font-black text-white uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-white/30 text-[10px] font-black uppercase tracking-widest mb-4">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <TrendingUp className="w-3.5 h-3.5 text-saffron" />
                      Landmark
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-saffron transition-colors text-gradient-hover">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-3">
                      {item.summary}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-white/20 uppercase tracking-widest uppercase">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
            </ScrollReveal>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-3 bg-navy text-white rounded-full font-semibold hover:bg-navy/90 transition-colors"
            >
              {t("news.loadMore")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
