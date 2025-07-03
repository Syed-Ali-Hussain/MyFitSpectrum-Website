import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-brand-blue">MyFitSpectrum</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering neurodiverse individuals through AI-powered fitness technology. Making fitness accessible, inclusive, and enjoyable for everyone.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/myfitspectrum?igsh=MXFteHAzY2JzdXdpNA==" 
                className="w-10 h-10 bg-brand-blue hover:bg-brand-blue/80 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-brand-blue transition-colors">Our Mission</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MyFitSpectrum. All rights reserved. Built with ❤️ for the neurodiverse community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
