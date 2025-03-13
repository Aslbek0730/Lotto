import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Warning Banner */}
      <div className="bg-[#1A1A1A] text-center py-1 text-sm">
        Accessible only to persons aged 18 and over. Please gamble responsibly.
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          Lotto <span className="text-[#9EF01A]">Jaxx</span>
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 rounded hover:bg-gray-800 transition-colors">
            Log In
          </Link>
          <Link to="/register" className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
            Register
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Responsible Gaming</h3>
          <p className="text-sm text-gray-400 text-center max-w-4xl mx-auto mb-8">
            Make informed Decisions. Your well-being is our priority. If you require assistance or guidance regarding gambling, please contact Gambling Help at 1800 858 858 or visit GambleAware online at gambleaware.nsw.gov.au. About BetStop: BetStop is Australia's official National Self-Exclusion Register, offering a free and confidential service for those who wish to exclude themselves from all licensed online gambling providers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-[#9EF01A] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/responsible-gaming" className="hover:underline">Responsible Gaming</Link>
            <Link to="/anj-arjel" className="hover:underline">ANJ / Arjel</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
            <Link to="/cookies" className="hover:underline">Cookies Policy</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
          <div className="text-center text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} | All rights are reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}