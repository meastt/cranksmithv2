import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-forge-gray mb-4">
              Forge Your Perfect Ride
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              No More Guesswork in Bike Builds!
            </p>
            <button className="bg-cycle-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}