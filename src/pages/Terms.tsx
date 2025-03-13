import React from 'react';

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="space-y-6 text-gray-300">
        <p>Last updated: March 15, 2024</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms
            and provision of this agreement. Additionally, when using this website's particular
            services, you shall be subject to any posted guidelines or rules applicable to such
            services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using our services, you
            represent and warrant that you are at least 18 years old and that you have the
            right, authority, and capacity to enter into this agreement.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Age verification is required for all users</li>
            <li>Valid identification may be requested</li>
            <li>Multiple accounts are not permitted</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Account Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
            <li>Ensuring your account information is accurate and up-to-date</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Gaming Rules</h2>
          <p>
            All games must be played in accordance with their specific rules and regulations.
            Players must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand and follow game-specific rules</li>
            <li>Accept the outcomes of games as final</li>
            <li>Not use any automated systems or bots</li>
            <li>Not exploit any technical glitches or errors</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">5. Deposits and Withdrawals</h2>
          <p>
            All financial transactions must be conducted through approved payment methods.
            We reserve the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify your identity before processing withdrawals</li>
            <li>Set minimum and maximum deposit/withdrawal limits</li>
            <li>Hold withdrawals pending security checks</li>
            <li>Refuse transactions that violate our policies</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">6. Responsible Gaming</h2>
          <p>
            We are committed to responsible gaming and provide tools to help you maintain control:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Deposit limits</li>
            <li>Self-exclusion options</li>
            <li>Account cooling-off periods</li>
            <li>Access to professional support services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account at any time for any
            reason, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violation of these terms</li>
            <li>Suspicious activity</li>
            <li>Legal requirements</li>
            <li>Extended periods of inactivity</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our
            services following any changes constitutes acceptance of those changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">9. Contact Information</h2>
          <p>
            For any questions regarding these terms, please contact us at:
            terms@lottojaxx.com
          </p>
        </section>
      </div>
    </div>
  );
}