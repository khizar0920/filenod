import React from "react";
import Helmet from "../seo/HelmetConfig";

const Privacy = () => {
  // Get today's date dynamically
  const lastUpdated = new Date();
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy | Filenod IT Services</title>
        <meta
          name="description"
          content="Read Filenod IT Services Privacy Policy. Learn how we collect, use, and safeguard your personal information when using our website and services."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg md:text-xl mb-2">Filenod IT Services</p>
        <p className="text-sm md:text-base">Last Updated: {formattedDate}</p>
      </section>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 text-gray-800 space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, company name, and any details you provide when signing up or contacting us.
            </li>
            <li>
              <strong>Account Details:</strong> Login credentials, profile information, and service preferences.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device information, and website usage data through cookies and analytics tools.
            </li>
            <li>
              <strong>Service Data:</strong> Project details, files, and other content you upload or share with us.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, manage, and improve our IT services.</li>
            <li>Respond to inquiries and offer customer support.</li>
            <li>Personalize your user experience on our website and portal.</li>
            <li>Send updates, service notifications, and promotional offers (you can opt-out anytime).</li>
            <li>Ensure the security and functionality of our systems.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">3. Data Sharing & Disclosure</h2>
          <p>We do not sell your personal information. We may share your data only in these cases:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>With trusted service providers who help us operate our services.</li>
            <li>To comply with legal obligations or respond to lawful requests.</li>
            <li>To protect the rights, safety, or property of Filenod IT Services, our clients, or the public.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
          <p>
            We implement strict security measures, including encryption, secure servers, and access controls, to protect your information against unauthorized access, alteration, or loss.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze website performance, and deliver relevant content. You can manage your cookie preferences through your browser settings.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections or updates to your data.</li>
            <li>Request deletion of your data, subject to legal obligations.</li>
            <li>Opt-out of marketing communications at any time.</li>
          </ul>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external websites.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: <a href="mailto:support@filenod.com" className="text-blue-600 hover:underline">support@filenod.com</a></li>
<<<<<<< HEAD
            <li>Address: Filenod - IT Services Provider Company opposite UBL Mandian, Abbottabad, 22044, Pakistan</li>
=======
            <li>Address: [Your Company Address]</li>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
