import Header3 from "@/components/header3"
import IndustrySolutionsSection from "@/components/industry-solutions-section"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import PortfolioCarousel from "@/components/pages/portfolio-carousel"
import ExpertiseSection from "@/components/expertise-section"
import ClientSection from "@/components/client-section"
import CounterSection from "@/components/counter-section"
import TestimonialCarousel from "@/components/pages/testimonial-carousel"
import TestimonialSection from "@/components/testimonial-section"
// import PricingSection from "@/components/pricing-section"
// import BlogSection from "@/components/blog-section"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div>
      <Header3 />
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <PortfolioCarousel />
      <ExpertiseSection />
      <ClientSection />
      <CounterSection />
      <IndustrySolutionsSection />
      <TestimonialCarousel />
      {/* <TestimonialSection /> */}

      {/* <PricingSection />
      <BlogSection /> */}
      <CallToAction />
      <Footer />
    </div>
  )
}