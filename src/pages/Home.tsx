import React from 'react';
import { Award } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <div className="relative z-20 text-center py-32 px-4">
          <h1 className="text-5xl font-bold mb-4">
            Play Lotto <span className="text-[#9EF01A]">Jaxx</span> Online
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our exclusive Game Key Challenges await, offering you the chance to triumph over epic
            gaming challenges and unlock incredible rewards.
          </p>
          <button className="bg-[#9EF01A] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#8ED017] transition-colors">
            Start Playing Now
          </button>
        </div>
      </div>

      {/* Providers Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Top 5 Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={`rounded-lg p-6 relative ${
              index === 1 ? 'bg-[#2C614D]' :
              index === 2 ? 'bg-[#1E4B8F]' :
              index === 3 ? 'bg-[#6B49B2]' :
              'bg-[#0B713B]'
            }`}>
              <div className="absolute top-4 left-4">
                <Award className="text-yellow-400" size={32} />
                <div className="text-sm mt-1">Top Rated</div>
              </div>
              <div className="mt-12">
                <div className="text-2xl font-bold mb-2">100% up to 500€</div>
                <div className="text-xl mb-4">+ 200 free spins</div>
                <button className="bg-[#FF4D4D] text-white px-6 py-2 rounded-full hover:bg-[#E64444] transition-colors">
                  GET BONUS
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Last Provider Card - Full Width */}
        <div className="mt-6 rounded-lg p-6 bg-black border border-gray-800 relative">
          <div className="absolute top-4 left-4">
            <Award className="text-yellow-400" size={32} />
            <div className="text-sm mt-1">Top Rated</div>
          </div>
          <div className="mt-12">
            <div className="text-2xl font-bold mb-2">100% up to 500€</div>
            <div className="text-xl mb-4">+ 200 free spins</div>
            <button className="bg-[#FF4D4D] text-white px-6 py-2 rounded-full hover:bg-[#E64444] transition-colors">
              GET BONUS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}