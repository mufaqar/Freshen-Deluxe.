import ServiceCard from '../ServiceCard'
import { Building2 } from 'lucide-react'
import officeImage from "@assets/generated_images/Luxury_office_cleaning_service_da282c2d.png"

export default function ServiceCardExample() {
  return (
    <ServiceCard
      title="Commercial Cleaning"
      description="Premium office and retail space cleaning with hospitality standards"
      features={[
        "Deep sanitization protocols",
        "Flexible scheduling options", 
        "Eco-friendly products",
        "Quality assurance guarantee"
      ]}
      pricing="From AED 150/hr"
      image={officeImage}
      icon={Building2}
      popular={true}
      onGetQuote={() => console.log('Get quote clicked')}
    />
  )
}