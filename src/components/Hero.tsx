import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Components for visual elements
const CircleProgress = ({ value }: { value: number }) => {
  const circumference = 2 * Math.PI * 60;
  const progress = (value / 100) * circumference;

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="#1c1c1c"
          stroke="#2c2c2c"
          strokeWidth="2"
        />
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#00ffc3"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transform -rotate-90 origin-center transition-all duration-1000 ease-out"
        />
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#00ffc3"
          fontSize="20"
          fontWeight="bold"
          className="font-space"
        >
          {value.toFixed(3)}
        </text>
      </svg>
    </div>
  );
};

const AnalyticsChart = () => {
  return (
    <div className="glass-card p-4 rounded-xl w-full max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <div className="h-2 w-12 bg-primary/50 rounded"></div>
        <div className="h-2 w-6 bg-dark-gray rounded"></div>
      </div>
      <svg className="w-full h-28" viewBox="0 0 300 100">
        <path
          d="M0,90 C30,85 60,10 90,15 C120,20 150,80 180,55 C210,30 240,70 270,30 C300,10 300,10 300,10"
          fill="none"
          stroke="#00ffc3"
          strokeWidth="3"
          className="opacity-70"
        />
        <path
          d="M0,90 C30,85 60,10 90,15 C120,20 150,80 180,55 C210,30 240,70 270,30 C300,10 300,10 300,10"
          fill="none"
          stroke="#00ffc3"
          strokeWidth="1"
        />
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00ffc3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00ffc3" stopOpacity="0" />
        </linearGradient>
        <path
          d="M0,90 C30,85 60,10 90,15 C120,20 150,80 180,55 C210,30 240,70 270,30 C300,10 300,10 300,10 L300,100 L0,100 Z"
          fill="url(#chartGradient)"
        />
        <circle cx="90" cy="15" r="4" fill="#00ffc3" />
        <circle cx="180" cy="55" r="4" fill="#00ffc3" />
        <circle cx="270" cy="30" r="4" fill="#00ffc3" />
      </svg>
      <div className="flex justify-between mt-1">
        <div className="text-xs text-gray">1</div>
        <div className="text-xs text-gray">3</div>
        <div className="text-xs text-gray">5</div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [progressValue, setProgressValue] = useState(0);
  const targetValue = 8.521;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue(targetValue);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResults = (e: React.MouseEvent) => {
    e.preventDefault();
    const resultsSection = document.getElementById('results');
    resultsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="absolute top-[30%] left-[10%] w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute top-[60%] right-[5%] w-96 h-96 rounded-full bg-primary/5 filter blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[30%] w-48 h-48 rounded-full bg-primary/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-clash font-bold mb-6 leading-tight">
              <span className="text-gradient animate-neon-pulse">Automate Everything.</span>
              <br />
              Replace Teams.
              <br />
              <span className="relative">
                Save <span className="text-primary">80%</span> Time.
                <div className="absolute -bottom-2 left-0 h-1 w-24 bg-primary animate-pulse-grow"></div>
              </span>
            </h1>
            
            <p className="text-gray text-lg mb-8 max-w-lg">
              Leveriz builds done-for-you AI automation systems for real estate, eCommerce, and healthcare. We save time, reduce overhead, and scale operations instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-dark hover:bg-primary/90 hover:shadow-primary-lg transition-all px-6 py-6 text-lg font-medium animate-pulse-grow"
              >
                Contact for Consultation
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToResults}
                className="border-primary/30 text-light hover:bg-primary/10 transition-all px-6 py-6 text-lg"
              >
                See Results
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main visual with animated elements */}
              <div className="relative flex items-center justify-center">
                <img src="/lovable-uploads/8b418339-a9ca-4964-8447-8a32b459880c.png" alt="AI Automation Robot" className="w-full max-w-md animate-float" />
                
                {/* Animated overlay elements */}
                <div className="absolute -left-10 -top-10 animate-float" style={{ animationDelay: '0.5s' }}>
                  <CircleProgress value={progressValue} />
                </div>
                
                <div className="absolute -right-6 top-10 animate-float" style={{ animationDelay: '1s' }}>
                  <AnalyticsChart />
                </div>
                
                <div className="absolute -left-4 bottom-10 glass-card p-2 rounded-lg animate-pulse-grow">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <div className="text-xs text-light">AI Bot Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;