import { useState } from 'react';
import { getAddOns } from '../data/packages';

const vehicleTypes = [
  { type: 'Sedan', price: 170 },
  { type: 'SUV', price: 180 },
  { type: 'Truck', price: 200 }
];

const addOns = getAddOns();

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    vehicleType: '',
    addOn: '',
    extraDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock email sending - in real app, this would be an actual API call
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        vehicleType: '',
        addOn: '',
        extraDetails: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900/50 border border-yellow-500/20 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6">Book Your Service</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
            Address *
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300 resize-none"
            placeholder="Enter your complete address"
          />
        </div>

        {/* Vehicle Type Selection */}
        <div>
          <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-300 mb-2">
            Select Vehicle Type *
          </label>
          <select
            id="vehicleType"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
          >
            <option value="">Choose a vehicle type</option>
            {vehicleTypes.map((v) => (
              <option key={v.type} value={v.type}>
                {v.type} (${v.price})
              </option>
            ))}
          </select>
        </div>

        {/* Add-On Service Selection */}
        <div>
          <label htmlFor="addOn" className="block text-sm font-medium text-gray-300 mb-2">
            Optional Add-On Service
          </label>
          <select
            id="addOn"
            name="addOn"
            value={formData.addOn}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300"
          >
            <option value="">None</option>
            {addOns.map((add) => (
              <option key={add.name} value={add.name}>{add.name}</option>
            ))}
          </select>
        </div>

        {/* Extra Details */}
        <div>
          <label htmlFor="extraDetails" className="block text-sm font-medium text-gray-300 mb-2">
            Extra Details
          </label>
          <textarea
            id="extraDetails"
            name="extraDetails"
            value={formData.extraDetails}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors duration-300 resize-none"
            placeholder="Any special requests or additional information..."
          />
        </div>

        {/* Submit Status */}
        {submitStatus && (
          <div className={`p-4 rounded-lg ${
            submitStatus === 'success' 
              ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
              : 'bg-red-500/20 border border-red-500/30 text-red-400'
          }`}>
            {submitStatus === 'success' 
              ? 'Thank you! Your booking request has been submitted successfully. We\'ll contact you soon!' 
              : 'Something went wrong. Please try again.'
            }
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:transform-none"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 