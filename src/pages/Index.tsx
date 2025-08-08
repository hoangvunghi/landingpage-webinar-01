import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProblemOpportunitySection } from "@/components/ProblemOpportunitySection";
import { WebinarContentSection } from "@/components/WebinarContentSection";
import { SpeakerSection } from "@/components/SpeakerSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FixedBottomBar } from "@/components/FixedBottomBar";

const Index = () => {
  // Smooth scroll animation on page load
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll(".fade-in-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemOpportunitySection />
      <WebinarContentSection />
      <SpeakerSection />
      <EcosystemSection />
      <WhyJoinSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
      <FixedBottomBar />
    </main>
  );
};

export default Index;
