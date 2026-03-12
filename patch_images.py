import json
import re
import os

portfolio_dir = 'public/images/portfolio'
startup_dir = 'public/images/startups'

portfolio_images = [f for f in os.listdir(portfolio_dir) if f != '.gitkeep'] if os.path.exists(portfolio_dir) else []
startup_images = [f for f in os.listdir(startup_dir) if f != '.gitkeep'] if os.path.exists(startup_dir) else []

all_images = [{'name': f, 'prefix': 'portfolio/'} for f in portfolio_images] + [{'name': f, 'prefix': 'startups/'} for f in startup_images]

companies = [
  { 'name': 'E-Waste Social', 'pattern': 'ewaste' },
  { 'name': 'DoseTap', 'pattern': 'dosetap' },
  { 'name': 'NewBoo', 'pattern': 'newboo' },
  { 'name': 'Digital Jockey', 'pattern': 'digital-jockey' },
  { 'name': 'PinkyMind', 'pattern': 'pinky' },
  { 'name': 'Kamikala', 'pattern': 'kamikala' },
  { 'name': 'Unique Creations Software', 'pattern': 'unique' },
  { 'name': 'SMB Kart', 'pattern': 'smb' },
  { 'name': 'Pioneers In Vet Diagnostics', 'pattern': 'pioneer' },
  { 'name': 'BidWheelz', 'pattern': 'bidwheelz' },
  { 'name': 'PrintSEC', 'pattern': 'printsec' },
  { 'name': 'SABBPE', 'pattern': 'sabbpe' },
  { 'name': 'Electica', 'pattern': 'electica' },
  { 'name': 'Marhaba Haji', 'pattern': 'marhaba' },
  { 'name': 'FlyLab Solutions', 'pattern': 'flylab' },
  { 'name': 'Servii', 'pattern': 'servii' },
  { 'name': 'EngineersConnect', 'pattern': 'engineersconnect' },
  { 'name': 'EasyFruitz', 'pattern': 'easyfruitz' },
  { 'name': 'MyEkigai', 'pattern': 'myekigai' },
  { 'name': 'Cafoco', 'pattern': 'cafoco' },
  { 'name': 'ChocoChi', 'pattern': 'chocochi' },
  { 'name': 'UpRisers Preschool', 'pattern': 'upriser' },
  { 'name': 'Fitrofy', 'pattern': 'fitrofy' },
  { 'name': 'Inaayat', 'pattern': 'inaayat' },
  { 'name': 'Fuloni', 'pattern': 'fuloni' },
  { 'name': 'JustBeMama', 'pattern': 'justbemama' },
  { 'name': 'Staunch', 'pattern': 'staunch' },
  { 'name': 'EdYoda', 'pattern': 'edyoda' },
  { 'name': 'R-Buy', 'pattern': 'rbuy' },
  { 'name': 'Asparsh', 'pattern': 'asparsh' },
  { 'name': 'EVBooth', 'pattern': 'evbooth' },
  { 'name': 'Carver Farms', 'pattern': 'carver' },
  { 'name': 'MedWorld Solutions', 'pattern': 'medworld' },
  { 'name': 'Food Fox', 'pattern': 'foodfox' },
  { 'name': 'RapidEzy', 'pattern': 'rapidezy' },
  { 'name': 'My Pahadi Dukan', 'pattern': 'pahadi' },
  { 'name': 'ERIP', 'pattern': 'erip' },
  { 'name': 'BeFriends', 'pattern': 'befriend' },
  { 'name': 'ExtraMile Play', 'pattern': 'extramile' },
  { 'name': 'Boingg', 'pattern': 'boingg' },
  { 'name': 'DaanVeda', 'pattern': 'daanveda' },
  { 'name': "Togo's Momos", 'pattern': 'togo' },
  { 'name': 'PawSpace', 'pattern': 'pawspace' },
  { 'name': 'Gastronomix', 'pattern': 'gastronomix' },
  { 'name': 'Flow Sports Life', 'pattern': 'flow' },
  { 'name': 'Answer Genomics', 'pattern': 'answer' },
  { 'name': 'FixiT', 'pattern': 'fixit' },
  { 'name': 'FitKin', 'pattern': 'fitkin' },
  { 'name': 'Alchemyst AI', 'pattern': 'alchemyst' },
  { 'name': 'Naario', 'pattern': 'naario' },
  { 'name': 'Evora Greens', 'pattern': 'evora' },
  { 'name': 'OpenSignals | GroCliq', 'pattern': 'grocliq' },
  { 'name': 'Bioreform', 'pattern': 'bioreform' },
  { 'name': 'Crink', 'pattern': 'crink' },
  { 'name': 'FreshLeaf', 'pattern': 'freshleaf' },
  { 'name': 'MerryHealth', 'pattern': 'merryhealth' },
  { 'name': 'Iom Bioworks', 'pattern': 'iom' },
  { 'name': 'DriverShaab', 'pattern': 'drivershaab' },
  { 'name': 'DealBuddy', 'pattern': 'dealbuddy' },
  { 'name': 'Globio', 'pattern': 'globio' },
  { 'name': 'BlueGreen', 'pattern': 'bluegreen' },
  { 'name': 'Nugenomics', 'pattern': 'nugenomics' }
]

mappings = {}
for company in companies:
    norm_pattern = re.sub(r'[^a-z0-9]', '', company['pattern'].lower())
    
    def match_img(img):
        norm_img_name = re.sub(r'[^a-z0-9]', '', img['name'].lower())
        return norm_pattern in norm_img_name

    found_logo_matches = [img for img in all_images if match_img(img) and 'logo' in img['name'].lower()]
    found_founder_matches = [img for img in all_images if match_img(img) and 'founder' in img['name'].lower()]
    found_any = next((img for img in all_images if match_img(img) and 'founder' not in img['name'].lower() and 'logo' not in img['name'].lower()), None)
    
    logo_str = ''
    founder_str = ''

    if found_logo_matches:
        logo_str = found_logo_matches[0]['prefix'] + found_logo_matches[0]['name']
    elif found_any:
        logo_str = found_any['prefix'] + found_any['name']
        
    if found_founder_matches:
        founder_str = found_founder_matches[0]['prefix'] + found_founder_matches[0]['name']
        
    if logo_str or founder_str:
        mappings[company['name']] = {'logo': logo_str, 'founder': founder_str}

with open('src/pages/Portfolio.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_company(match):
    name = match.group(1)
    desc = match.group(2)
    mapped = mappings.get(name, {})
    
    parts = [f'name: "{name}"', f'desc: "{desc}"']
    if 'logo' in mapped and mapped['logo']:
        parts.append(f'logo: "{mapped["logo"]}"')
    if 'founder' in mapped and mapped['founder']:
        parts.append(f'founderImage: "{mapped["founder"]}"')
        
    # We maintain indentation for the object elements
    return '  { ' + ', '.join(parts) + ' },'

# find the companies array block
companies_match = re.search(r'(const companies: Company\[\] = \[)(.*?)(\];)', content, flags=re.DOTALL)
if companies_match:
    list_str = companies_match.group(2)
    
    # regex matches objects with optional logo and founderImage properties
    new_list_str = re.sub(
        r'\{\s*name:\s*"([^"]+)",\s*desc:\s*"([^"]+)"(?:,\s*logo:\s*"[^"]*")?(?:,\s*founderImage:\s*"[^"]*")?\s*\},',
        replace_company,
        list_str
    )
    
    content = content.replace(list_str, new_list_str)

with open('src/pages/Portfolio.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Successfully mapped {len(mappings)} companies. Updated Portfolio.tsx.")
