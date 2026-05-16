import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import Features from "@/components/features";
import TeaCards from "@/components/tea-cards";
import Testimonials from "@/components/testimonials";
import CTABanner from "@/components/cta-banner";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f5ef]">
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <Features />
      <TeaCards />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}