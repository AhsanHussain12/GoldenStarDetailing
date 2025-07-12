import { Facebook } from 'lucide-react';

const coordinators = [
  {
    name: 'Alex Norman',
    role: 'Owner & Lead Detailer',
    url: 'https://www.facebook.com/share/16dEDWj3y3/?mibextid=wwXIfr',
    description: 'Booking, service questions, detailing advice',
  },
  {
    name: 'Claire Cameron',
    role: 'Manager',
    url: 'https://www.facebook.com/share/1JxFu9EXSq/?mibextid=wwXIfr',
    description: 'Scheduling, confirmations, and updates',
  },
];

const Instructions = () => (
  <div className="bg-gray-900/50 border border-yellow-500/20 rounded-xl p-8 max-w-xl mx-auto">
    <h3 className="text-2xl font-bold text-yellow-400 mb-6">How to Contact Us</h3>
    <div className="space-y-6 mb-6">
      {coordinators.map((c, i) => (
        <div key={i} className="flex items-start gap-4 bg-black/60 rounded-lg p-4 border border-yellow-400/10 hover:border-yellow-400/40 transition-all duration-300">
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            aria-label={`Message ${c.name} on Facebook`}
          >
            <Facebook size={32} />
          </a>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-yellow-400 hover:text-yellow-300 text-lg"
              >
                {c.name}
              </a>
              <span className="text-gray-400 text-sm font-medium">– {c.role}</span>
            </div>
            <div className="text-gray-300 text-sm">{c.description}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-gray-300 text-base leading-relaxed">
      <p className="mb-2">
        You can message either of us — we’re a team and here to help! If you're unsure, just reach out and we’ll direct you from there.
      </p>
    </div>
  </div>
);

export default Instructions; 