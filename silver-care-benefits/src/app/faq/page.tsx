"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/AnimatedSection";

interface FAQItem {
  question: string;
  answer: string;
  category: "notary" | "ron" | "medicare";
}

const FAQS: FAQItem[] = [
  // Notary Category
  {
    question: "What is a Mobile Notary, and where do you travel?",
    answer: "A Mobile Notary is a commissioned notary public who travels to your location to execute documents. We travel to private homes, hospitals, rehabilitation facilities, assisted living centers, libraries, and offices throughout Reno and surrounding counties.",
    category: "notary",
  },
  {
    question: "What items must I prepare for a notary appointment?",
    answer: "You must provide a valid, government-issued photo identification (such as a Driver's License or Passport) that matches the name on the documents. The document must be complete, and all required signers and witnesses must be present. Do not sign the documents before the notary arrives; all signatures must be witnessed in person.",
    category: "notary",
  },
  {
    question: "Can a notary explain the terms of my document or advise on its legal consequences?",
    answer: "No. Notaries are commissioned by the state as impartial witnesses to verify identification, ensure understanding, and check willingness. Notaries are not attorneys and are strictly prohibited by law from explaining document clauses, drafting legal files, or providing legal counsel. If you need help understanding your document, please consult a legal professional.",
    category: "notary",
  },
  // RON Category
  {
    question: "What is a Remote Online Notary (RON) and is it legal?",
    answer: "Remote Online Notarization (RON) is the legal process of signing and notarizing documents digitally over secure live audio-video technology. It was officially legalized in Nevada (and recognized nationwide via interstate reciprocity) under strict security regulations. It carries the exact same legal weight as a traditional in-person notarization.",
    category: "ron",
  },
  {
    question: "How does identity verification work online?",
    answer: "To satisfy legal requirements, the digital portal uses two-step authentication: 1) Knowledge-Based Authentication (KBA), which presents 5 brief questions verifying your identity based on public records databases, and 2) Credential Analysis, which requires taking a photo of your valid photo ID or Passport, verifying its security features automatically.",
    category: "ron",
  },
  {
    question: "Do you store my personal identification or notarized files?",
    answer: "No. To maintain complete security, compliance, and privacy, we do not store, scan, or log any personal identification information, KBA records, or your completed notarized files on our servers. All sensitive verification transactions and secure notarizations are conducted through fully encrypted, state-approved partner portals.",
    category: "ron",
  },
  // Medicare Category
  {
    question: "Does it cost anything to consult with an independent Medicare advisor?",
    answer: "No. Our Medicare review and guidance services are offered 100% free of charge to beneficiaries. If you choose to enroll in a plan through our assistance, we are compensated by carrier commissions, meaning there are never any out-of-pocket advisory costs or hidden fees billed to you.",
    category: "medicare",
  },
  {
    question: "What is the difference between Medicare Advantage (Part C) and Medigap (Supplement)?",
    answer: "Medicare Advantage plans are managed private health options (HMOs/PPOs) that bundle Parts A and B, often adding prescription coverage and other dental/vision benefits. Medicare Supplement (Medigap) plans work alongside Original government Medicare, helping to pay out-of-pocket deductibles and coinsurance so that you have more predictable healthcare expenses.",
    category: "medicare",
  },
  {
    question: "What is the Initial Enrollment Period (IEP) for Medicare?",
    answer: "Your Initial Enrollment Period (IEP) is a 7-month window to enroll in Medicare Parts A and B when you first become eligible. It begins 3 months before the month you turn 65, includes your birth month, and ends 3 months after your birth month.",
    category: "medicare",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "notary" | "ron" | "medicare">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = FAQS.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  // Generate structured JSON-LD schema markup for Google SEO snippets
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col w-full">
      {/* Dynamic injection of Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-sans">Common Inquiries</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Find answers to commonly asked questions regarding local mobile notarizations, online signatures, and Medicare choices.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "all", label: "All Questions" },
              { id: "notary", label: "In-Person Notary" },
              { id: "ron", label: "Remote Online Notary" },
              { id: "medicare", label: "Medicare Guidance" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  setOpenIndex(null); // Reset open items on filter change
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-background shadow-md shadow-primary/10"
                    : "bg-card-bg border border-card-border text-foreground/80 hover:text-primary hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <AnimatedSection className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="border border-card-border/80 rounded-2xl bg-card-bg overflow-hidden shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif font-bold text-foreground text-sm sm:text-base pr-4">
                        {faq.question}
                      </span>
                      <span className="p-1 rounded-full bg-primary-light text-primary shrink-0 transition-transform duration-200">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>
                    
                    {/* Animated Panel (pure CSS transition) */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[300px] opacity-100 border-t border-card-border/40" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 py-5 text-xs sm:text-sm text-foreground/75 leading-relaxed bg-background/30">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 text-foreground/50">
                No matching questions found in this category.
              </div>
            )}
          </AnimatedSection>

          {/* Quick Help Card */}
          <AnimatedSection className="mt-16 bg-primary-light/20 border border-primary/10 p-8 rounded-3xl text-center space-y-4">
            <h3 className="font-serif font-bold text-lg text-foreground">Have a Different Question?</h3>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto">
              If your inquiry isn&rsquo;t covered here, get in touch with us directly. We are happy to walk you through the details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Contact Our Office
              </Button>
              <Button href="/schedule" variant="outline" size="md">
                Schedule Call
              </Button>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
