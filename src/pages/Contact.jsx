import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Hero from "../components/Hero";
import InquiryForm from "../components/InquiryForm";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import { contact } from "../data/siteData";

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us" description="Contact Khanna Travels for luxury holidays, visas, flights, cruises, and corporate travel from Navi Mumbai." />
      <Hero eyebrow="Plan With Us" title="Begin your next journey" text="Share where you want to go, how you like to travel, and what matters most. The Khanna Travels team will shape the details." image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85" />
      <section className="py-24">
        <div className="luxury-container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Khanna Travels & Holidays" text="Office assistance, holiday consultation, visa support, and on-trip coordination from 10AM to 8PM." />
            <div className="grid gap-4">
              {[
                [Phone, contact.phones.join(" / ")],
                [Mail, contact.email],
                [Clock, `Business Hours: ${contact.hours}`],
                [MapPin, contact.address]
              ].map(([Icon, text]) => (
                <div key={text} className="flex gap-4 rounded-[1.4rem] border border-gold/15 bg-white/[0.04] p-5 text-ivory/70">
                  <Icon className="text-gold" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
      <section className="pb-24">
        <div className="luxury-container">
          <div className="overflow-hidden rounded-[2rem] border border-gold/15 bg-[#0b111b] shadow-cinematic">
            <iframe title="Khanna Travels Map" className="h-[430px] w-full opacity-75 grayscale invert" loading="lazy" src="https://www.google.com/maps?q=Sanpada%20Navi%20Mumbai&output=embed" />
          </div>
        </div>
      </section>
    </>
  );
}
