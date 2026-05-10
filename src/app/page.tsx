import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedWorksSection } from '@/components/sections/FeaturedWorksSection'
import { StudioNotesSection } from '@/components/sections/StudioNotesSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWorksSection />
      <StudioNotesSection />
      <CtaSection />
    </>
  )
}
