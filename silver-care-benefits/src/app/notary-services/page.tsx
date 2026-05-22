"use client";

import React from "react";
import {
  FileText,
  Briefcase,
  MapPin,
  ClipboardList,
  Check,
  Calendar,
  AlertCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import AnimatedSection from "@/components/AnimatedSection";

const DOCUMENTS = [
  "Wills, Trusts & Estate Planning",
  "Power of Attorney (POA)",
  "Healthcare Directives & Living Wills",
  "Deeds (Quitclaim, Warranty, Trust)",
  "Affidavits, Oaths & Affirmations",
  "Loan Signing Documents",
  "Contracts & Business Agreements",
  "Vehicle Title Transfers",
];

const PREPARATION_STEPS = [
  {
    title: "Bring Government-Issued Photo ID",
    description: "Every signer must present a valid, unexpired ID such as a Driver's License, State ID, or Passport. The name on the ID must match the name on the document.",
  },
  {
    title: "Do Not Sign Documents in Advance",
    description: "All documents must be signed in the physical presence of the notary. You may fill out other fields, but leave signature and notary sections blank.",
  },
  {
    title: "Ensure All Signers Are Present",
    description: "All individuals required to sign, including witnesses if mandated, must be present at the scheduled time with their valid identification.",
  },
  {
    title: "Understand the Document",
    description: "Signers must be alert, aware, and signing of their own free will. Notaries cannot explain the legal terms or advise on the document's consequences.",
  },
];

export default function NotaryServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Service Offerings</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-foreground">
            General & Mobile Notary Services
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Professional, commissioned notary validation brought straight to your door. We serve individuals, seniors, and businesses throughout Reno, NV and surrounding regions.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column (Main Info) */}
            <div className="lg:col-span-7 space-y-10">
              
              <AnimatedSection className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Convenient Notarizations on Your Schedule
                </h2>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Administrative paperwork shouldn&rsquo;t disrupt your day. Our mobile notary service is designed specifically for seniors, busy professionals, and families who prefer in-person verification without the hassle of traveling. We regularly visit private residences, rehabilitation facilities, nursing homes, hospitals, and corporate offices to execute signatures safely and correctly.
                </p>
              </AnimatedSection>

              {/* Documents Grid */}
              <AnimatedSection className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Common Documents We Notarize
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DOCUMENTS.map((doc) => (
                    <div key={doc} className="flex items-center gap-3 p-3.5 bg-card-bg border border-card-border/60 rounded-xl">
                      <FileText className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Preparation Steps */}
              <AnimatedSection className="space-y-6">
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    How to Prepare for Your Appointment
                  </h3>
                </div>
                <div className="space-y-4">
                  {PREPARATION_STEPS.map((step, idx) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-sm sm:text-base">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

            </div>

            {/* Right Column (Sidebar Card with pricing and CTA) */}
            <div className="lg:col-span-5">
              <AnimatedSection className="sticky top-28">
                <Card className="bg-card-bg border border-card-border p-8 shadow-lg space-y-6">
                  
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Mobile Service Details</h3>
                    <p className="text-xs text-foreground/50">Reno & Surrounding Counties</p>
                  </div>

                  <hr className="border-card-border/50" />

                  {/* Pricing/Features details */}
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-card-border/40">
                      <span className="font-medium text-foreground/70">Standard Notarial Act</span>
                      <span className="font-bold text-primary">$15 / signature</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-card-border/40">
                      <span className="font-medium text-foreground/70">Travel & Dispatch Fee</span>
                      <span className="font-bold text-foreground">Varies by distance</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-card-border/40">
                      <span className="font-medium text-foreground/70">Hospital & Care Facility Visit</span>
                      <span className="font-bold text-foreground">Flat rates available</span>
                    </div>
                  </div>

                  <div className="bg-primary-light/40 border border-primary/10 p-4 rounded-2xl flex gap-3 text-xs leading-relaxed text-foreground/80">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p>
                      <strong>Standard Acts:</strong> In accordance with Nevada State guidelines, notary fees are charged per stamp/notarial act. Travel fees cover travel time and fuel.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Button href="/schedule" variant="primary" className="w-full gap-2">
                      <Calendar className="w-4 h-4" />
                      Book Appointment
                    </Button>
                    <a
                      href="tel:18005550199"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-silver/50 font-medium text-sm text-foreground/80 hover:text-primary hover:border-primary transition-all"
                    >
                      Call for Urgent Dispatch
                    </a>
                  </div>

                  {/* Location coverage */}
                  <div className="pt-2 text-center text-xs text-foreground/60 space-y-1.5">
                    <div className="flex items-center justify-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="font-semibold text-foreground">Service Coverage:</span>
                    </div>
                    <p className="max-w-[280px] mx-auto leading-normal">
                      Reno, Sparks, Carson City, Incline Village, and neighboring communities.
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
