import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "A Greener Cleaner | Eco-Friendly Dry Cleaning in Jacksonville, FL",
  description = "Jacksonville's first and only wet cleaner since 2009. No toxic chemicals, no PERC. Professional dry cleaning pickup & delivery in St. Johns County, Nocatee & Julington Creek.",
  keywords = "dry cleaning Jacksonville, wet cleaning, eco friendly dry cleaning, wedding dress cleaning, green dry cleaner, pickup delivery, Nocatee, Julington Creek, St Johns County",
  ogTitle,
  ogDescription,
  ogImage = "https://www.agreenerdrycleaner.com/images/logo.webp",
  canonicalUrl,
  structuredData,
  noindex = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "A Greener Cleaner",
    "description": "Jacksonville's first and only wet cleaner. Eco-friendly dry cleaning services with pickup and delivery.",
    "url": "https://www.agreenerdrycleaner.com",
    "telephone": "+1-904-370-1007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3021 Loretto Rd",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32223",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.1936",
      "longitude": "-81.7664"
    },
    "openingHours": "Mo-Fr 07:00-18:00",
    "priceRange": "$$",
    "servesCuisine": null,
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "30.1936",
        "longitude": "-81.7664"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dry Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wet Cleaning",
            "description": "Eco-friendly wet cleaning without toxic chemicals",
            "url": "https://www.agreenerdrycleaner.com/professional-dry-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Dress Cleaning",
            "description": "Specialized wedding gown cleaning and preservation",
            "url": "https://www.agreenerdrycleaner.com/wedding-gown-dry-cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pickup and Delivery",
            "description": "Free pickup and delivery service in Jacksonville area",
            "url": "https://www.agreenerdrycleaner.com/dry-cleaning-delivery-services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "100"
    }
  };

  const siteBaseUrl = "https://www.agreenerdrycleaner.com";
  const finalOgImage = ogImage.startsWith('/') ? `${siteBaseUrl}${ogImage}` : ogImage;
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const finalCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('/') ? `${siteBaseUrl}${canonicalUrl}` : canonicalUrl) : `${siteBaseUrl}${currentPath}`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  
  // Deep copy and update URLs in structured data
  const updatedStructuredData = JSON.parse(JSON.stringify(structuredData || defaultStructuredData));
  if (updatedStructuredData.url && updatedStructuredData.url.startsWith('https://yourwebsite.com')) {
    updatedStructuredData.url = updatedStructuredData.url.replace('https://yourwebsite.com', siteBaseUrl);
  }
  if (updatedStructuredData.provider?.url && updatedStructuredData.provider.url.startsWith('https://yourwebsite.com')) {
    updatedStructuredData.provider.url = updatedStructuredData.provider.url.replace('https://yourwebsite.com', siteBaseUrl);
  }
  if (updatedStructuredData.hasOfferCatalog?.itemListElement) {
    updatedStructuredData.hasOfferCatalog.itemListElement.forEach((item: any) => {
      if (item.itemOffered?.url && item.itemOffered.url.startsWith('https://yourwebsite.com')) {
        item.itemOffered.url = item.itemOffered.url.replace('https://yourwebsite.com', siteBaseUrl);
      }
    });
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {finalCanonicalUrl && <link rel="canonical" href={finalCanonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="A Greener Cleaner" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="author" content="A Greener Cleaner" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Jacksonville" />
      <meta name="geo.position" content="30.1936;-81.7664" />
      <meta name="ICBM" content="30.1936, -81.7664" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(updatedStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead; 