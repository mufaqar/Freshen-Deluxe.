# Freshen Deluxe Luxury Cleaning Services

## Overview

Freshen Deluxe is a luxury cleaning service website built for a boutique cleaning company in Dubai. The application serves three main target groups: commercial properties (shops, offices, buildings), residential homes (private houses), and Airbnb properties (holiday rentals). The website features a modern, luxury-focused design with navy blue and gold color scheme, emphasizing hospitality-level service quality and premium positioning in the Dubai market.

The application is a full-stack web platform with a React frontend, Express.js backend, and PostgreSQL database integration. It includes service showcases, pricing calculators, contact forms, and booking functionality designed to convert visitors into customers while maintaining the premium brand image.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system implementing luxury brand colors (navy blue, gold, cream)
- **State Management**: TanStack Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful API structure with modular route organization
- **Development**: Hot module replacement and development middleware integration
- **Static Serving**: Vite integration for serving static assets in production

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **In-Memory Storage**: Fallback memory storage implementation for development/testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user authentication with username/password model
- **Security**: Session-based authentication with secure cookie handling

### Design System Integration
- **Brand Guidelines**: Comprehensive design system with luxury hospitality-inspired elements
- **Typography**: Dual font system (Kingred Modern for headings, Helvetica World for body)
- **Color Palette**: Navy blue primary, luxury gold accents, cream backgrounds for premium feel
- **Component Library**: Custom components following luxury design patterns with consistent spacing and elevation

## External Dependencies

- **Database Hosting**: Neon PostgreSQL serverless database for scalable data storage
- **UI Components**: Radix UI ecosystem for accessible component primitives
- **Styling Framework**: Tailwind CSS for utility-first styling approach
- **Development Tools**: 
  - Replit integration for development environment
  - Vite plugins for enhanced development experience
- **Form Validation**: Zod for runtime type validation and schema parsing
- **Date Utilities**: date-fns for date manipulation and formatting
- **Icons**: Lucide React for consistent iconography
- **Communication**: WhatsApp Business API integration for customer contact (+971 55 436 0800)
- **Email Services**: Admin email integration (admin@freshendeluxe.com) for bookings and inquiries