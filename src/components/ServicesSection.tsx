import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="glass-card p-6 rounded-xl hover:shadow-primary transition-all duration-300 h-full">
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 font-clash">{title}</h3>
      <p className="text-gray">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("realestate");

  // SVG Icons
  const chatbotIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );

  const automationIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 13.5h2.5a2 2 0 0 0 0-4H13" />
      <path d="M10.5 13.5H8a2 2 0 0 1 0-4h3.5" />
      <circle cx="12" cy="2" r="1" />
      <circle cx="12" cy="22" r="1" />
      <circle cx="4" cy="12" r="1" />
      <circle cx="20" cy="12" r="1" />
      <circle cx="6.9" cy="6.9" r="1" />
      <circle cx="17.1" cy="17.1" r="1" />
      <circle cx="17.1" cy="6.9" r="1" />
      <circle cx="6.9" cy="17.1" r="1" />
    </svg>
  );

  const dashboardIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );

  const dataIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
      <path d="M21 11H3" />
      <path d="m9 3-2 3h10l-2-3Z" />
      <line x1="9" y1="15" x2="15" y2="15" />
    </svg>
  );

  const voiceIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  );

  const cartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );

  return (
    <section id="services" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/3 right-[20%] w-80 h-80 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
            <span className="text-gradient">AI-Powered</span> Services
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Cutting-edge automation solutions designed to save time, reduce costs, and scale your operations instantly.
          </p>
        </div>

        <Tabs defaultValue="realestate" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-dark-gray/30 p-1">
              <TabsTrigger 
                value="realestate" 
                className={`px-6 py-3 ${activeTab === "realestate" ? "bg-primary text-dark" : "text-gray hover:text-light"}`}
              >
                Real Estate
              </TabsTrigger>
              <TabsTrigger 
                value="ecommerce"
                className={`px-6 py-3 ${activeTab === "ecommerce" ? "bg-primary text-dark" : "text-gray hover:text-light"}`}
              >
                eCommerce
              </TabsTrigger>
              <TabsTrigger 
                value="healthcare"
                className={`px-6 py-3 ${activeTab === "healthcare" ? "bg-primary text-dark" : "text-gray hover:text-light"}`}
              >
                Healthcare
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="realestate" className="animate-fade-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Auto-Follow Up Agents" 
                description="AI agents that automatically follow up with leads, nurture relationships, and keep your pipeline full without manual work."
                icon={automationIcon}
              />
              <ServiceCard 
                title="WhatsApp AI Chatbot" 
                description="24/7 property inquiries, scheduling, and lead qualification directly through WhatsApp with zero human intervention."
                icon={chatbotIcon}
              />
              <ServiceCard 
                title="Voice to CRM AI" 
                description="Record notes after showings and let AI transcribe, summarize, and update your CRM with action items automatically."
                icon={voiceIcon}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="ecommerce" className="animate-fade-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Abandoned Cart Recovery" 
                description="AI-powered recovery system that intelligently re-engages customers with personalized messaging to complete their purchase."
                icon={cartIcon}
              />
              <ServiceCard 
                title="Customer Support Bot" 
                description="24/7 multilingual support system that handles returns, exchanges, and common questions without human intervention."
                icon={chatbotIcon}
              />
              <ServiceCard 
                title="Sales Analytics Dashboard" 
                description="Real-time data visualization that identifies trends, inventory needs, and sales opportunities you might be missing."
                icon={dashboardIcon}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="healthcare" className="animate-fade-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Patient Inquiry Bot" 
                description="Intelligent chatbot that answers questions, books appointments, and sends reminders to reduce administrative workload."
                icon={chatbotIcon}
              />
              <ServiceCard 
                title="Data Integration System" 
                description="Connect your EMR, appointment system, and patient records into one seamless automated workflow."
                icon={dataIcon}
              />
              <ServiceCard 
                title="Clinic Analytics Platform" 
                description="Monitor patient flow, appointment utilization, and service efficiency with actionable insights dashboard."
                icon={dashboardIcon}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-primary text-dark hover:bg-primary/90 hover:shadow-primary-lg transition-all px-6 py-6">
            Explore All AI Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;