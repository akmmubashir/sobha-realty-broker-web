import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function FooterSection() {
  return (
    <footer id="contact" className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Let's Discuss <br /> Your Vision.</h2>
            <p className="text-xl text-gray-400 font-light max-w-md mb-12">
              Whether you're looking to buy, sell, or invest, our team of experts is ready to guide you through the world of luxury real estate.
            </p>
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@sobharealty.com" className="flex items-center gap-4 text-lg hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5" /> hello@sobharealty.com
              </a>
              <a href="tel:+971123456789" className="flex items-center gap-4 text-lg hover:text-gray-300 transition-colors">
                <Phone className="w-5 h-5" /> +971 123-456789
              </a>
              <div className="flex items-center gap-4 text-lg text-gray-400">
                <MapPin className="w-5 h-5" /> Dubai, UAE
              </div>
            </div>
          </div>
          <div className="bg-[#121212] p-8 md:p-12 border border-white/5">
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                <input type="text" className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input type="email" className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors"></textarea>
              </div>
              <MagneticButton className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition-colors">
                Send Message
              </MagneticButton>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-gray-500 text-xs uppercase tracking-widest">
          <div className="mb-4 md:mb-0">&copy; 2024 Sobha Realty. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
