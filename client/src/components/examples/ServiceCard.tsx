import ServiceCard from '../ServiceCard'
import { Building2 } from 'lucide-react'
import officeImage from "@assets/pexels-cottonbro-6466226_1757788137471.jpg"

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
      image={officeImage}
      icon={Building2}
      popular={true}
      onGetQuote={() => console.log('Get quote clicked')}
    />
  )
}