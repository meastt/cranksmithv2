import Layout from '../components/Layout';

export default function Garage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-forge-gray mb-8">Virtual Garage</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Your Bikes</h3>
          <p className="text-gray-600 mb-4">Store and manage all your bike setups</p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">No bikes added yet</p>
            <button className="bg-cycle-green text-white px-6 py-2 rounded">Add Your First Bike</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}