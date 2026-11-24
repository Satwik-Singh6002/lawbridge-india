import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Disclaimer } from '@/components/Disclaimer';
import { complaintGuidesData, complaintCategories } from '@/data/complaintGuides';
import { Link } from 'react-router-dom';
import { Search, FileText, ChevronRight, Clock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const ComplaintsPage = () => {
  const [search, setSearch] = useState('');

  const filtered = complaintGuidesData.filter((guide) =>
    search === '' ||
    guide.title.toLowerCase().includes(search.toLowerCase()) ||
    guide.category.toLowerCase().includes(search.toLowerCase()) ||
    guide.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8 md:py-12">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-pale text-saffron text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            Step by Step
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">How to File a Complaint</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Step-by-step guides for filing complaints with the right authorities.
          </p>
        </div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search complaint guides..."
            className="w-full h-11 pl-10 pr-4 bg-white border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((guide) => {
            const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[guide.icon] || LucideIcons.FileText;
            return (
              <Link
                key={guide.id}
                to={`/complaints/${guide.slug}`}
                className="trust-card group block p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-saffron-pale flex items-center justify-center shrink-0 group-hover:bg-saffron group-hover:scale-105 transition-all">
                    <IconComponent className="w-6 h-6 text-saffron group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-saffron uppercase tracking-wider">{guide.category}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-navy transition-colors">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {guide.steps.length} steps
                      </span>
                      <span className="text-xs font-semibold text-navy group-hover:text-saffron transition-colors flex items-center gap-1">
                        View Guide <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Disclaimer className="mt-12" />
      </div>
      <Footer />
    </div>
  );
};

export default ComplaintsPage;
