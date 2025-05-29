import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Received!",
        description: "We'll get back to you within 24 hours with your personalized automation blueprint.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        message: "",
      });
    }, 1500);
  };

  const openWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://wa.me/message/YOURWHATSAPPNUMBER', '_blank');
  };

  const demoFeatures = [
    { 
      title: "WhatsApp Bot Integration", 
      description: "See how our AI responds to customer inquiries in real-time."
    },
    { 
      title: "Lead Scoring System", 
      description: "Watch AI prioritize leads based on behavior patterns."
    },
    { 
      title: "Automation Blueprint", 
      description: "Get a custom roadmap for your specific business needs."
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[10%] w-80 h-80 rounded-full bg-primary/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
            Start <span className="text-gradient">Automating</span> Today
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Schedule a free consultation and get a custom automation blueprint for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-clash font-bold mb-6">Book Your Free Consultation</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray mb-1">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-dark-darker border-dark-gray text-light"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray mb-1">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-darker border-dark-gray text-light"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray mb-1">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-dark-darker border-dark-gray text-light"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray mb-1">Business Name</label>
                  <Input
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="bg-dark-darker border-dark-gray text-light"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray mb-1">What would you like to automate?</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-dark-darker border-dark-gray text-light"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-dark hover:bg-primary/90 hover:shadow-primary-lg transition-all py-6 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Your Free Consultation"}
              </Button>
            </form>
            
            <div className="flex items-center mt-6">
              <div className="flex-1 border-t border-dark-gray"></div>
              <span className="mx-4 text-sm text-gray">or</span>
              <div className="flex-1 border-t border-dark-gray"></div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full mt-6 border-primary/50 hover:bg-primary/10 flex items-center justify-center gap-2 py-6"
              onClick={openWhatsApp}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Chat on WhatsApp
            </Button>
          </div>
          
          <div>
            <div className="glass-card p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-clash font-bold mb-6">Live Demo Features</h3>
              
              <div className="space-y-6">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-light">{feature.title}</h4>
                      <p className="text-gray text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rotate-45 transform origin-bottom-left"></div>
                <div className="absolute top-0 right-0 text-xs text-dark font-semibold px-6 py-1 bg-primary transform rotate-45 translate-x-2 translate-y-3">
                  FREE
                </div>
              </div>
              
              <h3 className="text-xl font-clash font-bold mb-4">No-Risk Guarantee</h3>
              <p className="text-gray">
                Get a fully personalized automation blueprint for your business, completely free. We'll show you exactly what can be automated, how much time you'll save, and what the ROI looks like.
              </p>
              
              <div className="mt-6 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-sm text-light">
                  No obligation, no pressure - just actionable insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;