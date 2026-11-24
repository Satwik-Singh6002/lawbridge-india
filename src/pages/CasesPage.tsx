import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CaseCard } from '@/components/CaseCard';
import { EmptyState } from '@/components/EmptyState';
import { Disclaimer } from '@/components/Disclaimer';
import { casesData, caseCategories } from '@/data/cases';
import { Search, Scale } from 'lucide-react';

const CasesPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = casesData.filter((c) => {
    const matchesSearch = search === '' ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.summary.toLowerCase().includes(search.toLowerCase()) ||
      c.court.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory || c.court === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-pale text-saffron text-xs font-bold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            Legal Knowledge
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Important Cases Explained</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understand landmark Supreme Court and High Court judgments in simple language.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cases by name or topic..."
              className="w-full h-11 pl-10 pr-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'All' ? 'bg-navy text-white' : 'bg-muted text-muted-foreground hover:bg-navy-pale hover:text-navy'
              }`}
            >
              All
            </button>
            {caseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat ? 'bg-navy text-white' : 'bg-muted text-muted-foreground hover:bg-navy-pale hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CaseCard key={c.id} {...c} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No cases found"
            description="Try adjusting your search query or category filter."
            action={{ label: 'Clear Filters', onClick: () => { setSearch(''); setSelectedCategory('All'); } }}
          />
        )}

        <Disclaimer className="mt-12" />
      </div>
      <Footer />
    </div>
  );
};

export default CasesPage;
