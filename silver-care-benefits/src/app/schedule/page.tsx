"use client";

import React from "react";
import { PhoneCall, Calendar, Mail, AlertTriangle } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/Card";

export default function SchedulePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Booking Hub</span>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground">
            Schedule an Appointment
          </h1>
          <p className="text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Select a service type and choose a convenient time slot below. Your booking is automatically confirmed and scheduled.
          </p>
        </div>
      </section>

      {/* 2. Booking Embed Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <AnimatedSection>
            {/* Embed Calendly using our premium wrapper */}
            <CalendlyEmbed url="https://calendly.com/silvercarebenefits/consultation" />
          </AnimatedSection>

          {/* Post-Booking Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Card 1: What to Expect */}
            <AnimatedSection>
              <Card className="h-full bg-card-bg">
                <CardContent className="p-6 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-foreground">What Happens Next?</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>You will receive an automated email confirmation from Calendly with calendar invites and meeting links.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>If you chose a phone or online video call, we will call you directly at your chosen time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>If you booked mobile notary, we will reach out prior to confirm your location address.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Card 2: Emergency / Custom Requests */}
            <AnimatedSection>
              <Card className="h-full bg-card-bg border-primary/20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent">
                <CardContent className="p-6 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center">
                      <PhoneCall className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-foreground">Need Urgent Dispatch?</h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      If you require emergency notary signings outside of standard hours, or directly to a local Reno hospital or care facility, please call us directly for immediate dispatch support.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:18005550199"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-background font-semibold text-sm hover:bg-primary-hover shadow-md transition-all"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call 1-800-555-0199
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

          </div>

          {/* Privacy Disclaimer Banner */}
          <AnimatedSection className="bg-foreground/[0.02] border border-card-border p-6 rounded-3xl flex gap-3 text-xs leading-normal text-foreground/60 max-w-2xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-0.5">Secure Scheduling Standards:</p>
              <p>
                Silver Care Benefits utilizes Calendly to manage appointment slots. We do not store sensitive medical files, protected health information (PHI), or legal documents in the booking portal. All details shared during consultation sessions remain strictly confidential and compliant.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
