
import React from 'react';
import { TvIcon, FilmIcon, StarIcon, DeviceMobileIcon } from './components/Icons';

// Sub-components defined outside the main component to avoid re-renders
const Feature: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 text-green-400">{icon}</div>
    <span className="text-gray-300">{text}</span>
  </div>
);

const CtaButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full px-8 py-4 text-xl font-bold text-center text-white uppercase transition-transform duration-300 transform bg-green-500 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 active:scale-100"
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const offerUrl = "https://singingfiles.com/show.php?l=0&u=249961&id=72846";

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8" style={{
      backgroundImage: `url('https://picsum.photos/seed/hulu-bg/1920/1080')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm"></div>

      <main className="relative z-10 w-full max-w-lg p-6 sm:p-8 space-y-6 bg-gray-800 bg-opacity-80 border border-gray-700 rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="text-center">
            <h2 className="text-2xl font-bold tracking-wider text-green-400 uppercase">Hulu Special Offer</h2>
            <h1 className="mt-2 text-4xl font-black text-white sm:text-5xl drop-shadow-lg">
              Get a <span className="text-green-400">$100 Gift Card</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Stream thousands of TV shows and movies - on us! This limited-time offer won't last long.
            </p>
        </div>

        <div className="p-6 my-6 space-y-4 bg-gray-900 border-2 border-dashed border-green-500 rounded-lg">
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Gift Card Value</span>
                <span className="text-3xl font-extrabold text-green-400">$100.00</span>
            </div>
            <div className="pt-4 text-xs text-center text-gray-500 border-t border-gray-700">
                Redeemable for Hulu streaming services.
            </div>
        </div>

        <div className="space-y-4">
          <Feature icon={<TvIcon />} text="Stream Exclusive Originals" />
          <Feature icon={<FilmIcon />} text="Thousands of Hit Movies & Shows" />
          <Feature icon={<StarIcon />} text="Ad-Free Options Available" />
          <Feature icon={<DeviceMobileIcon />} text="Watch on Any Device" />
        </div>

        <div className="pt-6">
            <CtaButton href={offerUrl}>
              Claim Your Gift Card Now
            </CtaButton>
            <p className="mt-4 text-xs text-center text-gray-500">
              You will be redirected to our partner's website to complete the offer.
            </p>
        </div>
      </main>

      <footer className="relative z-10 mt-8 text-xs text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Streaming Promotions. All Rights Reserved.</p>
        <p className="mt-1">This is a promotional offer and is not directly affiliated with Hulu. Terms and conditions apply.</p>
      </footer>
    </div>
  );
};

export default App;
   