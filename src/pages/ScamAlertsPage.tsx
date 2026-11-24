import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScamCard } from '@/components/ScamCard';
import { EmptyState } from '@/components/EmptyState';
import { Disclaimer } from '@/components/Disclaimer';
import { scamAlertsData, scamCategories } from '@/data/scamAlerts';
import { Search, AlertTriangle, Filter } from 'lucide-react';

const ScamAlertsPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = scamAlertsData.filter((scam) => {
    const matchesSearch = search === '' ||
      scam.title.toLowerCase().includes(search.toLowerCase()) ||
      scam.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || scam.category === selectedCategory;
    return matchesSearch && matchesCategory && scam.isPublished;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-alert-pale text-alert text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            Stay Protected
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Scam Alert Center</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Learn how common scams work and how to protect yourself. Stay informed, stay safe.
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
              placeholder="Search scam alerts..."
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
            {scamCategories.map((cat) => (
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

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((scam) => (
              <ScamCard key={scam.id} {...scam} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No scam alerts found"
            description="Try adjusting your search or category filter."
            action={{ label: 'Clear Filters', onClick: () => { setSearch(''); setSelectedCategory('All'); } }}
          />
        )}

        <Disclaimer className="mt-12" />
      </div>
      <Footer />
    </div>
  );
};

export default ScamAlertsPage;
