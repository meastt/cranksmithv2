import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-forge-gray">CrankSmith</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="/"
              className="text-forge-gray hover:text-cycle-green transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="/tools"
              className="text-forge-gray hover:text-cycle-green transition-colors duration-200"
            >
              Tools
            </a>
            <a 
              href="/garage"
              className="text-forge-gray hover:text-cycle-green transition-colors duration-200"
            >
              Garage
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-forge-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">CrankSmith</h3>
            <p className="text-gray-300 text-sm">Building the future, one crank at a time.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-cycle-green transition-colors duration-200"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-cycle-green transition-colors duration-200"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-cycle-green transition-colors duration-200"
            >
              Support
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CrankSmith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ 
  children, 
  title = 'Cranksmith - Forge Your Perfect Ride',
  description = 'No More Guesswork in Bike Builds!'
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
} 