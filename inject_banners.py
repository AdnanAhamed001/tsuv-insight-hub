import os
import re

# Map pages to Unsplash URLs
# Format: { 'Filename.tsx': 'unsplash_id' }
URL_MAP = {
    'Portfolio.tsx': '1556761175-5973dc0f32d7',
    'InvestorHub.tsx': '1460925895917-afdab827c52f',
    'AboutUs.tsx': '1522071820081-009f0129c71c',
    'Resources.tsx': '1456324504439-367cee3b3c32',
    'ContactUs.tsx': '1516387938699-a93567ec168e',
    'Program.tsx': '1519389950473-47ba0277781c',
    'Apply.tsx': '1454165804606-c3d57bc86b40',
    'Blog.tsx': '1499750310107-5fef28a66643',
    'People.tsx': '1521737604893-d14cc237f11d',
    
    # Resource subpages
    'AssessmentsPage.tsx': '1434030216411-0b793f4b4273',
    'PodcastsPage.tsx': '1589903308904-1010c2294adc',
    'VideosPage.tsx': '1536240478700-b869022513f1',
    'ReportsPage.tsx': '1557804506-669a67965ba0',
    'ToolsPage.tsx': '1454165804606-c3d57bc86b40',
    'PRActivityPage.tsx': '1504711434969-e33886168f5c',
    
    # Reports subpages
    'CaseStudiesPage.tsx': '1557804506-669a67965ba0',
    'SectorAnalysisPage.tsx': '1460925895917-afdab827c52f',
    'FounderPlaybooksPage.tsx': '1456324504439-367cee3b3c32',
    'MarketReportsPage.tsx': '1551288049-bebda4e38f71',
    
    # Legal
    'PrivacyPolicy.tsx': '1450101499163-c8848c66cb85',
    'Disclaimer.tsx': '1589829085449-307ba711d953',
    'FAQ.tsx': '1516387938699-a93567ec168e'
}

def process_file(filepath):
    filename = os.path.basename(filepath)
    if filename not in URL_MAP:
        return False
        
    unsplash_id = URL_MAP[filename]
    image_url = f"https://images.unsplash.com/photo-{unsplash_id}?auto=format&fit=crop&q=80"
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The goal is to add bg-[url(...)] bg-cover bg-center bg-blend-multiply bg-primary/90 to the section
    # Find: className="hero-gradient section-padding py-16"
    # Replace: className="hero-gradient section-padding py-16 bg-[url('...')] bg-cover bg-center bg-blend-multiply bg-primary/90"
    
    # We use a regex that matches <section className="hero-gradient ...">
    def replacement(match):
        prefix = match.group(1)
        classes = match.group(2)
        
        # Don't add if already added by a previous run
        if 'bg-[url' in classes or 'bg-blend' in classes:
            return match.group(0)
            
        new_classes = f"{classes} bg-[url('{image_url}')] bg-cover bg-center bg-blend-multiply bg-primary/90"
        return f'{prefix}="{new_classes}"'

    new_content = re.sub(r'(<section\s+[^>]*?className)\s*=\s*"([^"]*hero-gradient[^"]*)"', replacement, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename} with banner {unsplash_id}")
        return True
    return False

root_pages = 'src/pages'
count = 0

for root, _, files in os.walk(root_pages):
    for filename in files:
        if filename.endswith('.tsx'):
            filepath = os.path.join(root, filename)
            if process_file(filepath):
                count += 1

print(f"Successfully processed {count} files.")
