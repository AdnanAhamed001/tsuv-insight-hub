const fs = require('fs');
const path = require('path');

const portfolioPath = path.join(process.cwd(), 'public', 'images', 'portfolio');
const startupPath = path.join(process.cwd(), 'public', 'images', 'startups');

let portfolioImages = [];
try { portfolioImages = fs.readdirSync(portfolioPath).filter(f => f !== '.gitkeep'); } catch (e) {}

let startupImages = [];
try { startupImages = fs.readdirSync(startupPath).filter(f => f !== '.gitkeep'); } catch (e) {}

const allImages = [
  ...portfolioImages.map(f => ({ name: f, prefix: 'portfolio/' })),
  ...startupImages.map(f => ({ name: f, prefix: 'startups/' }))
];

const companies = [
  { name: 'E-Waste Social', pattern: 'ewaste' },
  { name: 'DoseTap', pattern: 'dosetap' },
  { name: 'NewBoo', pattern: 'newboo' },
  { name: 'Digital Jockey', pattern: 'digital-jockey' },
  { name: 'PinkyMind', pattern: 'pinky' },
  { name: 'Kamikala', pattern: 'kamikala' },
  { name: 'Unique Creations Software', pattern: 'unique' },
  { name: 'SMB Kart', pattern: 'smb' },
  { name: 'Pioneers In Vet Diagnostics', pattern: 'pioneer' },
  { name: 'BidWheelz', pattern: 'bidwheelz' },
  { name: 'PrintSEC', pattern: 'printsec' },
  { name: 'SABBPE', pattern: 'sabbpe' },
  { name: 'Electica', pattern: 'electica' },
  { name: 'Marhaba Haji', pattern: 'marhaba' },
  { name: 'FlyLab Solutions', pattern: 'flylab' },
  { name: 'Servii', pattern: 'servii' },
  { name: 'EngineersConnect', pattern: 'engineersconnect' },
  { name: 'EasyFruitz', pattern: 'easyfruitz' },
  { name: 'MyEkigai', pattern: 'myekigai' },
  { name: 'Cafoco', pattern: 'cafoco' },
  { name: 'ChocoChi', pattern: 'chocochi' },
  { name: 'UpRisers Preschool', pattern: 'upriser' },
  { name: 'Fitrofy', pattern: 'fitrofy' },
  { name: 'Inaayat', pattern: 'inaayat' },
  { name: 'Fuloni', pattern: 'fuloni' },
  { name: 'JustBeMama', pattern: 'justbemama' },
  { name: 'Staunch', pattern: 'staunch' },
  { name: 'EdYoda', pattern: 'edyoda' },
  { name: 'R-Buy', pattern: 'rbuy' },
  { name: 'Asparsh', pattern: 'asparsh' },
  { name: 'EVBooth', pattern: 'evbooth' },
  { name: 'Carver Farms', pattern: 'carver' },
  { name: 'MedWorld Solutions', pattern: 'medworld' },
  { name: 'Food Fox', pattern: 'foodfox' },
  { name: 'RapidEzy', pattern: 'rapidezy' },
  { name: 'My Pahadi Dukan', pattern: 'pahadi' },
  { name: 'ERIP', pattern: 'erip' },
  { name: 'BeFriends', pattern: 'befriend' },
  { name: 'ExtraMile Play', pattern: 'extramile' },
  { name: 'Boingg', pattern: 'boingg' },
  { name: 'DaanVeda', pattern: 'daanveda' },
  { name: 'Togo\\'s Momos', pattern: 'togo' },
  { name: 'PawSpace', pattern: 'pawspace' },
  { name: 'Gastronomix', pattern: 'gastronomix' },
  { name: 'Flow Sports Life', pattern: 'flow' },
  { name: 'Answer Genomics', pattern: 'answer' },
  { name: 'FixiT', pattern: 'fixit' },
  { name: 'FitKin', pattern: 'fitkin' },
  { name: 'Alchemyst AI', pattern: 'alchemyst' },
  { name: 'Naario', pattern: 'naario' },
  { name: 'Evora Greens', pattern: 'evora' },
  { name: 'OpenSignals | GroCliq', pattern: 'grocliq' },
  { name: 'Bioreform', pattern: 'bioreform' },
  { name: 'Crink', pattern: 'crink' },
  { name: 'FreshLeaf', pattern: 'freshleaf' },
  { name: 'MerryHealth', pattern: 'merryhealth' },
  { name: 'Iom Bioworks', pattern: 'iom' },
  { name: 'DriverShaab', pattern: 'drivershaab' },
  { name: 'DealBuddy', pattern: 'dealbuddy' },
  { name: 'Globio', pattern: 'globio' },
  { name: 'BlueGreen', pattern: 'bluegreen' },
  { name: 'Nugenomics', pattern: 'nugenomics' }
];

const mappings = {};

for (const company of companies) {
  const normPattern = company.pattern.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  const matchImg = img => {
      const normImgName = img.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      return normImgName.includes(normPattern);
  };
  
  const foundLogoMatches = allImages.filter(img => matchImg(img) && img.name.toLowerCase().includes('logo'));
  const foundFounderMatches = allImages.filter(img => matchImg(img) && img.name.toLowerCase().includes('founder'));
  const foundAny = allImages.find(img => matchImg(img) && !img.name.toLowerCase().includes('founder') && !img.name.toLowerCase().includes('logo'));

  let logoStr = '';
  let founderStr = '';

  if (foundLogoMatches.length > 0) {
    logoStr = foundLogoMatches[0].prefix + foundLogoMatches[0].name;
  } else if (foundAny) {
    logoStr = foundAny.prefix + foundAny.name;
  }
  
  if (foundFounderMatches.length > 0) {
    founderStr = foundFounderMatches[0].prefix + foundFounderMatches[0].name;
  }

  if (logoStr || founderStr) {
     mappings[company.name] = { logo: logoStr, founder: founderStr };
  }
}

// Read Portfolio.tsx and update
const filePath = 'src/pages/Portfolio.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Parse out companies 
let newContent = content;

Object.keys(mappings).forEach(name => {
    const mapped = mappings[name];
    
    // Regex matches the name, and any attributes up to the closing brace.
    // It captures:
    // 1: name value
    // 2: content inside object (like desc: "...", logo: "...")
    const regex = new RegExp(\`\\\\{\\\\s*name:\\\\s*([\\'\\"])\` + name.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\\\$1") + \`\\\\1\\\\s*,\\\\s*desc:\\\\s*([\\'\\"])(.*?)\\\\2([^\\\\}]*)\\\\}\`, 'g');
    
    newContent = newContent.replace(regex, (match, q1, q2, desc, rest) => {
        let cleanRest = rest;
        // Strip out existing logo/founderImage lines
        cleanRest = cleanRest.replace(/,\\s*logo:\\s*[\\'\\"][^\\'\\"]*[\\'\\"]/g, '');
        cleanRest = cleanRest.replace(/,\\s*founderImage:\\s*[\\'\\"][^\\'\\"]*[\\'\\"]/g, '');
        
        let newAttrs = \`{ name: "\${name}", desc: "\${desc}"\`;
        if (mapped.logo) newAttrs += \`, logo: "\${mapped.logo}"\`;
        if (mapped.founder) newAttrs += \`, founderImage: "\${mapped.founder}"\`;
        newAttrs += \` }\`;
        
        return newAttrs;
    });
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully mapped ' + Object.keys(mappings).length + ' companies. Updated Portfolio.tsx.');
