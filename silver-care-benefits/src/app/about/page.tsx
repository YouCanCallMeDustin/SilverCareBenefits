"use client";

import React from "react";
import { ShieldCheck, Heart, Sparkles, MapPin, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import AnimatedSection from "@/components/AnimatedSection";

const VALUES = [
  {
    title: "Absolute Integrity",
    description: "Whether verifying signature identity or explaining Medicare deductibles, we adhere to the highest state, federal, and moral standards of honesty and transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Patient, Compassionate Care",
    description: "Administrative tasks can be stressful, particularly for seniors or families in transitional moments. We take our time, speak in clear language, and prioritize your comfort.",
    icon: Heart,
  },
  {
    title: "Modern Efficiency",
    description: "By integrating Remote Online Notary (RON) technology and online booking interfaces, we deliver modern speeds and global convenience while keeping services secure.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Our Mission</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-foreground">
            About Silver Care Benefits
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Delivering trusted administrative notary validation and Medicare transition support with clarity, security, and a personal touch.
          </p>
        </div>
      </section>

      {/* 2. Philosophy / Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Copy */}
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">The Silver Care Story</h2>
              <h3 className="text-3xl font-serif font-bold text-foreground tracking-tight">
                Compassionate Administration Built on Trust
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Silver Care Benefits was founded by Amber Matthews-Perry to serve as a reliable, patient, and modern resource for families and businesses. Living in Reno, NV, Amber noticed that two of the most critical and confusing milestones in life—navigating legal document validations and transitioning into senior healthcare benefits—are often surrounded by stress, complexity, and single-carrier sales pitches.
              </p>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                We set out to create a service that prioritizes the client first. For notary services, this means offering convenient mobile services at private homes, hospitals, and care facilities, alongside secure digital online notarization. For Medicare, it means acting as independent counselors who comparison-shop multiple plans to find the right coverage for your budget and medical provider preferences.
              </p>
              <div className="flex items-center gap-3 text-xs text-foreground/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Headquartered in Reno, NV — Commissioned to Notarize Nationwide</span>
              </div>
            </div>

            {/* Visual Box / Badge layout */}
            <AnimatedSection className="flex justify-center">
              <div className="w-full max-w-md bg-card-bg border border-card-border p-8 rounded-3xl shadow-lg relative overflow-hidden space-y-6">
                
                {/* Visual design element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
                
                <h4 className="font-serif font-bold text-lg text-primary">Certified Credentials</h4>
                
                <hr className="border-card-border/50" />

                <ul className="space-y-4 text-xs sm:text-sm text-foreground/80">
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span>State of Nevada Commissioned Notary Publics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span>Certified Notary Signing Agents (CNSA)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span>Background Screened & Fully Insured</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary shrink-0" />
                    <span>Independent Licensed Medicare Insurance Advisors</span>
                  </li>
                </ul>

                <div className="p-4 bg-primary-light/30 border border-primary/10 rounded-2xl text-[11px] text-foreground/75 leading-relaxed">
                  <strong>Privacy & Security:</strong> We are committed to strict HIPAA compliance for healthcare reviews and follow secure identity standards for online transactions. Your data privacy is our absolute priority.
                </div>

              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="py-20 bg-primary-light/20 border-t border-b border-card-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase">Core Values</h2>
            <h3 className="text-3xl font-serif font-bold text-foreground tracking-tight">
              Our Professional Standards
            </h3>
            <p className="text-sm text-foreground/70">
              Every appointment we schedule and advice we share is governed by these foundational guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="h-full bg-white">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center shadow-sm">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Let's Get Started */}
      <section className="py-16 md:py-24 bg-charcoal text-white text-center space-y-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-serif font-bold tracking-tight">
            Work With a Partner Who Cares
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Reach out today to coordinate mobile signature notary services, launch a secure remote session, or conduct a free plan consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto">
              Schedule Appointment
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
