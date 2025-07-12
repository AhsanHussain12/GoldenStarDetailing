import { MapPin, Navigation, Car, Clock } from 'lucide-react';
import AreaInfoCard from './AreaInfoCard';

const ServicesProvidedAreas = () => (
  <section className="relative bg-gradient-to-b from-black via-gray-900 to-black w-full py-20 px-4 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    {/* Service highlights */}
    <div className="max-w-6xl mx-auto mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="group bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Navigation size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-yellow-400">Mobile Service</h3>
          </div>
          <p className="text-gray-300 text-sm">We come to you! Professional detailing at your doorstep.</p>
        </div>

        <div className="group bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Car size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-yellow-400">All Vehicle Types</h3>
          </div>
          <p className="text-gray-300 text-sm">Cars, trucks, SUVs, and more - we handle them all.</p>
        </div>

        <div className="group bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 border border-yellow-400/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Clock size={24} className="text-black" />
            </div>
            <h3 className="text-xl font-bold text-yellow-400">Flexible Scheduling</h3>
          </div>
          <p className="text-gray-300 text-sm">Book at your convenience, we work around your schedule.</p>
        </div>
      </div>
    </div>

    {/* Map Container with Enhanced Styling */}
    <div className="relative w-full max-w-7xl h-[480px] rounded-3xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl mx-auto mb-12 group hover:border-yellow-400/50 transition-all duration-500">
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80 z-10 pointer-events-none group-hover:bg-gradient-to-br group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/70 transition-all duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 via-yellow-400/10 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <iframe
        title="Houston Service Area Map"
        src="https://www.google.com/maps?q=Houston,TX&z=9&output=embed"
        width="100%"
        height="100%"
        className="w-full h-full relative z-0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Enhanced Animated Pinpoint Overlay */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-20">
        <span className="relative flex h-20 w-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-40"></span>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-20" style={{ animationDelay: '1s' }}></span>
          <MapPin size={80} className="relative z-10 text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)] group-hover:scale-110 transition-transform duration-300" />
        </span>
      </div>

      {/* Floating service area indicators */}
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-black/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-4 py-2 text-yellow-400 text-sm font-semibold shadow-lg">
          Crosby, TX
        </div>
      </div>
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-black/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-4 py-2 text-yellow-400 text-sm font-semibold shadow-lg">
          Spring, TX
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/80 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-4 py-2 text-yellow-400 text-sm font-semibold shadow-lg">
          Conroe, TX
        </div>
      </div>
    </div>
    
    {/* Enhanced Info Card */}
    <AreaInfoCard />
  </section>
);

export default ServicesProvidedAreas; 