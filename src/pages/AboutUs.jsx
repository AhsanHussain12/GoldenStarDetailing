import SocialMedia from '../components/SocialMedia';
import { Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Award, number: "500+", label: "Happy Customers" },
    { icon: Users, number: "5", label: "Expert Detailers" },
    { icon: Clock, number: "3+", label: "Years Experience" },
    { icon: MapPin, number: "100%", label: "Local Service" }
  ];

  const team = [
    {
      name: "Alex Norman",
      position: "Founder",
    },
    {
      name: "Emilio",
      position: "Senior Detailer and Technician",
    },
    {
      name: "Claire Cameron",
      position: "Manager",
    }
  ];

  // Helper to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              About
            </span>
            <span className="text-white"> GoldenStar</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At GoldStarDetailing, we combine innovation and precision to restore your vehicle's sparkle. 
            With premium tools and passionate detailers, we guarantee showroom-level quality every time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                GoldenStar Detailing started in 2023 with one goal to bring high-quality mobile detailing directly to you. Whether you're at home or at work, we come fully equipped to make your vehicle look its absolute best.
                From deep interior cleans to exterior shine, paint correction, and ceramic or graphene coatings, we treat every car like our own. We're proud to offer convenient, professional, and reliable detailing with results you can see and feel.
                </p>
              </div>
            </div>
            <div className="relative flex justify-center items-center h-full py-8">
              <div className="flex justify-center items-center w-full h-full">
                <div className="bg-black/90 border-4 border-yellow-400 shadow-2xl flex items-center justify-center" style={{ width: '220px', height: '220px', boxShadow: '0 0 48px 0 #fbbf24cc' }}>
                  <img
                    src="/goldenstarLogo.png"
                    alt="GoldenStar Detailing Logo"
                    className="object-contain w-40 h-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-black" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 border border-yellow-500/20 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Quality First
              </h3>
              <p className="text-gray-300">
                We never compromise on quality. Every service is performed with the same 
                attention to detail, regardless of the vehicle type or package selected.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 border border-yellow-500/20 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Customer Focus
              </h3>
              <p className="text-gray-300">
                Your satisfaction is our priority. We listen to your needs and tailor 
                our services to exceed your expectations every time.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 border border-yellow-500/20 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Reliability
              </h3>
              <p className="text-gray-300">
                We value your time and deliver on our promises. Flexible scheduling 
                and punctual service are cornerstones of our business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified professionals dedicated to making your vehicle shine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 flex justify-center">
                  <div className="w-28 h-28 rounded-full bg-black/80 border-4 border-yellow-400 flex items-center justify-center shadow-lg mx-auto">
                    <span className="text-4xl font-extrabold text-yellow-400 select-none">
                      {getInitials(member.name)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-3">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to give your vehicle the GoldStar treatment? Contact us today 
                to schedule your detailing service or learn more about our packages.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">Phone</h3>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400">Email</h3>
                    <p className="text-gray-300">info@goldstardetailing.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <SocialMedia />
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
                alt="Customer service"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 