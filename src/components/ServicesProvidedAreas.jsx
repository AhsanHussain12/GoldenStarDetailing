import { MapPin } from 'lucide-react';

const ServicesProvidedAreas = () => (
  <section className="relative flex flex-col items-center justify-center py-16 px-2 bg-gradient-to-b from-black via-gray-900 to-black w-full">
    {/* Map Container with Overlay */}
    <div className="relative w-full max-w-7xl h-[420px] rounded-3xl overflow-hidden border-2 border-yellow-400/20 shadow-2xl mx-auto">
      {/* Subtle dark overlay for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10 pointer-events-none" />
      <iframe
        title="Houston Service Area Map"
        src="https://www.google.com/maps?q=Houston,TX&z=9&output=embed"
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* Animated Pinpoint Overlay */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-20">
        <span className="relative flex h-16 w-16">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60"></span>
          <MapPin size={64} className="relative z-10 text-yellow-400 drop-shadow-glow" />
        </span>
      </div>
    </div>
    {/* Glassy Info Card - overlayed and slightly offset upward */}
    <div className="relative z-30 -mt-16 bg-black/80 border border-yellow-400/30 rounded-2xl p-8 w-full max-w-2xl mx-auto shadow-2xl backdrop-blur-xl flex flex-col items-center">
      <div className="flex items-center gap-3 mb-4">
        <MapPin size={28} className="text-yellow-400" />
        <h3 className="text-2xl font-bold text-yellow-400">Service Areas</h3>
      </div>
      <p className="text-gray-300 mb-4 text-base text-center">
        We provide mobile detailing across the <span className="text-yellow-400 font-semibold">Houston area</span>, covering a <span className="text-yellow-400 font-semibold">40–50 mile radius</span>.
      </p>
      <div className="flex flex-wrap gap-3 mb-2 justify-center">
        <span className="bg-gradient-to-r from-yellow-400/30 to-yellow-600/20 text-yellow-200 font-bold px-5 py-2 rounded-full border-2 border-yellow-400/40 shadow-md hover:scale-105 transition-transform duration-200">Crosby, TX</span>
        <span className="bg-gradient-to-r from-yellow-400/30 to-yellow-600/20 text-yellow-200 font-bold px-5 py-2 rounded-full border-2 border-yellow-400/40 shadow-md hover:scale-105 transition-transform duration-200">Spring, TX</span>
        <span className="bg-gradient-to-r from-yellow-400/30 to-yellow-600/20 text-yellow-200 font-bold px-5 py-2 rounded-full border-2 border-yellow-400/40 shadow-md hover:scale-105 transition-transform duration-200">Conroe, TX</span>
        <span className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 text-yellow-100 font-medium px-5 py-2 rounded-full border border-yellow-400/20 shadow hover:scale-105 transition-transform duration-200">and surrounding areas</span>
      </div>
    </div>
  </section>
);

export default ServicesProvidedAreas; 