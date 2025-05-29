import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 relative">
      {/* Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-clash font-bold text-gradient tracking-tighter">
              Leveriz
            </Link>
            <p className="text-gray mt-4">
              Making AI practical, profitable, and painless for every business.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center text-light hover:bg-primary hover:text-dark transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center text-light hover:bg-primary hover:text-dark transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-dark-gray flex items-center justify-center text-light hover:bg-primary hover:text-dark transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-light font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray hover:text-primary transition-all">AI Chatbots</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">Lead Nurturing</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">Data Dashboards</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">WhatsApp AI</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">Cart Recovery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-light font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray hover:text-primary transition-all">Real Estate</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">eCommerce</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">Healthcare</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">Service Businesses</a></li>
              <li><a href="#" className="text-gray hover:text-primary transition-all">SaaS Companies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-light font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+919876543210" className="text-gray hover:text-primary transition-all">+91 9876543210</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@leveriz.com" className="text-gray hover:text-primary transition-all">hello@leveriz.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray">Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-dark-gray flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray text-sm">
            &copy; {new Date().getFullYear()} Leveriz. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray text-sm hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="text-gray text-sm hover:text-primary transition-all">Terms of Service</a>
            <a href="#" className="text-gray text-sm hover:text-primary transition-all">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;