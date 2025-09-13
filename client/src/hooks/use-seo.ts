import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function useSEO({ 
  title, 
  description, 
  keywords = "cleaning services Dubai, luxury cleaning, commercial cleaning, residential cleaning, Airbnb cleaning, boutique cleaning",
  ogImage = "/og-image.jpg",
  ogUrl = window.location.href 
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', property);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Update meta description
    updateMetaTag('description', description);
    
    // Update keywords
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('', title, 'og:title');
    updateMetaTag('', description, 'og:description');
    updateMetaTag('', 'website', 'og:type');
    updateMetaTag('', ogUrl, 'og:url');
    updateMetaTag('', ogImage, 'og:image');
    updateMetaTag('', 'Freshen Deluxe', 'og:site_name');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional meta tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Freshen Deluxe');
  }, [title, description, keywords, ogImage, ogUrl]);
}