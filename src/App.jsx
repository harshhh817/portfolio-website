import { Navbar } from "./components/Navbar";
import Hero from "./sections/Hero";
import CurrentRD from "./sections/CurrentRD";
import TechnicalCapabilities from "./sections/TechnicalCapabilities";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-background">
      {/* Structural Ambient Base */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/[0.02] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/[0.01] rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="space-y-0">
          <Hero />
          <CurrentRD />
          <TechnicalCapabilities />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        <footer className="py-20 px-6 md:px-12 border-t border-white/5 text-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-muted">
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Developed by Harsh Gupta // 2024</span>
            <div className="flex gap-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Built for scale.</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] italic">Minimal by design.</span>
            </div>
          </div>
        </footer>

        <CustomCursor />
      </div>
    </div>
  );
}

export default App;
