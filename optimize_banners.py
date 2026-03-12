import os

def optimize_banners(directory):
    count = 0
    # Match the old pattern we used previously
    old_pattern = r'auto=format,compress&fit=crop&q=60&w=1200'
    new_pattern = r'auto=format,compress&fit=crop&q=30&w=800'
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if old_pattern in content:
                    new_content = content.replace(old_pattern, new_pattern)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Optimized banners in {filepath}")
                    count += 1
    
    # Also check if there's any q=80 left
    old_pattern_2 = r'auto=format&fit=crop&q=80'
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if old_pattern_2 in content:
                    new_content = content.replace(old_pattern_2, new_pattern)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Optimized banners in {filepath} (from q=80)")
                    count += 1

    print(f"Optimized banners in {count} files.")

if __name__ == '__main__':
    optimize_banners('src')
