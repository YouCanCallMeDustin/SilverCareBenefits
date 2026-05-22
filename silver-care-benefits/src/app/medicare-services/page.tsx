"use client";

import React from "react";
import {
  HeartHandshake,
  ShieldAlert,
  HelpCircle,
  FileCheck,
  CheckCircle,
  Calendar,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import AnimatedSection from "@/components/AnimatedSection";

const MEDICARE_PARTS = [
  {
    part: "Part A & B",
    title: "Original Medicare",
    description: "Federal health coverage. Part A covers inpatient hospital stays, skilled nursing facility care, and hospice. Part B covers outpatient services, doctor visits, preventive care, and medical equipment.",
  },
  {
    part: "Part C",
    title: "Medicare Advantage",
    description: "An 'all-in-one' private alternative to Original Medicare. These plans bundle Parts A, B, and usually D. They often feature extra benefits like vision, dental, hearing, and wellness programs.",
  },
  {
    part: "Part D",
    title: "Prescription Drug Coverage",
    description: "Optional, dedicated plans run by private insurance companies approved by Medicare. They help cover the costs of prescription medications, protecting you from high out-of-pocket drug expenses.",
  },
  {
    part: "Medigap",
    title: "Medicare Supplement",
    description: "Private insurance policies that help pay the 'gaps' in Original Medicare coverage, such as copayments, deductibles, and coinsurance, providing more predictable out-of-pocket expenses.",
  },
];

const FAQS_MINI = [
  {
    q: "When am I eligible to enroll in Medicare?",
    a: "Most people become eligible at age 65. Your Initial Enrollment Period (IEP) is a 7-month window that begins 3 months before the month you turn 65, includes your birth month, and ends 3 months after.",
  },
  {
    q: "What is the difference between Medicare Advantage and Supplement?",
    a: "Medicare Advantage plans act as private HMOs or PPOs replacing your government billing system (often with small copays and networks). Supplements work alongside Original Medicare to cover deductibles and coinsurance, allowing you to see any doctor that accepts Medicare.",
  },
  {
    q: "Are there penalties for late enrollment?",
    a: "Yes, if you do not sign up for Part B and Part D when you are first eligible (unless you have creditable employer coverage), you may face permanent monthly late enrollment penalties.",
  },
];

export default function MedicareServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Independent Advisory</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-foreground">
            Medicare Guidance & Assistance
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Unbiased, simple plan reviews designed to clear the confusion. We help you compare rates, analyze coverage networks, and navigate your transitions with ease.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column (Details and Components) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Introduction block */}
              <AnimatedSection className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                  Your Medicare Decisions, Uncomplicated
                </h2>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Navigating the transition to Medicare can feel overwhelming. With stacks of mail, competing plan claims, and strict enrollment deadlines, it is easy to feel confused. At Silver Care Benefits, our role is to act as your independent partner. We listen to your specific medical goals, check your prescription requirements, verify your preferred doctors, and lay out your options in plain, straightforward terms.
                </p>
              </AnimatedSection>

              {/* Medicare Parts Grid */}
              <AnimatedSection className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Understanding Your Medicare Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {MEDICARE_PARTS.map((part) => (
                    <Card key={part.part} className="bg-card-bg">
                      <CardContent className="p-6 space-y-3">
                        <span className="inline-block px-2.5 py-1 rounded bg-primary-light text-primary text-[10px] font-bold uppercase tracking-wider">
                          {part.part}
                        </span>
                        <h4 className="font-serif font-bold text-lg text-foreground mt-2">{part.title}</h4>
                        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{part.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>

              {/* Mini FAQs */}
              <AnimatedSection className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Key Medicare Enrollment Facts
                </h3>
                <div className="space-y-4">
                  {FAQS_MINI.map((faq) => (
                    <div key={faq.q} className="p-5 bg-card-bg border border-card-border/60 rounded-2xl space-y-2">
                      <h4 className="font-serif font-bold text-base text-foreground flex items-center gap-2">
                        <HelpCircle className="w-4.5 h-4.5 text-primary shrink-0" />
                        {faq.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed pl-6">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Legal Disclaimer Box */}
              <AnimatedSection className="bg-foreground/[0.02] border border-card-border p-6 rounded-2xl flex gap-3 text-xs leading-relaxed text-foreground/60">
                <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Important Enrollment Notice:</p>
                  <p>
                    We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to get information on all of your options. We provide independent information as licensed state-certified agents to help make plan details easier to understand.
                  </p>
                </div>
              </AnimatedSection>

            </div>

            {/* Right Column (Sidebar Action Widget) */}
            <div className="lg:col-span-4">
              <AnimatedSection className="sticky top-28">
                <Card className="bg-card-bg border border-card-border p-8 shadow-lg space-y-6">
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl leading-tight">Plan Review Request</h3>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      Book a free, independent 1-on-1 Medicare consultation. We represent multiple plans and focus purely on what fits you.
                    </p>
                  </div>

                  <hr className="border-card-border/50" />

                  {/* Core steps details */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-foreground/50 uppercase tracking-wider">What We Review Together:</h4>
                    <ul className="space-y-2.5 text-xs text-foreground/80">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>Prescription drug cost analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>Doctor network verification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>Supplement vs. Advantage reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>Enrollment deadline timelines</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Button href="/schedule" variant="primary" className="w-full gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule Free Call
                    </Button>
                    
                    <Button href="/contact" variant="outline" className="w-full text-sm">
                      Ask a Question
                    </Button>
                  </div>

                  <div className="text-center text-[10px] text-foreground/50">
                    No obligation to enroll. Unbiased, local assistance.
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
