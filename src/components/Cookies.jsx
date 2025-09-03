import React from "react";

const CookiePolicy = () => {
  // Dynamically set today's date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="bg-white min-h-screen px-6 md:px-16 lg:px-24 py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
        Cookie Policy | Filenod IT Services
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Last Updated: <span className="font-semibold text-gray-800">{formattedDate}</span>
      </p>

      <div className="max-w-4xl mx-auto text-gray-800 space-y-6 leading-relaxed">
        {/* Introduction */}
        <p>
          At <strong>Filenod IT Services</strong>, we value your privacy and strive
          to provide transparency about how we use cookies and similar tracking
          technologies on our website and applications. This Cookie Policy explains
          what cookies are, how we use them, and how you can control your cookie preferences.
        </p>

        {/* 1. What Are Cookies */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device (computer, tablet, or mobile)
            when you visit our website. They help us remember your preferences, improve
            your browsing experience, and understand how you interact with our content.
          </p>
        </div>

        {/* 2. Types of Cookies */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies</strong> – Required for the basic functionality of our website (e.g., logging in, form submissions).</li>
            <li><strong>Performance Cookies</strong> – Collect anonymous data on how visitors use our site to improve functionality and user experience.</li>
            <li><strong>Functional Cookies</strong> – Remember your preferences, such as language settings or saved login details.</li>
            <li><strong>Targeting/Advertising Cookies</strong> – Deliver relevant advertisements based on your browsing history and interests.</li>
          </ul>
        </div>

        {/* 3. Why We Use Cookies */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Why We Use Cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure our website functions properly.</li>
            <li>Personalize your browsing experience.</li>
            <li>Analyze traffic and website performance.</li>
            <li>Deliver targeted marketing campaigns.</li>
          </ul>
        </div>

        {/* 4. Third-Party Cookies */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Third-Party Cookies</h2>
          <p>
            We may use third-party services (such as Google Analytics, Facebook Pixel,
            or advertising networks) that place cookies on your device to help us measure
            performance or show relevant ads.
          </p>
        </div>

        {/* 5. Managing Preferences */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Managing Your Cookie Preferences</h2>
          <p>
            You can control or disable cookies through your browser settings:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
            <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
          </ul>
          <p className="mt-3">
            Please note that disabling essential cookies may affect your ability to use some parts of our website.
          </p>
        </div>

        {/* 6. Updates */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in
            law, technology, or our practices. Any updates will be posted on this page
            with the "Last Updated" date.
          </p>
        </div>

        {/* 7. Contact Us */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy or data practices,
            please contact us at:
          </p>
          <p className="mt-2">📧 <strong>Email:</strong> support@filenod.com</p>
<<<<<<< HEAD
          <p>📍 <strong>Address:</strong> Filenod - IT Services Provider Company opposite UBL Mandian, Abbottabad, 22044, Pakistan</p>
=======
          <p>📍 <strong>Address:</strong> Filenod IT Services, [Your Address Here]</p>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
