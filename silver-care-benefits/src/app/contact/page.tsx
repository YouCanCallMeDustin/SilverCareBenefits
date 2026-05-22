"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceRequested: "notary",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceRequested: "notary",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-primary-light/20 border-b border-card-border/30 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Connect With Us</span>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground">
            Get in Touch
          </h1>
          <p className="text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about notarization fees or need Medicare enrollment help? Send us a message, and Amber or one of our Reno team members will reach out shortly.
          </p>
        </div>
      </section>

      {/* 2. Main Layout split */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form Card */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <Card className="p-8 bg-card-bg border border-card-border shadow-md">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-serif font-bold text-foreground">Send Us a Message</h2>
                      <p className="text-xs text-foreground/50 mt-1">Lightweight, secure, and direct contact options.</p>
                    </div>

                    {/* Status Alert Panels */}
                    {status === "success" && (
                      <div className="p-4 bg-primary-light text-primary border border-primary/20 rounded-2xl flex gap-3 text-xs sm:text-sm animate-slide-down">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <div>
                          <p className="font-bold">Message Sent Successfully!</p>
                          <p className="text-xs text-foreground/75 mt-0.5">
                            Thank you for reaching out. We have logged your request and will contact you within 24 business hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="p-4 bg-red-500/10 text-red-600 border border-red-500/20 rounded-2xl flex gap-3 text-xs sm:text-sm animate-slide-down">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <div>
                          <p className="font-bold">Submission Failed</p>
                          <p className="text-xs mt-0.5">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl border border-card-border bg-background focus:outline-none focus:border-primary/50 text-sm"
                        />
                      </div>

                      {/* Contact row (Phone & Email) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(509) 555-0199"
                            className="w-full px-4 py-3 rounded-xl border border-card-border bg-background focus:outline-none focus:border-primary/50 text-sm"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-card-border bg-background focus:outline-none focus:border-primary/50 text-sm"
                          />
                        </div>
                      </div>

                      {/* Service Dropdown */}
                      <div className="space-y-1.5">
                        <label htmlFor="serviceRequested" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                          Service Requested
                        </label>
                        <select
                          id="serviceRequested"
                          name="serviceRequested"
                          value={formData.serviceRequested}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-card-border bg-background focus:outline-none focus:border-primary/50 text-sm"
                        >
                          <option value="notary">General / Mobile Notary Services</option>
                          <option value="ron">Remote Online Notary (RON)</option>
                          <option value="medicare">Medicare Assistance & Guidance</option>
                          <option value="other">Other Inquiry</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you? Please describe your documents or Medicare questions..."
                          className="w-full px-4 py-3 rounded-xl border border-card-border bg-background focus:outline-none focus:border-primary/50 text-sm resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        isLoading={isLoading}
                        variant="primary"
                        className="w-full py-3.5 gap-2 text-sm md:text-base font-semibold"
                      >
                        <Send className="w-4 h-4" />
                        Send Secure Message
                      </Button>

                    </form>
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Right: Contact details sidebar & Map */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Business Info Box */}
              <AnimatedSection>
                <Card className="bg-card-bg border border-card-border p-6 shadow-sm space-y-4">
                  <h3 className="font-serif font-bold text-lg">Direct Office Contact</h3>
                  
                  <hr className="border-card-border/50" />

                  <div className="space-y-3.5 text-sm text-foreground/80">
                    <a href="tel:18005550199" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>1-800-555-0199 (Toll-Free)</span>
                    </a>

                    <a href="mailto:info@silvercarebenefits.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                      <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span>info@silvercarebenefits.com</span>
                    </a>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span>Serving Reno, NV & Surrounding Regions</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Map Embed */}
              <AnimatedSection>
                <Card className="overflow-hidden border border-card-border shadow-sm rounded-3xl h-[280px]">
                  {/* Embedded Google Maps centered around Reno, NV */}
                  <iframe
                    title="Silver Care Benefits Service Area Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98436.4526848466!2d-119.88046465494412!3d39.52963212876643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809940ae9292a07d%3A0x40f1d93540d6411!2sReno%2C%20NV!5e0!3m2!1sen!2sus!4v1716400000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Card>
              </AnimatedSection>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
