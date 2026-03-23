import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleStations = [
  { name: "Saket Police Station", area: "Saket, New Delhi", phone: "011-2651xxxx", type: "Police Station" },
  { name: "Cyber Crime Cell – South", area: "Hauz Khas, New Delhi", phone: "011-2685xxxx", type: "Cyber Cell" },
  { name: "Women Help Desk", area: "Malviya Nagar, New Delhi", phone: "181", type: "Help Desk" },
];

export const DirectorySection = () => {
  return (
    <section className="py-24" id="directory">
      <div className="container">
        <ScrollReveal className="text-center mb-12">
          <p className="text-saffron font-semibold text-sm tracking-widest uppercase mb-3">Find Help Near You</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            Advocates & Police Stations
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Locate verified advocates, police stations, women's help desks, and courts near you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map placeholder */}
          <ScrollReveal direction="left">
            <div className="bg-muted rounded-2xl h-[380px] flex items-center justify-center border border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,hsl(35_80%_52%),transparent_70%)]" />
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">Interactive Map</p>
                <p className="text-xs text-muted-foreground/60 mt-1">Google Maps / OpenStreetMap integration</p>
                <Button variant="heroOutline" size="sm" className="mt-4">
                  Enable Location
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Directory list */}
          <ScrollReveal direction="right">
            <div className="space-y-3">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by area, station name…"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-card text-sm border border-border outline-none focus:ring-1 focus:ring-saffron/50 placeholder:text-muted-foreground"
                />
              </div>

              {sampleStations.map((station) => (
                <div key={station.name} className="bg-card rounded-xl p-4 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{station.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {station.area}
                      </p>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-saffron-pale text-saffron">{station.type}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
                    <Phone className="w-3 h-3" /> {station.phone}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
