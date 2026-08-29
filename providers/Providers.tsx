"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
// Later, you will import AuthProvider, QueryClientProvider, etc. here

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"       // Tells Tailwind to use the .dark class
      defaultTheme="system"   // Respects the user's OS preference
      enableSystem
      disableTransitionOnChange // Prevents css transition flashing on load
    >
      {/* 
        Wrap other providers here in the future:
        <AuthProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </AuthProvider>
      */}
      {children}
      <Toaster />
    </NextThemesProvider>
  );
}
