import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Search, Loader2, Sparkles, X } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const sampleStations = [
  { name: "Universal Emergency Helpline", area: "Pan India", phone: "112", type: "Emergency Response", group: "Emergency & Police" },
  { name: "Police Emergency", area: "Pan India", phone: "100", type: "Police", group: "Emergency & Police" },
  { name: "National Cyber Crime Helpline", area: "Pan India", phone: "1930", type: "Cyber Cell", group: "Legal Aid & Rights" },
  { name: "Women Helpline (Domestic Abuse)", area: "Pan India", phone: "181", type: "Help Desk", group: "Specialized Protection" },
  { name: "National Legal Services Authority (NALSA)", area: "Toll-Free Legal Aid", phone: "15100", type: "Legal Aid", group: "Legal Aid & Rights" },
  { name: "Child Helpline", area: "Pan India", phone: "1098", type: "Help Desk", group: "Specialized Protection" },
  { name: "National Consumer Helpline", area: "Pan India", phone: "1915", type: "Consumer Rights", group: "Legal Aid & Rights" },
  { name: "Tourist Helpline", area: "Pan India", phone: "1363", type: "Help Desk", group: "Specialized Protection" },
];

const categories = ["All", "Emergency & Police", "Specialized Protection", "Legal Aid & Rights"];

export const DirectorySection = () => {
  const { t } = useTranslation();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredHelplines = useMemo(() => {
    return sampleStations.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            s.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            s.phone.includes(searchQuery);
      const matchesCategory = activeCategory === "All" || s.group === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleEnableLocation = useCallback(() => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }

    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocating(false);
        toast.success("Location detected! Showing nearby support centres.");
      },
      (error) => {
        setLocating(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error("Location permission denied. Please allow location access in your browser settings.");
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            toast.error("Location request timed out. Please try again.");
            break;
          default:
            toast.error("An unknown error occurred while fetching location.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, []);

  const mapSrc = userLocation
    ? `https://www.google.com/maps/embed/v1/search?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=police+station+OR+legal+aid+OR+court&center=${userLocation.lat},${userLocation.lng}&zoom=13`
    : "";

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="directory">
      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/[0.08] border border-saffron/20 mb-4">
            <MapPin className="w-3.5 h-3.5 text-saffron" />
            <span className="text-saffron text-[10px] font-black tracking-[0.3em] uppercase">Emergency Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connect with <span className="text-gradient">Real-World Support</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Locate nearby help centers and access essential state helplines instantly.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Section */}
          <ScrollReveal className="lg:col-span-6 h-[480px]">
            <div className="bg-white/[0.01] rounded-[2.5rem] h-full flex items-center justify-center border border-white/5 relative overflow-hidden group/map spotlight-card">
              {!userLocation ? (
                <>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,hsl(35_80%_52%_/_0.15),transparent_70%)] animate-pulse" />
                  <div className="text-center z-10 px-8">
                    <div className="w-14 h-14 rounded-2xl bg-saffron/10 border border-saffron/20 flex items-center justify-center mx-auto mb-6 group-hover/map:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(255,153,51,0.1)]">
                      <MapPin className="w-7 h-7 text-saffron" />
                    </div>
                    <p className="text-white font-black text-lg mb-2 uppercase tracking-tight">Live Support Map</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8 max-w-[240px] mx-auto">
                      Locate nearest police stations, legal aid clinics, and protection centers.
                    </p>
                    <button 
                      onClick={handleEnableLocation}
                      disabled={locating}
                      className="px-6 py-3.5 rounded-xl bg-saffron text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-saffron/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100 flex items-center gap-3 mx-auto"
                    >
                      {locating && <Loader2 className="w-4 h-4 animate-spin" />}
                      {locating ? "Detecting Location..." : t("directory.enableLocation")}
                    </button>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full animate-in fade-in zoom-in duration-500">
                  <iframe 
                    src={mapSrc}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0a0a0c]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black text-white/70 uppercase tracking-wider">
                        Location: {userLocation.lat.toFixed(3)}°N, {userLocation.lng.toFixed(3)}°E
                      </span>
                    </div>
                    <button 
                      onClick={() => setUserLocation(null)} 
                      className="text-[9px] font-black text-saffron hover:underline uppercase tracking-wider"
                    >
                      Reset Map
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Helplines Section */}
          <ScrollReveal className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-6 sm:p-8 backdrop-blur-xl">
              {/* Search helpline */}
              <div className="relative mb-5 group/search">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/search:text-saffron transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search emergency lines or support teams..."
                  className="w-full h-11 pl-11 pr-10 rounded-xl bg-white/[0.02] text-xs text-white border border-white/5 outline-none focus:border-saffron/30 placeholder:text-white/20 transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Tabs list */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none custom-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "h-9 px-3 rounded-lg text-[9px] font-black uppercase tracking-wider shrink-0 transition-all",
                      activeCategory === category
                        ? "bg-saffron text-white"
                        : "bg-white/[0.02] border border-white/5 text-white/40 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Helplines List Grid */}
              <div className="grid gap-2 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin custom-scrollbar flex-1">
                {filteredHelplines.length > 0 ? (
                  filteredHelplines.map((station) => (
                    <div 
                      key={station.name} 
                      className="group/helpline bg-white/[0.01] rounded-2xl p-4 border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all flex items-center justify-between gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="text-[8px] font-black text-saffron uppercase tracking-widest">{station.type}</span>
                          <span className="w-1 h-1 rounded-full bg-white/10" />
                          <span className="text-[8px] font-black text-white/25 uppercase tracking-widest">{station.area}</span>
                        </div>
                        <h3 className="font-bold text-sm text-white truncate group-hover/helpline:text-saffron transition-colors">
                          {station.name}
                        </h3>
                      </div>
                      
                      <a 
                        href={`tel:${station.phone}`}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-saffron/10 border border-saffron/20 text-saffron hover:bg-saffron hover:text-white transition-all shadow-md"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black tracking-widest">{station.phone}</span>
                      </a>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-4">
                      <Search className="w-5 h-5 text-white/15" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">No helplines found</h3>
                    <p className="text-white/20 text-xs">Try clearing the search or category filters.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
