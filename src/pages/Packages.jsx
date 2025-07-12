import { getMainPackage, getAddOns } from '../data/packages';

const Packages = () => {
  const pkg = getMainPackage();
  const addOns = getAddOns();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {pkg.name}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {pkg.description}
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="space-y-6">
            {pkg.images.map((img, i) => (
              <img key={i} src={img} alt="Detailing" className="rounded-xl shadow-2xl w-full" />
            ))}
          </div>
          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Interior Detailing Includes:</h2>
            <ul className="mb-8 list-disc list-inside text-gray-300 space-y-2">
              {pkg.interior.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">Exterior Detailing Includes:</h2>
            <ul className="mb-8 list-disc list-inside text-gray-300 space-y-2">
              {pkg.exterior.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Package Pricing</h2>
            <table className="w-full mb-8 text-gray-300">
              <thead>
                <tr>
                  <th className="text-left py-2">Vehicle Type</th>
                  <th className="text-left py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {pkg.pricing.map((p, i) => (
                  <tr key={i} className="border-b border-yellow-500/10">
                    <td className="py-2 font-semibold">{p.type}</td>
                    <td className="py-2">${p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Optional Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {addOns.map((add, i) => (
              <div key={i} className="bg-gray-800/60 border border-yellow-500/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{add.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{add.name}</h3>
                <p className="text-gray-300 text-sm">{add.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center text-gray-400 mt-4">
            <span className="font-semibold text-yellow-400">Prices for paint correction and coatings vary based on vehicle condition.</span><br />
            Contact us for a personalized quote.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages; 