import { Facebook, Instagram } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/goldstardetailing',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/goldstardetailing',
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-400 text-sm font-medium">Follow us:</span>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:rotate-3`}
          aria-label={`Visit our ${social.name} page`}
        >
          <social.icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia; 