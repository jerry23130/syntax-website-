import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import OurWorkPreview from '@/components/home/OurWorkPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'
import CtaSection from '@/components/home/CtaSection'
import TrustedBySection from '@/components/home/TrustedBySection'
import MainLayout from '@/components/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <IndustriesSection />
      <OurWorkPreview />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CtaSection />
    </MainLayout>
  )
}
