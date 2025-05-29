
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const ResultsSection = () => {
  const [activeTab, setActiveTab] = useState("realestate");

  // Testimonial component
  const Testimonial = ({ name, role, company, quote, result, metric }: { 
    name: string; 
    role: string; 
    company: string; 
    quote: string;
    result: string;
    metric: string;
  }) => {
    return (
      <div className="glass-card p-8 rounded-xl relative">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-dark text-xl font-bold">"</span>
        </div>
        
        <p className="text-light text-lg mb-6">{quote}</p>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h4 className="font-semibold text-primary">{name}</h4>
            <p className="text-gray text-sm">{role}, {company}</p>
          </div>
          
          <div className="mt-4 md:mt-0 md:text-right">
            <p className="text-sm text-gray">{result}</p>
            <p className="text-xl font-clash font-bold text-primary">{metric}</p>
          </div>
        </div>
      </div>
    );
  };

  // Results Chart
  const ResultsChart = ({ data, title }: { data: number[]; title: string }) => {
    const maxValue = Math.max(...data);

    return (
      <div className="glass-card p-6 rounded-xl">
        <h4 className="text-lg font-medium mb-4 text-light">{title}</h4>
        
        <div className="flex items-end h-40 gap-3 mb-3">
          {data.map((value, index) => (
            <div 
              key={index} 
              className="flex-1 bg-gradient-to-t from-primary/20 to-primary relative group transition-all duration-500"
              style={{ 
                height: `${(value / maxValue) * 100}%`,
              }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-dark px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                {value}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <div className="text-xs text-gray">Before</div>
          <div className="text-xs text-primary">With Leveriz</div>
        </div>
      </div>
    );
  };

  return (
    <section id="results" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[40%] left-[5%] w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-clash font-bold mb-4">
            <span className="text-gradient">Measured</span> Results
          </h2>
          <p className="text-gray max-w-2xl mx-auto">
            Don't just take our word for it. See the quantifiable impact our AI automation systems have delivered.
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
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Testimonial 
                  name="Ramesh Kumar"
                  role="Principal Broker"
                  company="Ramesh Realty"
                  quote="Leveriz's AI follow-up system automatically nurtures leads that would have fallen through the cracks. The WhatsApp bot handles basic questions 24/7, so my team can focus on actual closings."
                  result="Time saved weekly"
                  metric="20+ hours"
                />
                
                <div className="mt-8">
                  <Testimonial 
                    name="Priya Sharma"
                    role="Sales Director"
                    company="SkyHigh Properties"
                    quote="I was skeptical about AI, but the Voice-to-CRM feature has been a game-changer. I dictate notes after showings, and everything is organized and actionable by morning."
                    result="Lead conversion increase"
                    metric="32%"
                  />
                </div>
              </div>
              
              <div>
                <ResultsChart 
                  title="Monthly Deals Closed" 
                  data={[4, 6, 9, 12, 15]} 
                />
                
                <div className="mt-8">
                  <ResultsChart 
                    title="Follow-ups Per Lead" 
                    data={[2, 5, 8, 10, 12]} 
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ecommerce" className="animate-fade-up">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Testimonial 
                  name="Ananya Desai"
                  role="Founder"
                  company="ClaraCart"
                  quote="The abandoned cart recovery AI has completely transformed our business. Instead of losing sales, we're now recovering 31% of abandoned carts with personalized messaging that feels human."
                  result="Revenue increase"
                  metric="42%"
                />
                
                <div className="mt-8">
                  <Testimonial 
                    name="Vikram Mehta"
                    role="Operations Head"
                    company="TrendWave"
                    quote="Their customer support bot handles 87% of our inquiries without human intervention. My team is now focused on growth rather than answering the same questions repeatedly."
                    result="Support cost reduction"
                    metric="65%"
                  />
                </div>
              </div>
              
              <div>
                <ResultsChart 
                  title="Cart Recovery Rate %" 
                  data={[8, 12, 18, 24, 31]} 
                />
                
                <div className="mt-8">
                  <ResultsChart 
                    title="Customer Satisfaction" 
                    data={[70, 75, 82, 88, 92]} 
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="healthcare" className="animate-fade-up">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Testimonial 
                  name="Dr. Sudha Menon"
                  role="Medical Director"
                  company="Swasthya Clinic"
                  quote="Our patient inquiry bot handles appointment scheduling, reminders, and basic questions, freeing up our front desk staff to provide better in-person care. No-shows have decreased dramatically."
                  result="Administrative hours saved weekly"
                  metric="35+ hours"
                />
                
                <div className="mt-8">
                  <Testimonial 
                    name="Arjun Reddy"
                    role="Clinic Manager"
                    company="MedLife Center"
                    quote="The analytics platform exposed inefficiencies in our scheduling that we couldn't see before. After implementing the recommended changes, we can now see 20% more patients with the same staff."
                    result="No-show reduction"
                    metric="78%"
                  />
                </div>
              </div>
              
              <div>
                <ResultsChart 
                  title="Daily Patient Capacity" 
                  data={[25, 28, 32, 38, 42]} 
                />
                
                <div className="mt-8">
                  <ResultsChart 
                    title="Patient Wait Time (min)" 
                    data={[45, 35, 25, 18, 12]} 
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ResultsSection;