"use client";

import React from "react";
import {
  Laptop,
  ShieldCheck,
  Video,
  FileCheck,
  Key,
  Calendar,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import AnimatedSection from "@/components/AnimatedSection";

const STEPS = [
  {
    title: "Upload & Set Up",
    description: "You'll be directed to our secure online notarization partner platform. Upload your documents in PDF format and input the details of all required signers.",
    icon: Laptop,
  },
  {
    title: "Verify Identity",
    description: "Complete safe, automated identity verification (KBA questions and scanning of your government-issued ID/Passport) to satisfy state regulatory laws.",
    icon: Key,
  },
  {
    title: "Meet via Video",
    description: "Connect instantly with a commissioned notary public through a live, encrypted audio-video feed. The notary will confirm your awareness, willingness, and witness your signature digitally.",
    icon: Video,
  },
  {
    title: "Download Documents",
    description: "Your notarized file is instantly sealed with digital tamper-evident security. Access and download the final legal PDF document immediately.",
    icon: FileCheck,
  },
];

const REQUIREMENTS = [
  "A desktop, laptop, or smartphone with a functional camera, microphone, and internet connection.",
  "A valid government-issued photo ID (Driver's License or Passport).",
  "A Social Security Number (required by state law for automated identity questions).",
  "A stable PDF copy of your unsigned documents.",
];

export default function RemoteOnlineNotaryPage() {
  // Configured placeholder URL for external e-notary platform redirect
  const eNotaryUrl = process.env.NEXT_PUBLIC_ENOTARY_URL || "https://www.notarize.com/placeholder-silver-care";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Modern Digital Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-foreground">
            Remote Online Notary (RON)
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Legally notarize your documents online in minutes. Safe, secure, and fully compliant with state regulations—no travel required.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (Details and Process) */}
            <div className="lg:col-span-8 space-y-12">
              
              <AnimatedSection className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  The Future of Document Notarization
                </h2>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Remote Online Notarization (RON) allows individuals and businesses to legally sign and notarize documents using standard web browsers and secure audio-video technology. Instead of traveling to an office or coordinating a home visit, you can complete the entire process digitally from anywhere in the world. It provides the same legal weight as traditional notarization while offering superior security, tracking, and convenience.
                </p>
              </AnimatedSection>

              {/* How it works grid */}
              <AnimatedSection className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  The 4-Step Online Process
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {STEPS.map((step, idx) => (
                    <Card key={step.title} className="bg-card-bg">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex justify-between items-start">
                          <div className="w-10 h-10 bg-primary-light text-primary rounded-xl flex items-center justify-center">
                            <step.icon className="w-5 h-5" />
                          </div>
                          <span className="text-xs font-bold text-foreground/30">Step 0{idx + 1}</span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-foreground mt-2">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>

              {/* System Requirements */}
              <AnimatedSection className="bg-primary-light/20 border border-primary/10 p-8 rounded-3xl space-y-4">
                <h3 className="text-lg font-serif font-bold text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  What You Need to Start
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-foreground/80">
                  {REQUIREMENTS.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

            </div>

            {/* Right Column (Redirect Action Sidebar Card) */}
            <div className="lg:col-span-4">
              <AnimatedSection className="sticky top-28">
                <Card className="bg-card-bg border border-card-border p-8 shadow-lg space-y-6">
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl leading-tight">Digital Signing Hub</h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      We partner with industry-leading, state-approved platforms to deliver secure identity verification and remote signings.
                    </p>
                  </div>

                  <hr className="border-card-border/50" />

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Features & Security</h4>
                    <ul className="space-y-2.5 text-xs text-foreground/80">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>Tamper-evident digital seal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>Encrypted audio-video log</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>Secure credential verification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                        <span>Valid for out-of-state signers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Primary Portal Link */}
                    <a
                      href={eNotaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 rounded-full bg-primary text-background font-semibold text-sm hover:bg-primary-hover shadow-md hover:shadow-lg transition-all"
                    >
                      Start Online Session
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <Button href="/schedule" variant="outline" className="w-full gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      Schedule Assistance
                    </Button>
                  </div>

                  <div className="bg-foreground/[0.03] p-4 rounded-2xl space-y-2 text-[11px] text-foreground/60 leading-normal">
                    <p className="font-semibold text-foreground">Data Privacy Guarantee:</p>
                    <p>
                      To ensure maximum compliance, we do not store, scan, or log your personal identification data or notarization files on our servers. All sensitive verification transactions take place through fully encrypted, regulated third-party networks.
                    </p>
                  </div>

                </Card>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
