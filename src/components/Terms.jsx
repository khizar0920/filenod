import React from "react";
import Helmet from "../seo/HelmetConfig";

const Terms = () => {
  const lastUpdated = new Date();
const formattedDate = lastUpdated.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Terms & Conditions | Filenod IT Services</title>
        <meta
          name="description"
          content="Read Filenod IT Services Terms & Conditions. Understand your rights, account usage, payments, intellectual property, and service policies."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-lg md:text-xl mb-2">Filenod IT Services</p>
        <p className="text-sm md:text-base">Last Updated: {formattedDate}</p>
      </section>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 text-gray-800 space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">1. About Filenod IT Services</h2>
          <p>
            Filenod IT Services specializes in providing high-quality web development, software solutions, IT consulting, and custom application development for businesses worldwide. Our website offers information about our services, project portfolio, and client resources.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">2. Acceptance of Terms</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Have read and understood these Terms.</li>
            <li>Are at least 18 years old (or have parental/guardian consent).</li>
            <li>Agree to comply with applicable laws and regulations.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">3. Services Provided</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Web Design & Development</li>
            <li>Mobile App Development</li>
            <li>Backend API Development (NestJS & PostgreSQL)</li>
            <li>Cloud Integration & IT Support</li>
            <li>SEO & Digital Marketing Solutions</li>
          </ul>
          <p>Detailed descriptions are available on our <a href="/#services" className="text-blue-600 hover:underline">Services Page</a>.</p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">4. User Accounts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must provide accurate and complete information.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>You agree not to share your account with unauthorized users.</li>
          </ul>
<<<<<<< HEAD
          <p>For account creation rules, refer to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
        </div>

        {/* Section 5 */}
        {/* <div>
          <h2 className="text-2xl font-bold mb-4">5. Payments & Refunds</h2>
          <p>Payments for our services are due as agreed in the project proposal or invoice.</p>
          <p>Refunds will only be issued under specific conditions outlined in our <a href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</a> (available on request).</p>
        </div> */}

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
=======
          <p>For account creation rules, refer to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">5. Payments & Refunds</h2>
          <p>Payments for our services are due as agreed in the project proposal or invoice.</p>
          <p>Refunds will only be issued under specific conditions outlined in our <a href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</a> (available on request).</p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <p>
            All content, designs, code, and graphics provided by Filenod IT Services remain our intellectual property unless otherwise stated in a signed agreement.
          </p>
        </div>

        {/* Section 7 */}
        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
=======
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <p>
            Filenod IT Services is not responsible for any direct, indirect, or incidental damages arising from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Use or inability to use our services.</li>
            <li>Unauthorized access to your data.</li>
            <li>Third-party service disruptions.</li>
          </ul>
        </div>

        {/* Section 8 */}
        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4">7. Termination of Services</h2>
=======
          <h2 className="text-2xl font-bold mb-4">8. Termination of Services</h2>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms or engage in prohibited activities.
          </p>
        </div>

        {/* Section 9 */}
        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4">8. Changes to These Terms</h2>
=======
          <h2 className="text-2xl font-bold mb-4">9. Changes to These Terms</h2>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          <p>
            We may update these Terms periodically. Any changes will be posted on this page with a new “Last Updated” date.
          </p>
        </div>

        {/* Section 10 */}
        <div>
<<<<<<< HEAD
          <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
          <p>If you have questions about these Terms, you can contact us:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: <a href="mailto:support@filenod.com" className="text-blue-600 hover:underline">support@filenod.com</a></li>
            <li>Address: Filenod - IT Services Provider Company opposite UBL Mandian, Abbottabad, 22044, Pakistan</li>
=======
          <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
          <p>If you have questions about these Terms, you can contact us:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Email: <a href="mailto:support@filenod.com" className="text-blue-600 hover:underline">support@filenod.com</a></li>
            <li>Address: [Your Company Address]</li>
>>>>>>> 362fadfdf46576b41cad1a87ad0f8eb3f81ef47d
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
