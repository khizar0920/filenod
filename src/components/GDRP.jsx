import React, { useEffect, useState } from "react";

const GDPRCompliance = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    setLastUpdated(today.toLocaleDateString("en-US", options));
  }, []);

  return (
    <section className="bg-gray-50 text-gray-800 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-3xl font-extrabold text-dark mb-4">
          GDPR Compliance Statement | Filenod IT Services
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          <span className="font-semibold">Last Updated:</span> {lastUpdated}
        </p>

        {/* Intro Paragraph */}
        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold">Filenod IT Services</span>, we are committed to protecting your personal data and complying with the{" "}
          <span className="font-semibold">General Data Protection Regulation (GDPR)</span> (EU) 2016/679.
          This statement explains how we collect, use, store, and protect your data under GDPR guidelines.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* 1. What is GDPR */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">1. What is GDPR?</h2>
            <p className="leading-relaxed">
              The GDPR is a European Union regulation designed to protect the privacy and personal data of individuals located in the EU/EEA.
              It provides clear rules on how organizations must handle personal information.
            </p>
          </div>

          {/* 2. Legal Basis */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">2. Legal Basis for Processing Data</h2>
            <p className="leading-relaxed mb-3">We process your personal data under one or more of the following legal bases:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Consent</strong> – You have given clear permission for us to process your data.</li>
              <li><strong>Contract</strong> – Processing is necessary for the performance of a contract with you.</li>
              <li><strong>Legal Obligation</strong> – We are required by law to process certain information.</li>
              <li><strong>Legitimate Interests</strong> – We process data for legitimate business purposes that do not override your rights.</li>
            </ul>
          </div>

          {/* 3. Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">3. Your Rights Under GDPR</h2>
            <p className="leading-relaxed mb-3">Under GDPR, you have the right to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Access</strong> – Request a copy of your personal data.</li>
              <li><strong>Rectification</strong> – Correct inaccurate or incomplete data.</li>
              <li><strong>Erasure</strong> – Request deletion of your data (“Right to be Forgotten”).</li>
              <li><strong>Restriction</strong> – Limit how we process your data.</li>
              <li><strong>Data Portability</strong> – Receive your data in a portable format.</li>
              <li><strong>Object</strong> – Stop certain types of data processing.</li>
              <li><strong>Withdraw Consent</strong> – Revoke your consent at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@filenod.com" className="text-blue-600 hover:underline">
                support@filenod.com
              </a>.
            </p>
          </div>

          {/* 4. Data Protection */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">4. How We Protect Your Data</h2>
            <p>
              We use secure servers, encryption, firewalls, and regular security audits to protect your data from unauthorized access, loss, or misuse.
            </p>
          </div>

          {/* 5. Data Retention */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">5. Data Retention</h2>
            <p>
              We keep personal data only as long as necessary for the purposes for which it was collected, or as required by law.
            </p>
          </div>

          {/* 6. Third Party */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">6. Third-Party Processors</h2>
            <p>
              We may share data with trusted third-party service providers (such as hosting providers, payment gateways, and analytics tools). 
              All third parties are GDPR-compliant and process data only on our instructions.
            </p>
          </div>

          {/* 7. International Transfers */}
          <div>
            <h2 className="text-2xl font-bold text-dark mb-2">7. International Data Transfers</h2>
            <p>
              If we transfer your data outside the EU/EEA, we ensure it is protected with standard contractual clauses or other approved safeguards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDPRCompliance;
