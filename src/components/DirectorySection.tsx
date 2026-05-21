import { ScrollReveal } from "@/components/ScrollReveal";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useCallback } from "react";
import { toast } from "sonner";

const sampleStations = [
  { name: "Universal Emergency Helpline", area: "Pan India", phone: "112", type: "Emergency Response" },
  { name: "Police Emergency", area: "Pan India", phone: "100", type: "Police" },
  { name: "National Cyber Crime Helpline", area: "Pan India", phone: "1930", type: "Cyber Cell" },
  { name: "Women Helpline (Domestic Abuse)", area: "Pan India", phone: "181", type: "Help Desk" },
  { name: "National Legal Services Authority (NALSA)", area: "Toll-Free Legal Aid", phone: "15100", type: "Legal Aid" },
  { name: "Child Helpline", area: "Pan India", phone: "1098", type: "Help Desk" },
  { name: "National Consumer Helpline", area: "Pan India", phone: "1915", type: "Consumer Rights" },
  { name: "Tourist Helpline", area: "Pan India", phone: "1363", type: "Help Desk" },
];

export const DirectorySection = () => {
  const { t } = useTranslation();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHelplines = useMemo(() => {
    return sampleStations.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
    <section className="py-24" id="directory">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">{t("directory.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">{t("directory.title")}</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("directory.description")}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal direction="left">
            <div className="bg-[#0c0c0e] rounded-[2rem] h-[500px] flex items-center justify-center border border-white/5 relative overflow-hidden group/map">
              {!userLocation ? (
                <>
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,hsl(35_80%_52%_/_0.15),transparent_70%)] animate-pulse" />
                  <div className="text-center z-10 px-8">
                    <div className="w-16 h-16 rounded-2xl bg-saffron/10 border border-saffron/20 flex items-center justify-center mx-auto mb-6 group-hover/map:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(255,153,51,0.1)]">
                      <MapPin className="w-8 h-8 text-saffron" />
                    </div>
                    <p className="text-white font-black text-xl mb-2 uppercase tracking-tighter">Live Support Map</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-relaxed mb-8 max-w-[240px] mx-auto">
                      Locate nearest police stations, legal aid clinics, and safe zones.
                    </p>
                    <button 
                      onClick={handleEnableLocation}
                      disabled={locating}
                      className="px-8 py-4 rounded-xl bg-saffron text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-saffron/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100 flex items-center gap-3 mx-auto"
                    >
                      {locating && <Loader2 className="w-4 h-4 animate-spin" />}
                      {locating ? "Detecting Location..." : t("directory.enableLocation")}
                    </button>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full animate-in fade-in zoom-in duration-700">
                  <iframe 
                    src={mapSrc}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0a0a0c]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">
                        Your Location: {userLocation.lat.toFixed(4)}°N, {userLocation.lng.toFixed(4)}°E
                      </span>
                    </div>
                    <button onClick={() => setUserLocation(null)} className="text-[10px] font-black text-white/40 hover:text-white uppercase tracking-widest">Reset</button>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col h-full">
              <div className="relative mb-6 group/search">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within/search:text-saffron transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search stations, helplines, or cells..."
                  className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/[0.02] text-sm text-white border border-white/5 outline-none focus:border-saffron/30 placeholder:text-white/20 transition-all font-medium"
                />
              </div>

              <div className="grid gap-3 max-h-[430px] overflow-y-auto pr-2 custom-scrollbar no-scrollbar">
                {filteredHelplines.length > 0 ? (
                  filteredHelplines.map((station) => (
                    <div key={station.name} className="group/helpline bg-white/[0.02] rounded-2xl p-5 border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all">
                      <div className="flex justify-between items-center">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[9px] font-black text-saffron uppercase tracking-[0.2em]">{station.type}</span>
                            <span className="w-1 h-1 rounded-full bg-white/10" />
                            <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{station.area}</span>
                          </div>
                          <h3 className="font-bold text-base text-white truncate group-hover/helpline:text-saffron transition-colors">{station.name}</h3>
                        </div>
                        <a 
                          href={`tel:${station.phone}`}
                          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-saffron/10 border border-saffron/20 text-saffron hover:bg-saffron hover:text-white transition-all shadow-lg shadow-saffron/5"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-xs font-black tracking-widest">{station.phone}</span>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6">
                      <Search className="w-8 h-8 text-white/10" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">No results found</h3>
                    <p className="text-white/30 text-sm">Try searching for generic terms like "Police" or "Legal".</p>
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
