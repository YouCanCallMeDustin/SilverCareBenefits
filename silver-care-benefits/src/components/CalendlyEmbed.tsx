"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

interface CalendlyEmbedProps {
  url?: string;
}

export default function CalendlyEmbed({ url = "https://calendly.com/silvercarebenefits/consultation" }: CalendlyEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If the widget is already initialized, mark as loaded
    const checkCalendly = setInterval(() => {
      if ((window as any).Calendly) {
        setIsLoaded(true);
        clearInterval(checkCalendly);
      }
    }, 200);

    return () => clearInterval(checkCalendly);
  }, []);

  return (
    <div className="w-full relative min-h-[600px] md:min-h-[700px] bg-card-bg border border-card-border rounded-3xl overflow-hidden shadow-sm">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Elegant Spinner Loader shown before Calendly loads */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card-bg z-10">
          <div className="relative flex items-center justify-center">
            {/* Outer animated ring */}
            <div className="w-16 h-16 rounded-full border-4 border-silver/20 border-t-primary animate-spin" />
            {/* Inner branding dot */}
            <div className="absolute w-4 h-4 bg-primary rounded-full animate-ping" />
          </div>
          <p className="mt-4 text-sm text-foreground/60 font-medium tracking-wide">
            Loading Scheduling Calendar...
          </p>
        </div>
      )}

      {/* Calendly Inline Widget Container */}
      <div
        className="calendly-inline-widget w-full h-[600px] md:h-[700px]"
        data-url={url}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
