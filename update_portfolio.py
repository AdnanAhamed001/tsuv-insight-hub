import json
import re

with open('.mappings.json', 'r', encoding='utf-16') as f:
    mappings = json.load(f)

with open('src/pages/Portfolio.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update interface
content = re.sub(
    r'interface Company \{.*?\}',
    'interface Company {\n  name: string;\n  desc: string;\n  logo?: string;\n  founderImage?: string;\n}',
    content,
    flags=re.DOTALL
)

# 2. Update company objects
def replace_company(match):
    name = match.group(1)
    desc = match.group(2)
    mapped = mappings.get(name, {})
    
    parts = [f'name: "{name}"', f'desc: "{desc}"']
    if 'logo' in mapped and mapped['logo']:
        parts.append(f'logo: "{mapped["logo"]}"')
    if 'founder' in mapped and mapped['founder']:
        parts.append(f'founderImage: "{mapped["founder"]}"')
        
    return '  { ' + ', '.join(parts) + ' },'

# find the companies array block
companies_match = re.search(r'(const companies: Company\[\] = \[)(.*?)(\];)', content, flags=re.DOTALL)
if companies_match:
    list_str = companies_match.group(2)
    
    # replace each item in the list
    new_list_str = re.sub(
        r'\{\s*name:\s*"([^"]+)",\s*desc:\s*"([^"]+)"(?:,\s*logo:\s*"[^"]*")?\s*\},',
        replace_company,
        list_str
    )
    
    content = content.replace(list_str, new_list_str)

# 3. Update CompanyCard
new_card = """const CompanyCard = ({ company }: { company: Company }) => {
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
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        
        {/* Floating Logo overlay */}
        <div className="absolute -bottom-6 right-6 w-16 h-16 bg-white rounded-lg shadow-md border border-border flex items-center justify-center overflow-hidden p-2 z-10 group-hover:-translate-y-1 transition-transform">
           {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${company.name} logo`}
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
};"""

content = re.sub(
    r'const CompanyCard = \(\{ company \}: \{ company: Company \}\) => \{.*?\n\};\n',
    new_card + '\n',
    content,
    flags=re.DOTALL
)

with open('src/pages/Portfolio.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Portfolio.tsx")
