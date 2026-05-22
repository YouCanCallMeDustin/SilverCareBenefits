"use client";

import React from "react";
import Link from "next/link";
import {
  FileSignature,
  Laptop,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Star,
  PhoneCall,
  Clock,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import AnimatedSection from "@/components/AnimatedSection";

const SERVICES = [
  {
    title: "General Notary Services",
    description: "Mobile in-person notarization at your convenience. We travel to homes, hospitals, care facilities, and offices to notarize power of attorney, trusts, deeds, and healthcare directives.",
    href: "/notary-services",
    icon: FileSignature,
    tag: "Mobile / In-Person",
  },
  {
    title: "Remote Online Notary (RON)",
    description: "Secure, state-commissioned electronic notarization from anywhere in the world. Verify your identity online and execute legal documents digitally in minutes without leaving your desk.",
    href: "/remote-online-notary",
    icon: Laptop,
    tag: "100% Digital & Secure",
  },
  {
    title: "Medicare Plan Guidance",
    description: "Clear, unbiased assistance to help you navigate Medicare choices. We break down Parts A, B, C, D, and Supplement plans so you can make informed decisions with confidence.",
    href: "/medicare-services",
    icon: HeartHandshake,
    tag: "Independent Advisory",
  },
];

const ADVANTAGES = [
  {
    title: "Senior-Friendly Accessibility",
    description: "We explain complex legal and healthcare options in plain, friendly language, eliminating stress and confusing jargon.",
    icon: CheckCircle,
  },
  {
    title: "State Commissioned & Certified",
    description: "Fully licensed, bonded, insured, and certified background-screened signing agents you can rely on.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Scheduling",
    description: "Easily book appointments online, or reach out directly for mobile or emergency dispatch services.",
    icon: Clock,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Copy and CTAs) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light text-primary text-xs font-semibold tracking-wide animate-fade-in">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Professional • Commissioned • Insured</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tight leading-[1.1] animate-fade-up">
                Professional Notary & <br />
                <span className="text-primary font-serif">Medicare Assistance</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl animate-fade-up">
                We bring clarity and legal validation directly to you. Whether you need local mobile notary signing, secure remote e-notarization, or trusted assistance choosing the right Medicare plans, we make the process simple, secure, and stress-free.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 animate-fade-up">
                <Button href="/schedule" variant="primary" size="lg" className="shadow-lg">
                  Schedule an Appointment
                </Button>
                <Button href="/notary-services" variant="outline" size="lg" className="group">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6 text-xs text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Reno Local & Nationwide</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>HIPAA & Privacy Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column (Visual / Interactive Trust Widget) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-30 -z-10" />
              
              <AnimatedSection className="flex justify-center">
                <div className="w-full max-w-md bg-card-bg border border-card-border p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
                  
                  {/* Visual design element: Brand Accent lines */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-light rounded-2xl flex items-center justify-center text-primary">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg">Silver Care Benefits</h3>
                      <p className="text-xs text-foreground/50">Your Trusted Partner</p>
                    </div>
                  </div>

                  <hr className="border-card-border/50" />

                  {/* Trust Factors List */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold">Mobile & Digital Convenience</h4>
                        <p className="text-xs text-foreground/70">At your home, office, or fully online via secure platform portals.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold">Independent Medicare Guidance</h4>
                        <p className="text-xs text-foreground/70">Unbiased comparison of top providers to find plans customized to your needs.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="p-1 rounded-full bg-primary/10 text-primary mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold">Certified Security Standards</h4>
                        <p className="text-xs text-foreground/70">Strict adherence to security, privacy policies, and ID verification.</p>
                      </div>
                    </div>
                  </div>

                  {/* Quote Snippet */}
                  <div className="bg-background border border-card-border/50 p-4 rounded-2xl flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs italic text-foreground/80 leading-relaxed">
                      &ldquo;They made my mother&rsquo;s notary signature and Medicare setup incredibly easy. Warm, patient, and highly professional.&rdquo;
                    </p>
                    <span className="text-[10px] font-bold text-foreground/60 text-right">— Sarah M., Reno</span>
                  </div>

                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Overview Grid */}
      <section className="py-20 bg-background border-t border-card-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase">Our Expertise</h2>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
              Simplified Solutions, Trusted Execution
            </p>
            <p className="text-base text-foreground/70">
              We specialize in legal document signing and Medicare plan counseling, providing accessible methods tailored to modern needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1} className="h-full">
                <Card hoverEffect className="flex flex-col h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Tag */}
                    <span className="inline-block self-start px-2.5 py-1 rounded-full bg-primary-light text-primary text-[10px] font-bold uppercase tracking-wider mb-6">
                      {service.tag}
                    </span>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-background border border-card-border rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                      <service.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-serif font-bold text-foreground tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Footer Link */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* 3. The Silver Care Advantage */}
      <section className="py-20 bg-primary-light/30 border-t border-b border-card-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Advantage Side */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-primary uppercase">Why Choose Us</h2>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
                A Premium Standard of Care & Professionalism
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Silver Care Benefits was founded to bridge the gap between complex administrative mandates and personal, accessible care. We realize that legal signing and healthcare plans are deeply personal transitions, requiring patience, accuracy, and absolute trust.
              </p>
              
              <div className="border-l-2 border-primary pl-4 py-1.5 text-xs text-foreground/70 italic">
                &ldquo;Our mission is simple: to make critical notarizations and plan sign-ups clear, correct, and stress-free for every client.&rdquo;
              </div>

              <div className="pt-2">
                <Button href="/about" variant="secondary" size="md">
                  Read Our Story
                </Button>
              </div>
            </div>

            {/* List Advantage Side */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ADVANTAGES.map((advantage, index) => (
                <Card key={advantage.title} className="bg-white">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center">
                      <advantage.icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-foreground">
                      {advantage.title}
                    </h4>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}

              {/* Extra Support Block */}
              <Card className="bg-primary text-background flex flex-col justify-between">
                <CardContent className="p-6 space-y-4 flex flex-col h-full justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-base">Need Emergency Notary Assistance?</h4>
                    <p className="text-xs text-background/80 leading-relaxed">
                      If you require mobile notary dispatch outside standard office hours or directly to a local hospital/facility, call our priority number.
                    </p>
                  </div>
                  <a
                    href="tel:18005550199"
                    className="inline-flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-background text-primary font-semibold text-xs hover:bg-primary-light transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Call 1-800-555-0199
                  </a>
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Three-Step Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase">How It Works</h2>
            <h3 className="text-3xl font-serif font-bold text-foreground tracking-tight">
              Three Simple Steps to Success
            </h3>
            <p className="text-sm text-foreground/70">
              We design every interaction to prevent friction, allowing you to secure validations and guidance efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-silver/20 -z-10" />

            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-card-bg border-2 border-primary text-primary flex items-center justify-center text-xl font-serif font-bold mx-auto shadow-sm">
                1
              </div>
              <h4 className="font-serif font-bold text-lg">Book Your Session</h4>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-xs mx-auto leading-relaxed">
                Select your service and choose a convenient time slot via our integrated Calendly booking engine.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-card-bg border-2 border-primary text-primary flex items-center justify-center text-xl font-serif font-bold mx-auto shadow-sm">
                2
              </div>
              <h4 className="font-serif font-bold text-lg">Verify & Advisory</h4>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-xs mx-auto leading-relaxed">
                Meet mobile/online to verify credentials, or consult with our independent agent to compare Medicare benefits.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-card-bg border-2 border-primary text-primary flex items-center justify-center text-xl font-serif font-bold mx-auto shadow-sm">
                3
              </div>
              <h4 className="font-serif font-bold text-lg">Execution & Hand-off</h4>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-xs mx-auto leading-relaxed">
                Receive completed, signed, and stamped notarized documents, or a clear guide outlining your chosen Medicare transition paths.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Direct Booking Banner (Final Call-to-Action) */}
      <section className="py-16 md:py-24 bg-charcoal text-white relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight">
            Ready to Experience Clean, <br className="hidden sm:inline" />
            Reliable Administration?
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Schedule a session to complete your notarizations online or review Medicare options with a helpful guide. We are committed to absolute precision and accessibility.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg bg-primary hover:bg-primary-hover">
              Book Appointment Now
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white">
              Send Message
            </Button>
          </div>
          <p className="text-xs text-white/40">
            No long commitments. Simple booking. Certified expertise.
          </p>
        </div>
      </section>

    </div>
  );
}
