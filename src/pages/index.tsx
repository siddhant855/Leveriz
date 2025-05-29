
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const Index = () => {
  return (
    <main className="bg-dark min-h-screen">
      <CustomCursor />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="results">
        <ResultsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <ContactSection />
      <Footer />
      <FloatingButton />
    </main>
  );
};

export default Index;