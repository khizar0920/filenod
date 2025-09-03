import React from "react";
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
// import { Helmet } from "react-helmet";
=======
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d

export default function HelmetConfig({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Filenod" />
      <meta name="keywords" content="Filenod, web development, SEO, branding, hosting, digital solutions, IT services" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
