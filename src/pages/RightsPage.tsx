import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RightsCard } from '@/components/RightsCard';
import { EmptyState } from '@/components/EmptyState';
import { Disclaimer } from '@/components/Disclaimer';
import { rightsArticlesData } from '@/data/rightsArticles';
import { Search, BookOpen } from 'lucide-react';

const RightsPage = () => {
  const [search, setSearch] = useState('');

  const filtered = rightsArticlesData.filter((article) =>
    search === '' ||
    article.title.toLowerCase().includes(search.toLowerCase()) ||
    article.description.toLowerCase().includes(search.toLowerCase()) ||
    article.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-pale text-navy text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Your Rights
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Know Your Rights</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understand your fundamental rights as an Indian citizen, explained in simple language.
          </p>
        </div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search rights categories..."
            className="w-full h-11 pl-10 pr-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((article) => (
              <RightsCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No rights articles found"
            description="Try adjusting your search."
            action={{ label: 'Clear Search', onClick: () => setSearch('') }}
          />
        )}

        <Disclaimer className="mt-12" />
      </div>
      <Footer />
    </div>
  );
};

export default RightsPage;
