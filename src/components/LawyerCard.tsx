import { Link } from 'react-router-dom';
import { MapPin, Star, ChevronRight, User, CheckCircle } from 'lucide-react';

interface LawyerCardProps {
  id: string;
  name: string;
  slug: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  practiceAreas: string[];
  city: string;
  experience: number;
  languages: string[];
  consultationOptions: string[];
  rating: number;
  reviewCount: number;
}

export function LawyerCard({
  name, slug, verificationStatus, practiceAreas, city,
  experience, languages, consultationOptions, rating, reviewCount
}: LawyerCardProps) {
  return (
    <Link
      to={`/lawyers/${slug}`}
      className="trust-card group block p-6"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-navy-pale flex items-center justify-center shrink-0">
          <User className="w-7 h-7 text-navy" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-bold text-foreground truncate group-hover:text-navy transition-colors">
              {name}
            </h3>
            {verificationStatus === 'verified' && (
              <CheckCircle className="w-4 h-4 text-green-india shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            {city} • {experience} yrs experience
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {practiceAreas.slice(0, 3).map((area) => (
          <span key={area} className="px-2 py-0.5 rounded-md bg-navy-pale text-navy text-xs font-medium">
            {area}
          </span>
        ))}
        {practiceAreas.length > 3 && (
          <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-medium">
            +{practiceAreas.length - 3}
          </span>
        )}
      </div>

      <div className="text-xs text-muted-foreground mb-4">
        <span className="font-medium">Languages:</span> {languages.join(', ')}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {consultationOptions.map((option) => (
          <span key={option} className="px-2 py-0.5 rounded-md bg-green-india-pale text-green-india text-xs font-medium">
            {option}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border/60">
        <div className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-saffron fill-saffron" />
          <span className="text-sm font-bold text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviewCount} reviews)</span>
        </div>
        <span className="text-xs font-semibold text-navy group-hover:text-saffron transition-colors flex items-center gap-1">
          View Profile <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
