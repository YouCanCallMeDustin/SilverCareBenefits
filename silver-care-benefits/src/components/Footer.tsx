import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-silver/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <Link href="/" aria-label="Silver Care Benefits Home">
              {/* Force white/dark version logo styling inside the charcoal background footer */}
              <Logo className="text-white" showText={true} />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Providing trusted Notary, Remote Online Notary, and Medicare insurance advice to empower you with confidence and legal clarity.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Certified Signing Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>State Commissioned Notaries</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Services */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/notary-services" className="hover:text-primary transition-colors">
                  General Notary Services
                </Link>
              </li>
              <li>
                <Link href="/remote-online-notary" className="hover:text-primary transition-colors">
                  Remote Online Notary (RON)
                </Link>
              </li>
              <li>
                <Link href="/medicare-services" className="hover:text-primary transition-colors">
                  Medicare Assistance
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4">Support & Company</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Silver Care Benefits
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary transition-colors">
                  Scheduling Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-3">Contact & Local Info</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:18005550199" className="hover:text-primary transition-colors">
                  1-800-555-0199 (Toll-Free)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:info@silvercarebenefits.com" className="hover:text-primary transition-colors">
                  info@silvercarebenefits.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Serving Reno, NV & Nationwide via Online Notarization</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Medicare Compliance Disclaimer & Separator */}
        <div className="mt-12 pt-8 border-t border-silver/10 space-y-4 text-xs text-white/50 leading-relaxed">
          <p>
            <strong>Medicare Beneficiary Disclaimer:</strong> We do not offer every plan available in your area. 
            Any information we provide is limited to those plans we do offer in your area. 
            Please contact <a href="https://www.medicare.gov" target="_blank" rel="noreferrer" className="underline hover:text-primary">Medicare.gov</a> or 1-800-MEDICARE to get information on all of your options. 
            Silver Care Benefits is an independent resource and is not affiliated with or endorsed by any government entity or the federal Medicare program.
          </p>
          <p>
            <strong>Notary Disclaimer:</strong> Silver Care Benefits is not a law firm, and our commissioned notaries are not attorneys licensed to practice law. We do not provide legal advice, draft legal documents, or advise on the legal validity or consequences of any documents signed during notarization.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-silver/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {currentYear} Silver Care Benefits. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline hover:text-white/60">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
