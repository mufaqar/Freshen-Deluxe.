import Calculator from '../Calculator'

export default function CalculatorExample() {
  return (
    <Calculator 
      onWhatsAppQuote={(details) => console.log('WhatsApp quote requested:', details)}
    />
  )
}