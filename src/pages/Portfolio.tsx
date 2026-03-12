import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";
import { ExternalLink, ChevronDown } from "lucide-react";

interface Company {
  name: string;
  desc: string;
  logo?: string;
  founderImage?: string;
  sector: string;
}

const SECTORS = [
  "All",
  "ClimateTech / Sustainability / Circular Economy",
  "HealthTech / MedTech / Wellness",
  "EV / Mobility / Automotive",
  "AI / SaaS / DeepTech",
  "EdTech / Skill Development",
  "Food & Beverage",
  "D2C / Consumer Brands",
  "Social Impact / Community Platforms",
  "Marketplaces / Platforms / Commerce",
  "HR / Workplace / Productivity",
];

const companies: Company[] = [
  { name: "E-Waste Social", desc: "Connecting Waste to the nearest recycler through auctioning. Providing recyclers with R&D insights into the industry trends, certified assurances to its corporate customers, allowing tracking to the last mile of waste disposal.", logo: "portfolio/ewaste-social-logo.png", founderImage: "portfolio/ewaste-social-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },
  { name: "Fuloni", desc: "Fuloni manufactures biodegradable and environmentally friendly nursery pots, catering to the demand for sustainable home decor solutions.", logo: "portfolio/fuloni-logo.png", founderImage: "portfolio/fuloni-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },
  { name: "Bioreform", desc: "BioReform makes eco-friendly, biodegradable bags from agricultural waste, offering a sustainable alternative to plastic.", logo: "startups/bioreform-logo.png", founderImage: "startups/bioreform-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },
  { name: "R-Buy", desc: "R-Buy offers centralized detergent dispensing units at residential communities, reducing purchase costs and plastic waste.", logo: "portfolio/rbuy-logo.png", founderImage: "portfolio/rbuy-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },
  { name: "Carver Farms", desc: "Carver Farms is an agri-tech platform serving global customers by bringing product transparency in the fresh fruits and vegetable supply-chain.", logo: "portfolio/carver-farms-logo.png", founderImage: "portfolio/carver-farms-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },
  { name: "Cafoco", desc: "A platform focusing on sustainable food solutions and community-driven food commerce.", logo: "portfolio/cafoco-logo.png", founderImage: "portfolio/cafoco-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },
  { name: "EasyFruitz", desc: "EasyFruitz is leading a fresh produce revolution, catering to the needs of local vendors, traders, and consumers.", logo: "portfolio/easyfruitz-logo.png", founderImage: "portfolio/easyfruitz-founder.png", sector: "ClimateTech / Sustainability / Circular Economy" },

  { name: "DoseTap", desc: "In addition to Reminding the patients when to take medication, provides Insights on medication Adherence patterns to various stakeholders, with Remote tracking for family.", logo: "portfolio/dosetap-logo.png", founderImage: "portfolio/dosetap-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "PinkyMind", desc: "A Mental healthcare start-up with a Listener QuickChat backed by genuine human expert listeners, working to provide everyone a 'Safe Space'.", logo: "portfolio/pinkymind-logo.png", founderImage: "portfolio/pinkymind-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "Fitrofy", desc: "Fitrofy offers B2B white-labeling services for weight management platforms, catering to the growing demand for personalized health solutions.", logo: "portfolio/fitrofy-logo.png", founderImage: "portfolio/fitrofy-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "JustBeMama", desc: "Just Be Mama is dedicated to maternal health, providing support to mothers from preconception to post-delivery.", logo: "portfolio/justbemama-logo.png", founderImage: "portfolio/justbemama-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "Pioneers In Vet Diagnostics", desc: "India's first doorstep facility, a full-service veterinary laboratory situated in Maharashtra, provides Pharmacologic & Toxicologic Pathology & Diagnostic Services.", logo: "portfolio/pioneers-vet-logo.png", founderImage: "portfolio/pioneers-vet-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "MedWorld Solutions", desc: "Healthcare solutions platform providing technology-driven medical services and consultation.", logo: "portfolio/medworld-solutions-logo.png", founderImage: "portfolio/medworld-solutions-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "Nugenomics", desc: "Nugenomics uses DNA analysis to decode your genetic blueprint, combining it with medical and lifestyle data for optimal health.", logo: "startups/nugenomics-logo.png", founderImage: "startups/nugenomics-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "Iom Bioworks", desc: "An Indo-Japanese precision health company leveraging microbiome science and AI to address gut-driven health conditions.", logo: "portfolio/Iom-Bioworks-logo.png", founderImage: "portfolio/Iom-Bioworks-founder.jpg", sector: "HealthTech / MedTech / Wellness" },
  { name: "Crink", desc: "Crink is an AI-powered mental wellness app that provides personalized support for stress management, parenting guidance, and self-care.", logo: "startups/crink-logo.png", founderImage: "startups/crink-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "MerryHealth", desc: "An AI-powered emergency response ecosystem for Bharat that connects ambulances, hospitals, and patients on a single platform.", logo: "portfolio/MerryHealth-logo.png", founderImage: "portfolio/MerryHealth-founder.jpg", sector: "HealthTech / MedTech / Wellness" },
  { name: "BeFriends", desc: "A Community Powered AI Backed Emotional & Mental Health Support Platform. Creating a world where talking about your emotions is not taken lightly.", logo: "portfolio/BeFriends-logo.jpg", founderImage: "portfolio/BeFriends-founder.png", sector: "HealthTech / MedTech / Wellness" },
  { name: "Staunch", desc: "Staunch is revolutionising personal fitness training through its platform, redefining how individuals approach their fitness goals.", logo: "portfolio/staunch-logo.png", founderImage: "portfolio/staunch-founder.png", sector: "HealthTech / MedTech / Wellness" },

  { name: "Electica", desc: "Electica is scaling up the EV ecosystem in India by installing battery swapping stations all across India.", logo: "portfolio/electica-logo.png", founderImage: "portfolio/electica-founder.png", sector: "EV / Mobility / Automotive" },
  { name: "EVBooth", desc: "Charging Ride tackles range anxiety by installing low-CAPEX EV charging stations across India.", logo: "portfolio/evbooth-logo.png", founderImage: "portfolio/evbooth-founder.png", sector: "EV / Mobility / Automotive" },
  { name: "MyEkigai", desc: "MyEkigai is a Platform as a Service (PaaS) integrating Mobility, Charging, and Battery-as-a-Service (MCB), developing a comprehensive EV framework.", logo: "portfolio/myekigai-logo.png", founderImage: "portfolio/myekigai-founder.jpg", sector: "EV / Mobility / Automotive" },
  { name: "BidWheelz", desc: "India's 1st INVENTORY-FREE AI Powered Automobile Auction Portal. ONE STOP SOLUTION that provides buyers with servicing, loans, insurance, and RC transfer services.", logo: "portfolio/bidwheelz-logo.png", founderImage: "portfolio/bidwheelz-founder.png", sector: "EV / Mobility / Automotive" },
  { name: "DriverShaab", desc: "India's on-demand chauffeur and driver services platform connecting businesses and individuals with verified professional drivers.", logo: "portfolio/DriverShaab-logo.png", founderImage: "portfolio/DriverShaab-founder.jpg", sector: "EV / Mobility / Automotive" },
  { name: "FlyLab Solutions", desc: "FlyLab Solutions is on a mission to enable airspace accessibility by offering Drones as a Service (DaaS).", logo: "portfolio/flylab-logo.png", founderImage: "portfolio/flylab-founder.png", sector: "EV / Mobility / Automotive" },

  { name: "SMB Kart", desc: "A 'no-coding' SAAS automated E-Com platform to digitally transform SME sector. Enabling owners to create E-commerces in 30 minutes with no prior technical experience.", logo: "portfolio/SMB-kart-logo.png", founderImage: "portfolio/SMB-kart-founder.jpg", sector: "AI / SaaS / DeepTech" },
  { name: "Servii", desc: "Marketing Automation Platform for Automotive SMBs.", logo: "portfolio/servii-logo.png", founderImage: "portfolio/servii-founder.png", sector: "AI / SaaS / DeepTech" },
  { name: "Alchemyst AI", desc: "Alchemyst AI provides a neural and data layer for AI agents and LLM applications, enabling developers to ship AI products up to 20x faster.", logo: "startups/alchemyst-ai-logo.png", founderImage: "startups/alchemyst-ai-founder.png", sector: "AI / SaaS / DeepTech" },
  { name: "OpenSignals | GroCliq", desc: "GroCliq is an AI-powered SEO platform that automates content, indexing, and analytics to help brands and agencies rank faster.", logo: "portfolio/OpenSignal-Grocliq-logo.png", founderImage: "portfolio/OpenSignal-Grocliq-founder.jpg", sector: "AI / SaaS / DeepTech" },
  { name: "FixiT", desc: "Fixit is an AI-powered sales assistant for real estate, qualifying, nurturing, and following up with leads.", logo: "portfolio/FixiT-logo.png", founderImage: "portfolio/FixiT-founder.jpg", sector: "AI / SaaS / DeepTech" },
  { name: "Unique Creations Software", desc: "Powered by its own low bandwidth Video conferencing tool, and automation according to the needs of educational organizations. Currently serving 40K Students across Asian and African markets.", logo: "portfolio/unique-creations-logo.png", founderImage: "portfolio/unique-creations-founder.png", sector: "AI / SaaS / DeepTech" },
  { name: "Digital Jockey", desc: "A cloud-based startup that provides Marketing As A Service (MAAS). It specialises on providing tailored BPO Infrastructure solutions to New Generation startups and SMEs.", logo: "portfolio/digital-jockey-logo.png", founderImage: "portfolio/digital-jockey-founder.png", sector: "AI / SaaS / DeepTech" },
  { name: "PrintSEC", desc: "PrintSEC makes personal and professional data secure and helps organisations contribute to corporate social responsibility by adopting green IT.", logo: "portfolio/printsec-logo.png", founderImage: "portfolio/printsec-founder.png", sector: "AI / SaaS / DeepTech" },
  { name: "SABBPE", desc: "Revolutionising digital payments for both Business-to-Consumer (B2C) and Business-to-Business (B2B) domains.", logo: "portfolio/sabbpe-logo.png", founderImage: "portfolio/sabbpe-founder.png", sector: "AI / SaaS / DeepTech" },

  { name: "EdYoda", desc: "EdYoda is transforming B2B online education with a personalized, interactive, and outcome-based approach.", logo: "portfolio/edyoda-logo.png", founderImage: "portfolio/edyoda-founder.png", sector: "EdTech / Skill Development" },
  { name: "RapidEzy", desc: "India's first company to provide a complete cloud-based training-as-a-service, specialized for SMEs with a fully featured Learning Management System.", logo: "portfolio/RAPIDEZY-logo.jpg", founderImage: "portfolio/RAPIDEZY-founder.jpg", sector: "EdTech / Skill Development" },
  { name: "EngineersConnect", desc: "Engineers Connect is pioneering the Future of Engineering Education and Careers with AI.", logo: "portfolio/engineersconnect-logo.png", founderImage: "portfolio/engineersconnect-founder.png", sector: "EdTech / Skill Development" },
  { name: "UpRisers Preschool", desc: "UpRisers Preschool is a nurturing haven where children explore, learn and grow, providing a holistic early education experience.", logo: "portfolio/uprisers-preschool-logo.png", founderImage: "portfolio/uprisers-preschool-founder.png", sector: "EdTech / Skill Development" },

  { name: "FreshLeaf", desc: "A new-age, lifestyle-first tea brand reimagining India's tea experience through innovation in hot teas, chai blends, and ready-to-drink sparkling teas.", logo: "startups/freshleaf-logo.png", founderImage: "startups/freshleaf-founder.png", sector: "Food & Beverage" },
  { name: "ChocoChi", desc: "ChocoChi aims to make gourmet chocolates accessible to all, tapping into the burgeoning confectionery market in India.", logo: "portfolio/chocochi-logo.png", founderImage: "portfolio/chocochi-founder.png", sector: "Food & Beverage" },
  { name: "Togo's Momos", desc: "Togo's Momo, your go-to destination for delightful Chinese cuisine. Known for signature dishes like the Super Crunchy Momo and cheese puffs.", logo: "portfolio/Togo's Momos-logo.png", founderImage: "portfolio/Togo's-Momos -founder.jpg", sector: "Food & Beverage" },
  { name: "Evora Greens", desc: "Evora Greens offers clean label vegetarian products like 100% Arabica AA grade Chikmagalur coffee for quality, nutrition, and a better you.", logo: "portfolio/Evora-Greens-logo.jpg", founderImage: "portfolio/Evora-Greens-founder.jpg", sector: "Food & Beverage" },
  { name: "Food Fox", desc: "FoodFox is a food ordering platform with a B2B2C approach, Digitalizing Cafeterias and Modernizing Food Experience for colleges, universities, hospitals & corporates.", logo: "portfolio/foodfox-logo.png", founderImage: "portfolio/foodfox-founder.jpg", sector: "Food & Beverage" },
  { name: "Gastronomix", desc: "Gastronomix revives authentic native cuisines through tech-enabled micro-QSR kiosks, delivering affordable, high quality foods.", logo: "portfolio/Gastronomix-logo.jpg", founderImage: "portfolio/downloadGastronomix-founder.jpg", sector: "Food & Beverage" },
  { name: "Naario", desc: "Naario is a women-led organic food brand offering homemade healthy products while empowering women through entrepreneurship.", logo: "startups/naario-logo.png", founderImage: "startups/naario-founder.png", sector: "Food & Beverage" },

  { name: "NewBoo", desc: "India's 1st completely Chemical-Free, Washable and Reusable waterproof diapers in the market that are made from 100% cloth to provide night-time absorbency of 12+hrs.", logo: "portfolio/newboo-logo.png", founderImage: "portfolio/newboo-founder.png", sector: "D2C / Consumer Brands" },
  { name: "Inaayat", desc: "Inaayat offers premium handcrafted Indian silver jewelry, supported by celebrity endorsements, reviving lost jewelry crafts.", logo: "portfolio/inaayat-logo.png", founderImage: "portfolio/inaayat-founder.png", sector: "D2C / Consumer Brands" },
  { name: "FitKin", desc: "Fitkin is a women-led activewear brand offering stylish, high-performance, and size-inclusive apparel designed for Indian women.", logo: "startups/fitkin-logo.png", founderImage: "startups/fitkin founder.jpg", sector: "D2C / Consumer Brands" },
  { name: "Boingg", desc: "Boingg.in is an Indian online retailer specializing in kids furniture. A D2C brand that focuses on creating fun, functional, and safe furniture for children.", logo: "startups/boingg-logo.png", founderImage: "startups/boingg founder.png", sector: "D2C / Consumer Brands" },
  { name: "Asparsh", desc: "Asparsh is a sustainable retail apparel and fashion brand catering to working women, manufactured in India for global consumption.", logo: "portfolio/asparsh-logo.png", founderImage: "portfolio/asparsh-founder.png", sector: "D2C / Consumer Brands" },
  { name: "Flow Sports Life", desc: "Flow Sports Life is a premium sports academy offering expert badminton and football coaching with world-class facilities.", logo: "portfolio/Flow-Sports-Life-logo.png", founderImage: "portfolio/Flow-Sports-Life-founder.jpg", sector: "D2C / Consumer Brands" },

  { name: "Kamikala", desc: "A Social Impact venture with the burning desire to support the traditional Craftspeople who emigrated from Tibet in the 1960s and conserve the endangered art form.", logo: "portfolio/kamikala-logo.png", founderImage: "portfolio/kamikala-founder.png", sector: "Social Impact / Community Platforms" },
  { name: "My Pahadi Dukan", desc: "From the mountains to your doorstep — promoting an entrepreneurship ecosystem in mountain communities to help preserve indigenous practices.", logo: "startups/mypahadi-logo.png", founderImage: "startups/mypahadi-founder.png", sector: "Social Impact / Community Platforms" },
  { name: "Globio", desc: "An upward mobility platform for blue-collar workers providing AI-driven language training and recruiter matching for global jobs.", logo: "portfolio/Globio-logo.jpg", founderImage: "portfolio/Globio-founder.jpg", sector: "Social Impact / Community Platforms" },
  { name: "DaanVeda", desc: "DaanVeda is an AI-powered fundraising platform that helps nonprofits find donors, grants, and CSR opportunities.", logo: "startups/daanveda-logo.png", founderImage: "startups/daanveda-founder.png", sector: "Social Impact / Community Platforms" },

  { name: "DealBuddy", desc: "A gamified e-commerce platform where users set their own prices and bid for deals starting as low as ₹0.01.", logo: "portfolio/DealBuddy-logo.png", founderImage: "portfolio/DealBuddy-founder.jpg", sector: "Marketplaces / Platforms / Commerce" },
  { name: "ERIP", desc: "ERIP is India's first mobile RepairTech platform. ERIP's vision is to make the entire repair process as easy as buying products online.", logo: "portfolio/ERIP-logo.png", founderImage: "portfolio/ERIP-founder.png", sector: "Marketplaces / Platforms / Commerce" },
  { name: "PawSpace", desc: "PawSpace is dedicated to improving life for pets and pet parents through well-researched, reliable pet care services in India.", logo: "portfolio/PawSpace-logo.png", founderImage: "portfolio/PawSpace-founder.jpg", sector: "Marketplaces / Platforms / Commerce" },
  { name: "Marhaba Haji", desc: "Revolutionising halal tourism by uniting tour operators through an aggregator platform. Leveraging technology for cost-efficiency, enhancing service quality.", logo: "portfolio/marhaba-haji-logo.png", founderImage: "portfolio/marhaba-haji-founder.png", sector: "Marketplaces / Platforms / Commerce" },

  { name: "ExtraMile Play", desc: "ExtraMile — your default team building partner to build productive teams at the workplace. The only SaaS tool you need for instant, on-demand team engagements.", logo: "startups/extramile-logo.png", founderImage: "startups/extramile-founder.png", sector: "HR / Workplace / Productivity" },
];

const CompanyCard = ({ company }: { company: Company }) => {
  const logoSrc = company.logo ? `/images/${company.logo}` : null;
  const founderSrc = company.founderImage ? `/images/${company.founderImage}` : null;

  return (
    <div className="tool-card flex flex-col overflow-hidden bg-card transition-all hover:shadow-md border border-border/50 rounded-xl relative group min-h-[400px]">
      {/* Top Banner / Founder Image Area */}
      <div className="relative w-full h-48 bg-muted/30 flex items-center justify-center border-b border-border/50">
        {founderSrc ? (
          <img
            src={founderSrc}
            alt={`${company.name} Founder`}
            loading="lazy"
            className="w-full h-full object-contain bg-white/5 transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
            <span className="font-display text-5xl font-bold text-primary/20">
              {company.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Sector badge */}
        <div className="absolute top-3 left-3 bg-primary/80 backdrop-blur-sm text-primary-foreground text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
          {company.sector.split("/")[0].trim()}
        </div>

        {/* Floating Logo overlay */}
        <div className="absolute -bottom-6 right-6 w-16 h-16 bg-white rounded-lg shadow-md border border-border flex items-center justify-center overflow-hidden p-2 z-10 group-hover:-translate-y-1 transition-transform">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${company.name} logo`}
              loading="lazy"
              className="h-full w-full object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.classList.remove("hidden");
                }
              }}
            />
          ) : null}
          <span className={`font-display text-xl font-bold text-primary ${logoSrc ? "hidden" : ""}`}>
            {company.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 pt-8 mt-2">
        <h3 className="mb-2 font-display text-lg font-semibold pr-4">{company.name}</h3>
        <p className="flex-1 text-sm text-muted-foreground line-clamp-4 mb-4">{company.desc}</p>

        <div className="mt-auto pt-4 border-t border-border/50">
          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors">
            Know More <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [selectedSector, setSelectedSector] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCompanies =
    selectedSector === "All"
      ? companies
      : companies.filter((c) => c.sector === selectedSector);

  return (
    <PageLayout>
      <section className="hero-gradient section-padding py-16 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format,compress&fit=crop&q=30&w=800')] bg-cover bg-center bg-blend-multiply bg-primary/90">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 text-sm text-primary-foreground/60">
            <Link to="/" className="hover:text-secondary">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-primary-foreground">Portfolio</span>
          </nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Portfolio</p>
          <h1 className="mb-2 font-display text-4xl font-bold text-primary-foreground">PORTFOLIO COMPANIES</h1>
          <p className="max-w-3xl text-primary-foreground/80">
            Backing Bharat's most resilient founders. Explore the 65+ category-defining startups that have accelerated their growth through The StepUp Ventures.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">

          {/* Filter Bar */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">Filter by Sector</span>
            <div className="relative w-full sm:max-w-sm">
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="w-full flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
              >
                <span className="truncate">{selectedSector}</span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1.5 rounded-xl border border-border bg-card shadow-xl overflow-hidden">
                  {SECTORS.map((sector) => (
                    <button
                      key={sector}
                      onClick={() => {
                        setSelectedSector(sector);
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-muted ${
                        selectedSector === sector
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground"
                      }`}
                    >
                      {sector === "All" ? "All Sectors" : sector}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {selectedSector !== "All" && (
              <button
                onClick={() => setSelectedSector("All")}
                className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 transition-colors"
              >
                Clear filter
              </button>
            )}

            <span className="ml-auto text-xs text-muted-foreground whitespace-nowrap">
              Showing <span className="font-bold text-primary">{filteredCompanies.length}</span> of {companies.length} startups
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((c) => (
              <CompanyCard key={c.name} company={c} />
            ))}
          </div>
        </div>
      </section>

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
