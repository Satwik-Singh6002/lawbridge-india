export const LoadingSpinner = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-2 border-white/5" />
        <div className="absolute inset-0 h-16 w-16 rounded-full border-2 border-saffron border-t-transparent animate-spin" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-xl font-black text-white tracking-[0.15em] uppercase">ADHIKAR</span>
        <span className="text-[9px] font-bold text-saffron/40 tracking-[0.4em] uppercase">Loading...</span>
      </div>
    </div>
  </div>
);
