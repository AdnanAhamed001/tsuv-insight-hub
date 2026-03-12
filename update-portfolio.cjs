const fs = require('fs');

const mappings = JSON.parse(fs.readFileSync('.mappings.json', 'utf16le').replace(/^\uFEFF/, ''));
const content = fs.readFileSync('src/pages/Portfolio.tsx', 'utf8');

let newContent = content.replace(/export interface Company \{[\s\S]*?\}/, \`interface Company {
  name: string;
  desc: string;
  logo?: string;
  founderImage?: string;
}\`);

const extractCompaniesRegex = /(const companies: Company\\[\\] = \\[\n)([\s\S]*?)(\n\\];)/;
const match = extractCompaniesRegex.exec(newContent);
if (match) {
    const listStr = match[2];
    
    const splits = listStr.split(/(?=\s*\{ name:)/);
    
    const updatedSplits = splits.map(s => {
        if (!s.trim()) return s;
        const nameMatch = s.match(/name:\s*(['\"])(.*?)\1/);
        if (!nameMatch) return s;
        const name = nameMatch[2];
        const descMatch = s.match(/desc:\s*(['\"])(.*?)\1/);
        const desc = descMatch ? descMatch[2] : '';
        
        const mapped = mappings[name] || {};
        
        let res = \`  { name: "\${name}", desc: "\${desc}"\`;
        if (mapped.logo) {
            res += \`, logo: "\${mapped.logo}"\`;
        }
        if (mapped.founder) {
            res += \`, founderImage: "\${mapped.founder}"\`;
        }
        res += \` },\n\`;
        
        return res;
    });
    
    newContent = newContent.replace(listStr, '\n' + updatedSplits.join('').trim());
}

const oldCardRegex = /const CompanyCard = \(\{\s*company\s*\}\s*:\s*\{\s*company:\s*Company\s*\}\) => \{[\s\S]*?^\};\n/m;

const newCard = \`const CompanyCard = ({ company }: { company: Company }) => {
  const logoSrc = company.logo ? \\\`/images/\\${company.logo}\\\` : null;
  const founderSrc = company.founderImage ? \\\`/images/\\${company.founderImage}\\\` : null;

  return (
    <div className="tool-card flex flex-col overflow-hidden bg-card transition-all hover:shadow-md border border-border/50 rounded-xl relative group">
      {/* Top Banner / Founder Image Area */}
      <div className="relative w-full h-48 bg-muted/30 flex items-center justify-center border-b border-border/50">
        {founderSrc ? (
          <img 
            src={founderSrc} 
            alt={\\\`\\${company.name} Founder\\\`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
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
              alt={\\\`\\${company.name} logo\\\`}
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
              }}
            />
          ) : null}
          <span className={\\\`font-display text-xl font-bold text-primary \\${logoSrc ? "hidden" : ""}\\\`}>
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
\`;

const oldContentParts = newContent.split('const CompanyCard =');
if (oldContentParts.length > 1) {
  const afterCard = oldContentParts[1];
  const endOfCard = afterCard.indexOf('};\\r\\n') + 4;
  if(endOfCard > 3) {
      newContent = oldContentParts[0] + newCard + afterCard.substring(endOfCard);
  } else {
     const endOfCard2 = afterCard.indexOf('};\\n') + 3;
     newContent = oldContentParts[0] + newCard + afterCard.substring(endOfCard2);
  }
}

fs.writeFileSync('src/pages/Portfolio.tsx', newContent);
console.log('Successfully updated src/pages/Portfolio.tsx');
