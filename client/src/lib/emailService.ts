// Email service for form submissions using EmailJS (Client-side only)
import emailjs from '@emailjs/browser';

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  service: string;
  bedrooms?: string;
  bathrooms?: string;
  kitchen?: string;
  livingRooms?: string;
  frequency?: string;
  hours?: string;
  date?: string;
  numberOfProperties?: string;
  propertyConfigurations?: string;
  locations?: string;
  numberOfCleaners?: string;
  numberOfHours?: string;
  buildingLocation?: string;
  commercialFrequency?: string;
  timeSlots?: string;
  additionalInfo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// EmailJS Configuration (Replace with your EmailJS credentials)
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  companyEmail: 'info@freshendeluxe.com' // Your company email
};

console.log('Using EmailJS Config:', EMAILJS_CONFIG);

// Format quote data for email
export const formatQuoteEmail = (data: QuoteFormData) => {
  let emailContent = `
New Quote Request from Freshen Deluxe Website

PERSONAL INFORMATION:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}

SERVICE REQUESTED: ${data.service}

`;

  if (data.service === "Residential Cleaning" || data.service === "Deep Cleaning") {
    emailContent += `
PROPERTY DETAILS:
Bedrooms: ${data.bedrooms}
Bathrooms: ${data.bathrooms}
Kitchen: ${data.kitchen}
Living Rooms: ${data.livingRooms}
`;
    
    if (data.service === "Residential Cleaning") {
      emailContent += `Frequency: ${data.frequency}
Hours Requested: ${data.hours}
`;
    } else if (data.service === "Deep Cleaning") {
      emailContent += `Preferred Date: ${data.date}
`;
    }
  } else if (data.service === "Holiday Homes Cleaning") {
    emailContent += `
HOLIDAY HOME DETAILS:
Number of Properties: ${data.numberOfProperties}
Property Configurations: ${data.propertyConfigurations}
Locations: ${data.locations}
`;
  } else if (data.service === "Commercial Cleaning") {
    emailContent += `
COMMERCIAL CLEANING DETAILS:
Number of Cleaners Needed: ${data.numberOfCleaners}
Number of Hours: ${data.numberOfHours}
Building Location: ${data.buildingLocation}
Frequency: ${data.commercialFrequency}
Preferred Time Slots: ${data.timeSlots}
`;
  }

  if (data.additionalInfo) {
    emailContent += `
ADDITIONAL INFORMATION:
${data.additionalInfo}
`;
  }

  emailContent += `
---
This quote request was submitted from the Freshen Deluxe website.
Please respond within 24 hours for best customer experience.
`;

  return emailContent;
};

// Format contact data for email
export const formatContactEmail = (data: ContactFormData) => {
  return `
New Contact Form Submission from Freshen Deluxe Website

CONTACT INFORMATION:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

MESSAGE:
${data.message}

---
This contact form was submitted from the Freshen Deluxe website.
Please respond within 24 hours for best customer experience.
`;
};

// EmailJS implementation (Client-side)
export const sendEmailWithEmailJS = async (templateParams: any) => {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.publicKey);
    
    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    
    console.log('Email sent successfully:', result);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

// This function is no longer needed for client-side only deployment
// export const sendEmailToServer = async (formData: QuoteFormData | ContactFormData, type: 'quote' | 'contact') => {
//   // Server-side implementation removed for public hosting
// };

// Main email sending function using EmailJS
export const sendFormEmail = async (formData: QuoteFormData | ContactFormData, type: 'quote' | 'contact') => {
  const emailContent = type === 'quote' 
    ? formatQuoteEmail(formData as QuoteFormData)
    : formatContactEmail(formData as ContactFormData);

  const templateParams = {
    to_email: EMAILJS_CONFIG.companyEmail,
    from_name: type === 'quote' ? (formData as QuoteFormData).firstName + ' ' + (formData as QuoteFormData).lastName : (formData as ContactFormData).name,
    from_email: formData.email,
    subject: type === 'quote' ? 'New Quote Request - Freshen Deluxe' : 'New Contact Form - Freshen Deluxe',
    message: emailContent,
    reply_to: formData.email,
    // Additional fields for better EmailJS template handling
    service_type: type === 'quote' ? (formData as QuoteFormData).service : 'General Inquiry',
    phone: formData.phone,
    timestamp: new Date().toISOString()
  };

  // Use EmailJS for client-side email sending
  return await sendEmailWithEmailJS(templateParams);
};
