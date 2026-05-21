import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Search, X, Book, Sparkles, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const dictionary = [
  { term: "Ab Initio", definition: "A Latin term meaning 'from the beginning.' Often used in contracts that are invalid from the start.", category: "Latin Term" },
  { term: "Affidavit", definition: "A written statement confirmed by oath or affirmation, for use as evidence in court.", category: "Procedure" },
  { term: "Amicus Curiae", definition: "An impartial adviser to a court of law in a particular case (Friend of the court).", category: "Latin Term" },
  { term: "Bail", definition: "The temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged to guarantee their appearance.", category: "Criminal" },
  { term: "Cognizable Offense", definition: "An offense in which a police officer has the authority to make an arrest without a warrant.", category: "Criminal" },
  { term: "Decree", definition: "An official order issued by a legal authority; the final order of a court in a suit.", category: "Civil" },
  { term: "Ex Parte", definition: "A proceeding where only one party is present or represented.", category: "Latin Term" },
  { term: "Habeas Corpus", definition: "A writ requiring a person under arrest to be brought before a judge or into court, especially to secure their release unless lawful grounds are shown for their detention.", category: "Writ" },
  { term: "Injunction", definition: "A judicial order that restrains a person from beginning or continuing an action invading the legal right of another.", category: "Civil" },
  { term: "Locus Standi", definition: "The right or capacity to bring an action or to appear in a court.", category: "Latin Term" },
  { term: "Mens Rea", definition: "The intention or knowledge of wrongdoing that constitutes part of a crime (Guilty mind).", category: "Latin Term" },
  { term: "PIL", definition: "Public Interest Litigation – legal action initiated in a court of law for the protection of public interest.", category: "Constitutional" },
  { term: "Sub-judice", definition: "A case currently under judicial consideration and therefore prohibited from public discussion.", category: "Latin Term" },
  { term: "Vakalatnama", definition: "A document by which a party authorizes an advocate to represent them in court.", category: "Procedure" },
  { term: "Writ", definition: "A formal written order issued by a court with administrative or judicial jurisdiction.", category: "Writ" },
];

export const LegalDictionarySection = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");

  const letters = ["All", ...Array.from(new Set(dictionary.map(item => item.term[0].toUpperCase()))).sort()];

  const filtered = useMemo(() => {
    return dictionary.filter(item => {
      const matchLetter = activeLetter === "All" || item.term[0].toUpperCase() === activeLetter;
      const matchSearch = item.term.toLowerCase().includes(search.toLowerCase()) || 
                          item.definition.toLowerCase().includes(search.toLowerCase());
      return matchLetter && matchSearch;
    });
  }, [activeLetter, search]);

  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden" id="dictionary">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 mb-6">
              <Book className="w-3.5 h-3.5 text-saffron" />
              <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">Terminology</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
              Legal <span className="text-gradient">Dictionary</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-xl font-medium leading-relaxed">
              Demystifying complex legal jargon. Search through common terms used in Indian courts and legal documents.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="w-full lg:max-w-md">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-saffron/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
              <div className="relative flex items-center h-14 bg-white/[0.03] border border-white/10 rounded-2xl px-5 backdrop-blur-xl">
                <Search className="w-4 h-4 text-white/20 mr-4" />
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Seach legal terms (e.g. Affidavit, PIL)..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm font-medium placeholder:text-white/20"
                />
                {search && (
                  <button onClick={() => setSearch("")}>
                    <X className="w-4 h-4 text-white/20 hover:text-white" />
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.term} delay={i * 30}>
              <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Languages className="w-20 h-20 text-saffron" />
                </div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-lg bg-saffron/10 border border-saffron/20 text-[9px] font-black text-saffron uppercase tracking-widest mb-4">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-saffron transition-colors">
                    {item.term}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {item.definition}
                  </p>
                  
                  <button 
                    onClick={() => {
                        window.dispatchEvent(
                            new CustomEvent('open-vidhi-sahayak', { 
                                detail: { prompt: `Deep dive: Explain the legal term "${item.term}" in simple words and give real-life examples of its usage.` } 
                            })
                        );
                    }}
                    className="mt-8 flex items-center gap-2 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-saffron transition-colors"
                  >
                    Contextual AI Analysis <Sparkles className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mx-auto mb-6">
                <Book className="w-10 h-10 text-white/10" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">No terms found</h3>
              <p className="text-white/30">Try a different search query or filter by letter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
