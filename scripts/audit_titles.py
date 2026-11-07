#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""扫描全部页面的 title / H1 / description — 关键词布局审查。"""
import io
import json
import os
import re

pages = []
for root, dirs, files in os.walk('src/app'):
    for f in files:
        if f == 'page.tsx':
            p = os.path.join(root, f).replace(os.sep, '/')
            url = p.replace('src/app', '').replace('/page.tsx', '') or '/'
            s = io.open(p, encoding='utf-8').read()
            t = re.search(r'title:\s*(?:\{\s*absolute:\s*)?"([^"]+)"', s)
            h1 = re.search(r'<h1[^>]*>\s*\n?\s*([^<\n]+)', s)
            pages.append({
                'url': url,
                'title': (t.group(1) if t else '—'),
                'h1': (h1.group(1).strip() if h1 else '—'),
            })

pages.sort(key=lambda x: x['url'])
out = []
for pg in pages:
    flag = 'EN' if '/en/' in pg['url'] else 'ru'
    out.append(f"[{flag}] {pg['url']}")
    out.append(f"      T: {pg['title'][:78]}")
    out.append(f"      H: {pg['h1'][:72]}")

io.open('scripts/_titles_audit.txt', 'w', encoding='utf-8').write('\n'.join(out))
print(f"共 {len(pages)} 页，已写 scripts/_titles_audit.txt")
print('\n'.join(out[:120]))
