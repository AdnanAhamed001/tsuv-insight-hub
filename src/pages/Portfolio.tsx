import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

interface Company {
  name: string;
  desc: string;
}

const companies: Company[] = [
  { name: "E-Waste Social", desc: "Connecting Waste to the nearest recycler through auctioning. Providing recyclers with R&D insights into the industry trends, certified assurances to its corporate customers, allowing tracking to the last mile of waste disposal." },
  { name: "DoseTap", desc: "In addition to Reminding the patients when to take medication, provides Insights on medication Adherence patterns to various stakeholders, with Remote tracking for family." },
  { name: "NewBoo", desc: "India's 1st completely Chemical-Free, Washable and Reusable waterproof diapers in the market that are made from 100% cloth to provide night-time absorbency of 12+hrs." },
  { name: "Digital Jockey", desc: "A cloud-based startup that provides Marketing As A Service (MAAS). It specialises on providing tailored BPO Infrastructure solutions to New Generation startups and SMEs." },
  { name: "PinkyMind", desc: "A Mental healthcare start-up with a Listener QuickChat backed by genuine human expert listeners, working to provide everyone a 'Safe Space'." },
  { name: "Kamikala", desc: "A Social Impact venture with the burning desire to support the traditional Craftspeople who emigrated from Tibet in the 1960s and conserve the endangered art form." },
  { name: "Unique Creations Software", desc: "Powered by its own low bandwidth Video conferencing tool, and automation according to the needs of educational organizations. Currently serving 40K Students across Asian and African markets." },
  { name: "SMB Kart", desc: "A 'no-coding' SAAS automated E-Com platform to digitally transform SME sector. Enabling owners to create E-commerces in 30 minutes with no prior technical experience." },
  { name: "Pioneers In Vet Diagnostics", desc: "India's first doorstep facility, a full-service veterinary laboratory situated in Maharashtra, provides Pharmacologic & Toxicologic Pathology & Diagnostic Services." },
  { name: "BidWheelz", desc: "India's 1st INVENTORY-FREE AI Powered Automobile Auction Portal. ONE STOP SOLUTION that provides buyers with servicing, loans, insurance, and RC transfer services." },
  { name: "PrintSEC", desc: "PrintSEC makes personal and professional data secure and helps organisations contribute to corporate social responsibility by adopting green IT." },
  { name: "SABBPE", desc: "Revolutionising digital payments for both Business-to-Consumer (B2C) and Business-to-Business (B2B) domains." },
  { name: "Electica", desc: "Electica is scaling up the EV ecosystem in India by installing battery swapping stations all across India." },
  { name: "Marhaba Haji", desc: "Revolutionising halal tourism by uniting tour operators through an aggregator platform. Leveraging technology for cost-efficiency, enhancing service quality." },
  { name: "FlyLab Solutions", desc: "FlyLab Solutions is on a mission to enable airspace accessibility by offering Drones as a Service (DaaS)." },
  { name: "Servii", desc: "Marketing Automation Platform for Automotive SMBs." },
  { name: "EngineersConnect", desc: "Engineers Connect is pioneering the Future of Engineering Education and Careers with AI." },
  { name: "EasyFruitz", desc: "EasyFruitz is leading a fresh produce revolution, catering to the needs of local vendors, traders, and consumers." },
  { name: "MyEkigai", desc: "MyEkigai is a Platform as a Service (PaaS) integrating Mobility, Charging, and Battery-as-a-Service (MCB), developing a comprehensive EV framework." },
  { name: "Cafoco", desc: "A platform focusing on sustainable food solutions and community-driven food commerce." },
  { name: "ChocoChi", desc: "ChocoChi aims to make gourmet chocolates accessible to all, tapping into the burgeoning confectionery market in India." },
  { name: "UpRisers Preschool", desc: "UpRisers Preschool is a nurturing haven where children explore, learn and grow, providing a holistic early education experience." },
  { name: "Fitrofy", desc: "Fitrofy offers B2B white-labeling services for weight management platforms, catering to the growing demand for personalized health solutions." },
  { name: "Inaayat", desc: "Inaayat offers premium handcrafted Indian silver jewelry, supported by celebrity endorsements, reviving lost jewelry crafts." },
  { name: "Fuloni", desc: "Fuloni manufactures biodegradable and environmentally friendly nursery pots, catering to the demand for sustainable home decor solutions." },
  { name: "JustBeMama", desc: "Just Be Mama is dedicated to maternal health, providing support to mothers from preconception to post-delivery." },
  { name: "Staunch", desc: "Staunch is revolutionising personal fitness training through its platform, redefining how individuals approach their fitness goals." },
  { name: "EdYoda", desc: "EdYoda is transforming B2B online education with a personalized, interactive, and outcome-based approach." },
  { name: "R-Buy", desc: "R-Buy offers centralized detergent dispensing units at residential communities, reducing purchase costs and plastic waste." },
  { name: "Asparsh", desc: "Asparsh is a sustainable retail apparel and fashion brand catering to working women, manufactured in India for global consumption." },
  { name: "EVBooth", desc: "Charging Ride tackles range anxiety by installing low-CAPEX EV charging stations across India." },
  { name: "Carver Farms", desc: "Carver Farms is an agri-tech platform serving global customers by bringing product transparency in the fresh fruits and vegetable supply-chain." },
  { name: "MedWorld Solutions", desc: "Healthcare solutions platform providing technology-driven medical services and consultation." },
  { name: "Food Fox", desc: "FoodFox is a food ordering platform with a B2B2C approach, Digitalizing Cafeterias and Modernizing Food Experience for colleges, universities, hospitals & corporates." },
  { name: "RapidEzy", desc: "India's first company to provide a complete cloud-based training-as-a-service, specialized for SMEs with a fully featured Learning Management System." },
  { name: "My Pahadi Dukan", desc: "From the mountains to your doorstep — promoting an entrepreneurship ecosystem in mountain communities to help preserve indigenous practices." },
  { name: "ERIP", desc: "ERIP is India's first mobile RepairTech platform. ERIP's vision is to make the entire repair process as easy as buying products online." },
  { name: "BeFriends", desc: "A Community Powered AI Backed Emotional & Mental Health Support Platform. Creating a world where talking about your emotions is not taken lightly." },
  { name: "ExtraMile Play", desc: "ExtraMile — your default team building partner to build productive teams at the workplace. The only SaaS tool you need for instant, on-demand team engagements." },
  { name: "Boingg", desc: "Boingg.in is an Indian online retailer specializing in kids furniture. A D2C brand that focuses on creating fun, functional, and safe furniture for children." },
  { name: "DaanVeda", desc: "DaanVeda is an AI-powered fundraising platform that helps nonprofits find donors, grants, and CSR opportunities." },
  { name: "Togo's Momos", desc: "Togo's Momo, your go-to destination for delightful Chinese cuisine. Known for signature dishes like the Super Crunchy Momo and cheese puffs." },
  { name: "PawSpace", desc: "PawSpace is dedicated to improving life for pets and pet parents through well-researched, reliable pet care services in India." },
  { name: "Gastronomix", desc: "Gastronomix revives authentic native cuisines through tech-enabled micro-QSR kiosks, delivering affordable, high quality foods." },
  { name: "Flow Sports Life", desc: "Flow Sports Life is a premium sports academy offering expert badminton and football coaching with world-class facilities." },
  { name: "Answer Genomics", desc: "Answer Genomics uses DNA analysis to decode your genetic blueprint, combining it with medical and lifestyle data for optimal health." },
  { name: "FixiT", desc: "Fixit is an AI-powered sales assistant for real estate, qualifying, nurturing, and following up with leads." },
  { name: "FitKin", desc: "Fitkin is a women-led activewear brand offering stylish, high-performance, and size-inclusive apparel designed for Indian women." },
  { name: "Alchemyst AI", desc: "Alchemyst AI provides a neural and data layer for AI agents and LLM applications, enabling developers to ship AI products up to 20x faster." },
  { name: "Naario", desc: "Naario is a women-led organic food brand offering homemade healthy products while empowering women through entrepreneurship." },
  { name: "Evora Greens", desc: "Evora Greens offers clean label vegetarian products like 100% Arabica AA grade Chikmagalur coffee for quality, nutrition, and a better you." },
  { name: "OpenSignals | GroCliq", desc: "GroCliq is an AI-powered SEO platform that automates content, indexing, and analytics to help brands and agencies rank faster." },
  { name: "Bioreform", desc: "BioReform makes eco-friendly, biodegradable bags from agricultural waste, offering a sustainable alternative to plastic." },
  { name: "Crink", desc: "Crink is an AI-powered mental wellness app that provides personalized support for stress management, parenting guidance, and self-care." },
  { name: "FreshLeaf", desc: "A new-age, lifestyle-first tea brand reimagining India's tea experience through innovation in hot teas, chai blends, and ready-to-drink sparkling teas." },
  { name: "MerryHealth", desc: "An AI-powered emergency response ecosystem for Bharat that connects ambulances, hospitals, and patients on a single platform." },
  { name: "Iom Bioworks", desc: "An Indo-Japanese precision health company leveraging microbiome science and AI to address gut-driven health conditions." },
  { name: "DriverShaab", desc: "India's on-demand chauffeur and driver services platform connecting businesses and individuals with verified professional drivers." },
  { name: "DealBuddy", desc: "A gamified e-commerce platform where users set their own prices and bid for deals starting as low as ₹0.01." },
  { name: "Globio", desc: "An upward mobility platform for blue-collar workers providing AI-driven language training and recruiter matching for global jobs." },
];

const Portfolio = () => {
  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground">PORTFOLIO COMPANIES</h1>
          <p className="max-w-3xl text-primary-foreground/80">
            Backing Bharat's most resilient founders. Explore the 65+ category-defining startups that have accelerated their growth through The StepUp Ventures.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c) => (
              <div key={c.name} className="tool-card flex flex-col">
                <div className="mb-3 flex h-16 items-center justify-center rounded-md bg-muted">
                  <span className="font-display text-lg font-bold text-primary">{c.name.charAt(0)}</span>
                </div>
                <h3 className="mb-1 font-display text-base font-semibold">{c.name}</h3>
                <p className="flex-1 text-xs text-muted-foreground">{c.desc}</p>
                <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary">
                  Know More <ExternalLink size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <h2 className="mb-4 font-display text-3xl font-bold">Ready to join this list?</h2>
        <Link to="/program" className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground hover:bg-secondary/90">
          Apply for the Next Cohort
        </Link>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
