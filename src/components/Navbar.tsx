export default function Navbar() {
  return (
    <header className="bg-navy border-b border-navy-light sticky top-0 z-50">
      <div className="content-container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="ConvergeTec"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display font-bold text-xl text-white tracking-wide">
            ConvergeTec
          </span>
        </div>

        <a
          href="#discovery-call"
          className="bg-blue hover:bg-cyan text-white hover:text-navy font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm md:text-base inline-flex items-center justify-center no-underline"
        >
          Book a Discovery Call
        </a>
      </div>
    </header>
  );
}
