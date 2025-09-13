import HeroSection from '../HeroSection'

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onBookNow={() => console.log('Book Now clicked')}
      onWhatsApp={() => console.log('WhatsApp clicked')}
    />
  )
}