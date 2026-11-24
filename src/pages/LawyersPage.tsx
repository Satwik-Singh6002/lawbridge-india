import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LawyerCard } from '@/components/LawyerCard';
import { EmptyState } from '@/components/EmptyState';
import { Disclaimer } from '@/components/Disclaimer';
import { lawyersData, practiceAreas, lawyerStates, lawyerLanguages } from '@/data/lawyers';
import { Search, Users, MapPin, Briefcase, Globe } from 'lucide-react';

const LawyersPage = () => {
  const [search, setSearch] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const filtered = lawyersData.filter((lawyer) => {
    const matchesSearch = search === '' ||
      lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
      lawyer.city.toLowerCase().includes(search.toLowerCase()) ||
      lawyer.practiceAreas.some(a => a.toLowerCase().includes(search.toLowerCase()));
    const matchesArea = selectedArea === 'All' || lawyer.practiceAreas.includes(selectedArea);
    const matchesState = selectedState === 'All' || lawyer.state === selectedState;
    const matchesLanguage = selectedLanguage === 'All' || lawyer.languages.includes(selectedLanguage);
    return matchesSearch && matchesArea && matchesState && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-india-pale text-green-india text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            Legal Help
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Find a Lawyer</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Search for legal professionals by city, specialization, and language.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="trust-card p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, city, or practice area..."
                className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-navy cursor-pointer"
              >
                <option value="All">All Practice Areas</option>
                {practiceAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-muted border border-border rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-navy cursor-pointer"
              >
                <option value="All">All States</option>
                {lawyerStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">{filtered.length} lawyer{filtered.length !== 1 ? 's' : ''} found</p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lawyer) => (
              <LawyerCard key={lawyer.id} {...lawyer} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No lawyers found"
            description="Try adjusting your search filters."
            action={{ label: 'Clear Filters', onClick: () => { setSearch(''); setSelectedArea('All'); setSelectedState('All'); setSelectedLanguage('All'); } }}
          />
        )}

        <Disclaimer className="mt-12" />
      </div>
      <Footer />
    </div>
  );
};

export default LawyersPage;
