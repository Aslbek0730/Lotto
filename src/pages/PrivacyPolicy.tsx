import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-gray-300">
        <p>Last updated: March 15, 2024</p>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information</li>
            <li>Date of birth and age verification details</li>
            <li>Financial information for transactions</li>
            <li>Gaming preferences and history</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process your transactions</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and abuse</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers and partners</li>
            <li>Regulatory authorities</li>
            <li>Law enforcement when required</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            privacy@lottojaxx.com
          </p>
        </section>
      </div>
    </div>
  );
}