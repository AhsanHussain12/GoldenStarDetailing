import React from 'react';
import { MapPin, Star, Shield, Zap } from 'lucide-react';

const AreaInfoCard = () => {
  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-black/90 via-black/80 to-black/90 border border-yellow-400/40 rounded-3xl p-10 w-full max-w-4xl mx-auto shadow-2xl backdrop-blur-xl flex flex-col items-center group-hover:border-yellow-400/60 transition-all duration-500 hover:scale-[1.02]">
        
        {/* Header with enhanced styling */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <MapPin size={32} className="text-black" />
          </div>
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              Service Areas
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-yellow-400/80 text-sm font-medium">Premium Coverage</span>
            </div>
          </div>
        </div>

        {/* Enhanced description */}
        <div className="text-center mb-8 max-w-2xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            We provide <span className="text-yellow-400 font-semibold">mobile detailing</span> across the{' '}
            <span className="text-yellow-400 font-semibold">Houston area</span>, covering a{' '}
            <span className="text-yellow-400 font-semibold">40–50 mile radius</span> with{' '}
            <span className="text-yellow-400 font-semibold">premium service</span>.
          </p>
        </div>

        {/* Service badges */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/30">
            <Shield size={16} className="text-yellow-400" />
            <span className="text-yellow-200 text-sm font-medium">Insured & Bonded</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 px-4 py-2 rounded-full border border-yellow-400/30">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-yellow-200 text-sm font-medium">Same Day Available</span>
          </div>
        </div>

        {/* Enhanced area tags */}
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="group/tag bg-gradient-to-r from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 text-yellow-200 font-bold px-6 py-3 rounded-full border-2 border-yellow-400/50 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 cursor-pointer">
            Crosby, TX
          </span>
          <span className="group/tag bg-gradient-to-r from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 text-yellow-200 font-bold px-6 py-3 rounded-full border-2 border-yellow-400/50 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 cursor-pointer">
            Spring, TX
          </span>
          <span className="group/tag bg-gradient-to-r from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 text-yellow-200 font-bold px-6 py-3 rounded-full border-2 border-yellow-400/50 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 cursor-pointer">
            Conroe, TX
          </span>
          <span className="group/tag bg-gradient-to-r from-yellow-400/20 via-yellow-500/10 to-yellow-600/20 text-yellow-100 font-medium px-6 py-3 rounded-full border border-yellow-400/30 shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 cursor-pointer">
            + Surrounding Areas
          </span>
        </div>

      </div>
    </div>
  );
};

export default AreaInfoCard;