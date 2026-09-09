# 🚀 Развёртывание fenix-sanyamed на Cloudflare Pages

**Дата**: 2026-09-09
**Домен**: fenix-sanyamed.com
**Next.js**: 16.3.4 (webpack mode)

---

## ✅ Уже сделано

- `next.config.ts` — без `output: 'export'` (Cloudflare использует @cloudflare/next-on-pages)
- 35 статических страниц пререндерены
- 17 SEO-оптимизированных изображений
- `.gitignore` исключает `/node_modules`, `/.next/`, `/.next.bak/`, `/out/`, `.env*`

---

## 📋 Пошаговый план

### Шаг 1: Git init + commit + push

```bash
cd D:\poju\taijiweb\fenix-sanyamed

# Удалить backup (он не нужен для production)
rm -rf .next.bak

# Если ещё не инициализирован
git init
git add .
git commit -m "feat: production-ready fenix-sanyamed.com"

# Создать репозиторий на https://github.com/new (private/public — на выбор)
# Затем:
git remote add origin https://github.com/<ВАШ-USERNAME>/fenix-sanyamed.git
git branch -M main
git push -u origin main
```

### Шаг 2: Cloudflare Pages (через Dashboard)

1. Открыть https://dash.cloudflare.com → **Workers & Pages** → **Pages** → **Create application**
2. **Connect to Git** → выбрать репозиторий `fenix-sanyamed`
3. **Build settings**:
   - Framework preset: **Next.js**
   - Build command: `npx next build --webpack`
   - Build output directory: `.next`
   - Root directory: `/`
4. **Environment variables** → Add:
   - `NODE_VERSION` = `22`
5. **Save and Deploy**

Cloudflare автоматически:
- Установит зависимости (`npm ci`)
- Запустит `npx next build --webpack` → создаст `.next/`
- Применит `@cloudflare/next-on-pages` адаптер
- Задеплоит

URL после деплоя: `https://fenix-sanyamed.pages.dev`

### Шаг 3: Кастомный домен

1. Cloudflare Pages → fenix-sanyamed → **Custom domains**
2. **Add** → `fenix-sanyamed.com` (apex) и `www.fenix-sanyamed.com`
3. Cloudflare автоматически:
   - Создаст CNAME → `fenix-sanyamed.pages.dev`
   - Включит HTTPS (Let's Encrypt)
   - www → redirect на apex

### Шаг 4 (опционально): DNS у регистратора

Если домен зарегистрирован НЕ в Cloudflare:
- У регистратора (GoDaddy / Namecheap) → NS записи → добавить nameservers Cloudflare (назначатся автоматически в Dashboard)

---

## ✅ Чек-лист после деплоя

- [ ] `https://fenix-sanyamed.com` → 200 OK
- [ ] `https://fenix-sanyamed.com/sitemap.xml` → 200 OK
- [ ] `https://fenix-sanyamed.com/robots.txt` → 200 OK
- [ ] Изображения загружаются
- [ ] Мобильная версия → hamburger menu работает
- [ ] Lighthouse Score > 90 (PageSpeed Insights)
- [ ] Yandex Webmaster подтверждён
- [ ] Yandex Metrika код встроен в layout.tsx
- [ ] Yandex Maps зарегистрированы 4 бухт

---

## 🛠️ Если Cloudflare build падает

**Частые проблемы**:

| Ошибка | Решение |
|---|---|
| `Lockfile invalid` | Удалить `package-lock.json` → `npm install` → commit |
| `next-on-pages not found` | Добавить devDep: `npm i -D @cloudflare/next-on-pages` → commit |
| Sharp / images | Уже отключено (`images.unoptimized: true`) |
| Node version | Уже указано (`NODE_VERSION=22`) |

**Logs смотреть**: Cloudflare Dashboard → Pages → fenix-sanyamed → Deployments → failed → Logs

---

## 📊 Что НЕ нужно делать

- ❌ `output: 'export'` — Cloudflare сам обрабатывает через адаптер
- ❌ `next start` после деплоя — Cloudflare обслуживает через Workers/Pages
- ❌ Загружать `.next/` в Git — собирается Cloudflare'ом
- ❌ Вручную копировать файлы — не нужно

---

## 📞 Контакты в коде

⚠️ **Перед деплоем заменить TBD в `src/app/layout.tsx`**:
- `CLINIC_PHONE` = реальный +86 номер
- `CLINIC_EMAIL` = реальный email
- `CLINIC_STREET` = уточнить какой филиал главный
- `YANDEX_METRIKA_ID` = 8 цифр из metrika.yandex.com