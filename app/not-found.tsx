import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-muted text-muted-foreground rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <FileQuestion className="w-8 h-8" />
      </div>
      <h1 className="text-6xl font-black tracking-tight mb-4">404</h1>
      <h2 className="text-2xl font-bold tracking-tight mb-3">Page not found</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        We searched the entire academic repository, but the page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Return to Dashboard
      </Link>
    </div>
  );
}