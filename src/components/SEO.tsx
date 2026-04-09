import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

export function SEO({
  title = "Five Peaks Coffee | Premium Barista Coffee Catering UK",
  description = "Five Peaks Coffee provides professional barista coffee catering for corporate events, conferences, festivals, and pop-ups across the UK. Precision in every pour.",
  canonical = "https://www.fivepeakscoffee.co.uk/",
  ogType = "website",
  ogImage = "https://i.postimg.cc/CLf8SKL7/IMG_20240309_WA0017.jpg",
  keywords = "barista coffee catering, event coffee hire, corporate coffee service, mobile coffee bar UK, festival coffee catering"
}: SEOProps) {
  const siteTitle = title.includes("Five Peaks Coffee") ? title : `${title} | Five Peaks Coffee`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
