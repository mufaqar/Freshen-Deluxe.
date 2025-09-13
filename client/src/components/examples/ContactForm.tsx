import ContactForm from '../ContactForm'

export default function ContactFormExample() {
  return (
    <ContactForm 
      onSubmit={(data) => console.log('Contact form submitted:', data)}
    />
  )
}