import React from 'react';

export function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="space-y-6 text-gray-300">
        <p>Last updated: March 15, 2024</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Remembering your preferences</li>
            <li>Keeping you signed in</li>
            <li>Understanding how you use our website</li>
            <li>Improving our services based on your behavior</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Types of Cookies We Use</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session management</li>
              <li>Security features</li>
              <li>Basic functionality</li>
            </ul>

            <h3 className="text-xl font-semibold">Functional Cookies</h3>
            <p>These cookies enable personalized features and remember your choices.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Language preferences</li>
              <li>Theme settings</li>
              <li>Login information</li>
            </ul>

            <h3 className="text-xl font-semibold">Analytics Cookies</h3>
            <p>These cookies help us understand how visitors interact with our website.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Page views and navigation</li>
              <li>Time spent on pages</li>
              <li>Error encounters</li>
            </ul>

            <h3 className="text-xl font-semibold">Marketing Cookies</h3>
            <p>These cookies are used to deliver relevant advertisements and track their effectiveness.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ad personalization</li>
              <li>Campaign measurement</li>
              <li>Partner integrations</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Managing Cookies</h2>
          <p>
            You can control and manage cookies in various ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser settings to block or delete cookies</li>
            <li>Our cookie preference center</li>
            <li>Third-party opt-out tools</li>
          </ul>
          <p className="mt-4">
            Please note that blocking certain cookies may impact the functionality of our website.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
            privacy@lottojaxx.com
          </p>
        </section>
      </div>
    </div>
  );
}