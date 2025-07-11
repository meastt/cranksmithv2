import Layout from '../components/Layout';

export default function Tools() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-forge-gray mb-8">Cycling Tools</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Gear Ratio Calculator</h3>
            <p className="text-gray-600 mb-4">Compare gear ratios and find the perfect setup</p>
            <button className="bg-cycle-green text-white px-4 py-2 rounded">Try It</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Parts Compatibility</h3>
            <p className="text-gray-600 mb-4">Check if components work together</p>
            <button className="bg-cycle-green text-white px-4 py-2 rounded">Check Now</button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Tire Pressure</h3>
            <p className="text-gray-600 mb-4">Calculate optimal tire pressure</p>
            <button className="bg-cycle-green text-white px-4 py-2 rounded">Calculate</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}