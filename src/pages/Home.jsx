import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';
import Instructions from '../components/Instructions';
import ServicesProvidedAreas from '../components/ServicesProvidedAreas';
import { getMainPackage, getAddOns } from '../data/packages';
import { Sparkles, Shield, ShieldCheck, ShieldHalf, Wand2, Clock, Star, CheckCircle2, Droplets, Tag, Car, CarFront, Truck as TruckIcon } from 'lucide-react';

const Home = () => {
  const pkg = getMainPackage();
  const addOns = getAddOns();

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Showroom-level detailing with professional-grade products and techniques."
    },
    {
      icon: Shield,
      title: "Protection Guaranteed",
      description: "Long-lasting ceramic coatings and protective treatments for your vehicle."
    },
    {
      icon: Clock,
      title: "Convenient Service",
      description: "Flexible scheduling and mobile service options for your convenience."
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "Certified detailers with years of experience in automotive care."
    }
  ];

  // Icon mapping for list items
  const interiorIcons = [<CheckCircle2 className="text-yellow-400 group-hover:animate-pulse" size={20} />, <Sparkles className="text-yellow-400 group-hover:animate-pulse" size={20} />];
  const exteriorIcons = [<Droplets className="text-yellow-400 group-hover:animate-pulse" size={20} />, <Sparkles className="text-yellow-400 group-hover:animate-pulse" size={20} />];

  // Vehicle type icon mapping
  const vehicleTypeIcons = {
    Sedan: <Car size={18} className="inline-block mr-2 text-yellow-400 align-middle" />,
    SUV: <CarFront size={18} className="inline-block mr-2 text-yellow-400 align-middle" />,
    Truck: <TruckIcon size={18} className="inline-block mr-2 text-yellow-400 align-middle" />,
  };

  // Add-on icon mapping
  const addOnIcons = {
    'Paint Correction': <Wand2 size={32} className="text-yellow-400 drop-shadow-glow mx-auto" />,
    'Ceramic Coating': <ShieldCheck size={32} className="text-yellow-400 drop-shadow-glow mx-auto" />,
    'Graphene Coating': <Shield size={32} className="text-yellow-400 drop-shadow-glow mx-auto" />,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop"
            alt="Luxury car detailing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              GoldenStar
            </span>
            <span className="text-white"> Detailing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Transform your vehicle with our premium detailing services. 
            From basic washes to showroom-quality restorations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#packages"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Why Choose GoldenStar?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine innovation and precision to restore your vehicle's sparkle. 
              With premium tools and passionate detailers, we guarantee showroom-level quality every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/50 border border-yellow-500/20 rounded-xl hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-black" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Package Section as Cards */}
      <section id="packages" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              {pkg.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {pkg.description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center md:items-stretch">
            {/* Interior Card */}
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8 shadow-lg flex-1 min-w-[280px] max-w-md transition-all duration-300 hover:shadow-[0_0_32px_6px_rgba(251,191,36,0.8)] hover:border-yellow-400/90 hover:bg-black/60 h-full flex flex-col min-h-[340px]">
              <div className="flex items-center mb-4 gap-2">
                <Sparkles className="text-yellow-400 drop-shadow-glow" size={28} />
                <h3 className="text-2xl font-bold text-yellow-400">Interior Detailing Includes:</h3>
              </div>
              <ul className="list-none text-gray-200 space-y-3 mt-4">
                {pkg.interior.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 animate-in fade-in duration-300">
                      {interiorIcons[i % interiorIcons.length]}
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Exterior Card */}
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8 shadow-lg flex-1 min-w-[280px] max-w-md transition-all duration-300 hover:shadow-[0_0_32px_6px_rgba(251,191,36,0.8)] hover:border-yellow-400/90 hover:bg-black/60 h-full flex flex-col min-h-[340px]">
              <div className="flex items-center mb-4 gap-2">
                <Droplets className="text-yellow-400 drop-shadow-glow" size={28} />
                <h3 className="text-2xl font-bold text-yellow-400">Exterior Detailing Includes:</h3>
              </div>
              <ul className="list-none text-gray-200 space-y-3 mt-4">
                {pkg.exterior.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 animate-in fade-in duration-300">
                      {exteriorIcons[i % exteriorIcons.length]}
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Pricing Card */}
            <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8 shadow-lg flex-1 min-w-[280px] max-w-md transition-all duration-300 hover:shadow-[0_0_32px_6px_rgba(251,191,36,0.8)] hover:border-yellow-400/90 hover:bg-black/60 h-full flex flex-col min-h-[340px]">
              <div className="flex items-center mb-4 gap-2">
                <Tag className="text-yellow-400 drop-shadow-glow" size={28} />
                <h3 className="text-xl font-bold text-yellow-400">Package Pricing</h3>
              </div>
              <table className="w-full text-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="text-left py-2">Vehicle Type</th>
                    <th className="text-left py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.pricing.map((p, i) => (
                    <tr key={i} className="border-b border-yellow-500/10">
                      <td className="py-2 font-semibold">
                        {vehicleTypeIcons[p.type]}{p.type}
                      </td>
                      <td className="py-2">${p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Optional Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {addOns.map((add, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-6 shadow-lg text-center transition-all duration-300 hover:shadow-[0_0_32px_6px_rgba(251,191,36,0.8)] hover:border-yellow-400/90 hover:bg-black/60 cursor-pointer"
              >
                <div className="mb-3 flex justify-center">
                  {addOnIcons[add.name]}
                </div>
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

      <section className="relative overflow-hidden">
        <div className="text-left mb-12">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent mb-4">
           Where We Operate
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg"></div>
        </div>
        <ServicesProvidedAreas />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Book your detailing service today and experience the GoldStar difference. 
                Our team is ready to restore your vehicle to its former glory.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">Service Hours</h3>
                    <p className="text-gray-300">Monday - Sunday: 7:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Shield size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">Quality Guarantee</h3>
                    <p className="text-gray-300">100% satisfaction guaranteed on all services</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <SocialMedia />
              </div>
            </div>

            {/* <div>
              <ContactForm />
            </div> */}
            <div>
              <Instructions />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home; 