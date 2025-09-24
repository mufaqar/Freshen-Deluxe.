import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/use-seo";

export default function CalculatorPage() {
  useSEO({
    title: 'Cleaning Service Quote Request - Freshen Deluxe Dubai',
    description: 'Get personalized quotes for luxury cleaning services in Dubai. Request quotes for residential, commercial, and Airbnb cleaning with our comprehensive form.',
    keywords: 'cleaning quote request Dubai, cleaning service quote, personalized cleaning quote, Dubai cleaning rates, luxury cleaning quote'
  });

  return <QuoteForm />;
}