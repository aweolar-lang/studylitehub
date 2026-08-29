import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Microscope, 
  Users, 
  FileText, 
  CheckCircle, 
  Trophy 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION: Premium Dark Mode & Glassmorphism */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-950 border-b border-white/5">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
          {/* Floating Pill */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium text-xs sm:text-sm mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse" />
            The Global Nexus for Academic Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1] max-w-5xl">
            Where intellect meets <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-blue-400 to-cyan-400">
              limitless opportunity.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light">
            A unified ecosystem gathering ambitious learners, elite educators, and pioneering researchers. Master foundational concepts, publish peer-reviewed work, and build your academic legacy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/signup" 
              className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold rounded-lg shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Enter the Ecosystem
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/market" 
              className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center bg-white/5 text-white border border-white/10 font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS (Interactive Cards) */}
      <section className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A Multi-Sided Architecture</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Studylite is a collaborative economy built specifically for every stage of the academic journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* The Learner */}
            <div className="group rounded-2xl p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)]">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Learner</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                From high school fundamentals to university degrees. Access verified materials, book expert tutors, and take rigorous online assessments to guarantee your success.
              </p>
            </div>

            {/* The Educator */}
            <div className="group rounded-2xl p-8 bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)]">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Educator</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Monetize your expertise. Publish study guides, host 1-on-1 mentorship sessions, and build a digital revenue stream while shaping the next generation.
              </p>
            </div>

            {/* The Researcher */}
            <div className="group rounded-2xl p-8 bg-card border border-border hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)]">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Researcher</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A hub for advanced academia. Publish peer-reviewed papers, collaborate on dissertations, and access high-level academic data for your post-graduate work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM CAPABILITIES (Bento Grid Layout) */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The academic operating system.</h2>
              <p className="text-lg text-muted-foreground">Everything you need to research, learn, test, and build, entirely integrated into one seamless platform.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-70">
            
            {/* Feature 1: Marketplace (Spans 2 columns on desktop) */}
            <div className="md:col-span-2 bg-card rounded-3xl p-8 border border-border relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Marketplace & Library</h3>
                  <p className="text-muted-foreground max-w-md">Buy, sell, and access a vast repository of high school revision guides, university curriculums, and advanced research papers.</p>
                </div>
              </div>
              {/* Decorative background element */}
              <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform translate-x-8 translate-y-8">
                <FileText className="w-64 h-64" />
              </div>
            </div>

            {/* Feature 2: Tutors */}
            <div className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Verified Tutors</h3>
                  <p className="text-muted-foreground text-sm">Book 1-on-1 virtual sessions with vetted academic professionals.</p>
                </div>
              </div>
            </div>

            {/* Feature 3: Assessments */}
            <div className="bg-card rounded-3xl p-8 border border-border relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Online Tests</h3>
                  <p className="text-muted-foreground text-sm">Timed revision exams and dynamic automated grading systems.</p>
                </div>
              </div>
            </div>

            {/* Feature 4: Projects & Capstones (Spans 2 columns) */}
            <div className="md:col-span-2 bg-card rounded-3xl p-8 border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Projects & Capstones</h3>
                  <p className="text-muted-foreground max-w-xl">
                    Go beyond theory. Collaborate on final year projects, submit complex coding or research assignments, and participate in practical assessments graded by industry professionals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="bg-primary py-24 relative overflow-hidden">
        {/* Subtle geometric pattern / glow */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-white/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground tracking-tight">
            Ready to elevate your intellect?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 font-medium">
            Whether you are here to master a high school curriculum, publish groundbreaking research, or evaluate final-year projects, your platform awaits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/signup" 
              className="h-14 px-8 inline-flex items-center justify-center bg-white text-primary font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
            >
              Create Free Account
            </Link>
            <Link 
              href="/signup?role=educator" 
              className="h-14 px-8 inline-flex items-center justify-center bg-transparent border-2 border-primary-foreground/20 text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transition-all duration-200"
            >
              Apply as an Educator
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}