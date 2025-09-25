import React from 'react'
import { Button } from './ui/button'
import { Link } from 'wouter'

const CTA = () => {
  return (
   

        <section className="py-20 bg-[#6c849f] text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl  mb-6">
            Ready to Experience Dubai's Most Luxurious Cleaning?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a personalized quote and discover the difference 
            boutique cleaning service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/instant-quote">
              <Button 
                size="lg"
               
                className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 backdrop-blur-sm sm:size-default lg:size-lg"
                data-testid="button-cta-contact"
              >
                Instant Quote
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground sm:size-default lg:size-lg"
              data-testid="button-cta-whatsapp"
              onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for Freshen Deluxe cleaning services.')}`, '_blank', 'noopener,noreferrer')}
            >
              WhatsApp +971 55 436 0800
            </Button>
          </div>
        </div>
      </section>
      
   
  )
}

export default CTA
