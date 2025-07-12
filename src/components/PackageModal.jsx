import { usePackageContext } from '../context/PackageContext';
import { X } from 'lucide-react';

const PackageModal = () => {
  const { selectedPackage, isModalOpen, closeModal } = usePackageContext();

  if (!isModalOpen || !selectedPackage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-gray-900 border border-yellow-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="p-6 border-b border-yellow-500/20">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                {selectedPackage.name}
              </h2>
              <p className="text-gray-400 font-mono text-lg">
                {selectedPackage.number}
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-yellow-400">
                ${selectedPackage.price}
              </p>
              <p className="text-gray-500">Starting Price</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Vehicle Type */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Vehicle Type
            </h3>
            <p className="text-gray-300 capitalize">{selectedPackage.vehicleType}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {selectedPackage.description}
            </p>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              Included Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedPackage.services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          {selectedPackage.images && selectedPackage.images.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedPackage.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-yellow-500/20"
                  >
                    <img
                      src={image}
                      alt={`${selectedPackage.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Duration */}
          {selectedPackage.duration && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                Estimated Duration
              </h3>
              <p className="text-gray-300">{selectedPackage.duration}</p>
            </div>
          )}

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-8 rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Book This Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal; 