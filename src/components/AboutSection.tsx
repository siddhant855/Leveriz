import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[30%] right-[10%] w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-primary/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
              About <span className="text-gradient">Leveriz</span>
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              We're on a mission to make AI practical, profitable, and painless for every business.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-xl overflow-hidden bg-dark-gray/30 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 animate-pulse flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-dark flex items-center justify-center font-bold">L</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-clash font-bold mb-4">
                  🧠 From Campus Labs to Industry Impact
                </h3>
                <p className="text-gray mb-6">
                  At Leveriz, we are a team of passionate AI innovators from IITs and IIITs, on a mission to bring enterprise-grade automation to the fingertips of growing businesses.
                </p>
                <p className="text-gray">
                  Born out of late-night builds, cutting-edge research, and real-world problem solving, we created Leveriz to bridge the gap between technical complexity and business simplicity. No fluff. Just smart, scalable automation that gets results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-xl h-full">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-clash font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">🎯</span> Our Mission
                </h3>
                <p className="text-gray flex-1">
                  To democratize AI automation for ambitious businesses — replacing time-consuming tasks with intelligent, revenue-driving systems.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl h-full">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-clash font-bold mb-4 flex items-center">
                  <span className="text-primary mr-2">🔭</span> Our Vision
                </h3>
                <p className="text-gray flex-1">
                  To empower 1 million businesses globally with efficient, ethical, and effective AI automation systems that scale effortlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-clash font-bold mb-6 text-center flex items-center justify-center">
              <span className="text-primary mr-2">💡</span> Why Leveriz?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <p className="text-gray text-sm">
                  Founded by top-tier engineering minds from India's premier tech institutes
                </p>
              </div>
              
              <div className="flex items-start p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 13 2 2 6-6" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-gray text-sm">
                  Lightning-fast delivery — idea to automation in under 7 days
                </p>
              </div>
              
              <div className="flex items-start p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <p className="text-gray text-sm">
                  Fully tailored solutions across industries like real estate, eCommerce, and healthcare
                </p>
              </div>
              
              <div className="flex items-start p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4" />
                    <path d="m6.41 6.41-2.83-2.83" />
                    <path d="M2 12h4" />
                    <path d="m6.41 17.59-2.83 2.83" />
                    <path d="M12 18v4" />
                    <path d="m17.59 17.59 2.83 2.83" />
                    <path d="M18 12h4" />
                    <path d="m17.59 6.41 2.83-2.83" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <p className="text-gray text-sm">
                  Built for results, not complexity — using the best of AI + automation + human insight
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-dark hover:bg-primary/90 hover:shadow-primary-lg transition-all px-6 py-6"
              >
                Contact for Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;