import { usePackageContext } from '../context/PackageContext';

const PackageCard = ({ package: pkg }) => {
  const { openModal } = usePackageContext();

  return (
    <div
      onClick={() => openModal(pkg)}
      className="bg-gray-900/50 border border-yellow-500/20 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-yellow-400/40 hover:bg-gray-900/70 hover:scale-105 group"
    >
      {/* Package Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-1">{pkg.name}</h3>
          <p className="text-gray-400 text-sm font-mono">{pkg.number}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-yellow-400">${pkg.price}</p>
          <p className="text-gray-500 text-sm">Starting</p>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-2 mb-6">
        {pkg.services.slice(0, 3).map((service, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <span className="text-gray-300 text-sm">{service}</span>
          </div>
        ))}
        {pkg.services.length > 3 && (
          <p className="text-yellow-400/70 text-sm font-medium">
            +{pkg.services.length - 3} more services
          </p>
        )}
      </div>

      {/* Vehicle Type */}
      <div className="flex items-center justify-between">
        <span className="text-gray-400 text-sm capitalize">{pkg.vehicleType}</span>
        <div className="text-yellow-400 group-hover:translate-x-1 transition-transform duration-300">
          →
        </div>
      </div>
    </div>
  );
};

export default PackageCard; 