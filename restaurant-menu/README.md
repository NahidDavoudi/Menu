# 🍽️ رستوران مدرن - منوی دیجیتال

یک وبسایت منوی رستوران واکنش‌گرا با طراحی نئومورفیسم، ساخته شده با React، Next.js و Tailwind CSS.

## ✨ ویژگی‌ها

### 🎨 طراحی و رابط کاربری
- **طراحی نئومورفیسم** با افکت‌های برآمدگی و تو رفتگی
- **Glassmorphism** در هدر با افکت‌های بلر
- **رنگ‌بندی مدرن** با تم مشکی کروماتیک و قرمز تیره
- **انیمیشن‌های روان** با Framer Motion
- **طراحی واکنش‌گرا** برای همه دستگاه‌ها

### 🧩 کامپوننت‌ها
- **Navbar** واکنش‌گرا با منوی همبرگری
- **HeroSection** با تصویر پس‌زمینه و افکت‌های glassmorphism
- **CategoriesSection** با کارت‌های نئومورفیک قابل انبساط
- **MenuItemsSection** با نمایش شبکه‌ای و لیستی
- **FilterSearch** برای جستجو و فیلتر آیتم‌ها
- **FeaturedItemsCarousel** برای آیتم‌های ویژه
- **CartSidebar** برای مدیریت سبد خرید
- **Footer** کامل با اطلاعات تماس

### 🛒 قابلیت‌های سبد خرید
- افزودن/حذف آیتم‌ها
- تغییر تعداد آیتم‌ها
- محاسبه قیمت کل
- نمایش تعداد آیتم‌ها در navbar
- پاک کردن کل سبد خرید

### 🔍 جستجو و فیلتر
- جستجو در نام، توضیحات و مواد اولیه
- فیلتر بر اساس دسته‌بندی
- مرتب‌سازی بر اساس نام، قیمت و محبوبیت
- تغییر نمایش بین شبکه و لیست

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18+ 
- npm یا yarn

### مراحل نصب

1. **کلون کردن پروژه**
```bash
git clone <repository-url>
cd restaurant-menu
```

2. **نصب وابستگی‌ها**
```bash
npm install
# یا
yarn install
```

3. **اجرای پروژه در حالت توسعه**
```bash
npm run dev
# یا
yarn dev
```

4. **مشاهده پروژه**
مرورگر خود را به آدرس `http://localhost:3000` باز کنید.

## 📁 ساختار پروژه

```
restaurant-menu/
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── globals.css         # استایل‌های سراسری
│   │   ├── layout.tsx          # Layout اصلی
│   │   └── page.tsx           # صفحه اصلی
│   ├── components/            # کامپوننت‌های React
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── MenuItemsSection.tsx
│   │   ├── ItemCard.tsx
│   │   ├── FeaturedItemsCarousel.tsx
│   │   ├── CartSidebar.tsx
│   │   └── Footer.tsx
│   ├── hooks/                 # Custom Hooks
│   │   └── useCart.ts
│   ├── lib/                   # کتابخانه‌های کمکی
│   │   └── utils.ts
│   ├── types/                 # تعاریف TypeScript
│   │   └── index.ts
│   └── data/                  # داده‌های استاتیک
│       └── menuData.ts
├── public/                    # فایل‌های عمومی
├── tailwind.config.js         # تنظیمات Tailwind CSS
├── tsconfig.json             # تنظیمات TypeScript
└── next.config.js            # تنظیمات Next.js
```

## 🛠️ تکنولوژی‌های استفاده شده

- **[Next.js 15](https://nextjs.org/)** - React Framework
- **[React 19](https://reactjs.org/)** - کتابخانه UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS Framework
- **[Framer Motion](https://www.framer.com/motion/)** - انیمیشن
- **[Lucide React](https://lucide.dev/)** - آیکون‌ها

## 🎨 طراحی و استایل

### رنگ‌بندی
- **پس‌زمینه اصلی**: `#1a1a1a` (مشکی کروماتیک)
- **رنگ اکسنت**: `#DC143C` (قرمز تیره)
- **رنگ ثانویه**: `#8B0000` (قرمز تیره‌تر)
- **خاکستری‌ها**: از `#2a2a2a` تا `#404040`

### افکت‌های نئومورفیسم
- **برآمدگی**: `shadow-neumorphic-raised`
- **تو رفتگی**: `shadow-neumorphic-inset`
- **حالت hover**: `shadow-neumorphic-hover`

## 📱 واکنش‌گرایی

پروژه برای همه اندازه‌های صفحه بهینه‌سازی شده:
- **موبایل**: < 768px
- **تبلت**: 768px - 1024px  
- **دسکتاپ**: > 1024px

## 🔧 سفارشی‌سازی

### افزودن آیتم جدید به منو
فایل `src/data/menuData.ts` را ویرایش کنید:

```typescript
{
  id: 'new-item',
  name: 'نام آیتم جدید',
  description: 'توضیحات آیتم',
  price: 150000,
  category: 'pizza',
  isPopular: true,
  image: 'https://example.com/image.jpg'
}
```

### تغییر اطلاعات رستوران
فایل `src/data/menuData.ts` بخش `restaurantInfo` را ویرایش کنید.

### افزودن دسته‌بندی جدید
در فایل `src/data/menuData.ts` به آرایه `categories` اضافه کنید.

## 🚀 استقرار (Deployment)

### Vercel (توصیه شده)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# آپلود فولدر .next به Netlify
```

### سایر سرویس‌ها
```bash
npm run build
npm start
```

## 🤝 مشارکت

1. پروژه را Fork کنید
2. شاخه جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات را commit کنید (`git commit -m 'Add amazing feature'`)
4. به شاخه push کنید (`git push origin feature/amazing-feature`)
5. Pull Request ایجاد کنید

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## 📞 تماس

برای سوالات و پیشنهادات:
- ایمیل: info@modernrestaurant.ir
- تلفن: ۰۲۱-۸۸۷۷۶۶۵۵

---

**ساخته شده با ❤️ برای بهترین تجربه غذایی**