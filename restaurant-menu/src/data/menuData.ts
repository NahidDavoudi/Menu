import { Category, Restaurant } from '@/types';

export const restaurantInfo: Restaurant = {
  name: '🍽️ رستوران مدرن',
  logo: '🍽️',
  description: 'بهترین غذاهای ایتالیایی و بین‌المللی با کیفیت درجه یک',
  address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
  phone: '۰۲۱-۸۸۷۷۶۶۵۵',
  email: 'info@modernrestaurant.ir',
  socialMedia: {
    instagram: '@modern_restaurant',
    telegram: '@modern_restaurant',
    whatsapp: '+989123456789'
  }
};

export const categories: Category[] = [
  {
    id: 'pizza',
    name: 'پیتزا',
    description: 'انواع پیتزاهای ایتالیایی با پنیر تازه و مواد اولیه درجه یک',
    icon: '🍕',
    badge: 'محبوب',
    items: [
      {
        id: 'pizza-1',
        name: 'پیتزا مارگاریتا',
        description: 'پنیر موزارلا، گوجه فرنگی، ریحان تازه',
        price: 250000,
        category: 'pizza',
        isPopular: true,
        ingredients: ['پنیر موزارلا', 'گوجه فرنگی', 'ریحان تازه', 'خمیر پیتزا'],
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400'
      },
      {
        id: 'pizza-2',
        name: 'پیتزا پپرونی',
        description: 'پپرونی، پنیر موزارلا، سس گوجه',
        price: 320000,
        category: 'pizza',
        ingredients: ['پپرونی', 'پنیر موزارلا', 'سس گوجه', 'خمیر پیتزا'],
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
      },
      {
        id: 'pizza-3',
        name: 'پیتزا چهار فصل',
        description: 'قارچ، زیتون، فلفل دلمه، آناناس',
        price: 380000,
        category: 'pizza',
        ingredients: ['قارچ', 'زیتون', 'فلفل دلمه', 'آناناس', 'پنیر موزارلا'],
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400'
      }
    ]
  },
  {
    id: 'burger',
    name: 'برگر',
    description: 'برگرهای رستورانی با گوشت تازه و سس‌های خانگی',
    icon: '🍔',
    badge: 'جدید',
    items: [
      {
        id: 'burger-1',
        name: 'برگر کلاسیک',
        description: 'گوشت گاو، کاهو، گوجه، پیاز، سس مخصوص',
        price: 280000,
        category: 'burger',
        isNew: true,
        ingredients: ['گوشت گاو', 'کاهو', 'گوجه', 'پیاز', 'سس مخصوص', 'نان برگر'],
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'
      },
      {
        id: 'burger-2',
        name: 'چیز برگر',
        description: 'گوشت گاو، پنیر چدار، کاهو، گوجه',
        price: 320000,
        category: 'burger',
        ingredients: ['گوشت گاو', 'پنیر چدار', 'کاهو', 'گوجه', 'نان برگر'],
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400'
      }
    ]
  },
  {
    id: 'pasta',
    name: 'پاستا',
    description: 'پاستاهای ایتالیایی با سس‌های متنوع و طعم‌های بی‌نظیر',
    icon: '🍝',
    items: [
      {
        id: 'pasta-1',
        name: 'اسپاگتی کربونارا',
        description: 'اسپاگتی، بیکن، پنیر پارمزان، تخم مرغ',
        price: 350000,
        category: 'pasta',
        ingredients: ['اسپاگتی', 'بیکن', 'پنیر پارمزان', 'تخم مرغ', 'خامه'],
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400'
      }
    ]
  },
  {
    id: 'cold-drinks',
    name: 'بار سرد',
    description: 'نوشیدنی‌های خنک و دلچسب برای روزهای گرم',
    icon: '🥤',
    badge: 'ویژه',
    items: [
      {
        id: 'cold-1',
        name: 'لیموناد تازه',
        description: 'آب لیمو تازه، نعنا، یخ',
        price: 80000,
        category: 'cold-drinks',
        ingredients: ['لیمو تازه', 'نعنا', 'یخ', 'آب'],
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400'
      },
      {
        id: 'cold-2',
        name: 'موهیتو',
        description: 'نعنا، لیمو، آب گازدار، یخ',
        price: 120000,
        category: 'cold-drinks',
        ingredients: ['نعنا', 'لیمو', 'آب گازدار', 'یخ', 'شکر'],
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400'
      }
    ]
  },
  {
    id: 'hot-drinks',
    name: 'بار گرم',
    description: 'نوشیدنی‌های گرم و معطر برای لحظات آرامش',
    icon: '☕',
    items: [
      {
        id: 'hot-1',
        name: 'قهوه اسپرسو',
        description: 'قهوه تازه آسیاب شده، طعم قوی',
        price: 120000,
        category: 'hot-drinks',
        ingredients: ['دانه قهوه عربیکا', 'آب'],
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400'
      },
      {
        id: 'hot-2',
        name: 'کاپوچینو',
        description: 'اسپرسو، شیر بخارپز، فوم شیر',
        price: 150000,
        category: 'hot-drinks',
        ingredients: ['اسپرسو', 'شیر', 'فوم شیر'],
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'دسرها',
    description: 'دسرهای خوشمزه و شیرین برای پایان وعده غذایی',
    icon: '🍰',
    badge: 'توصیه شف',
    items: [
      {
        id: 'dessert-1',
        name: 'تیرامیسو',
        description: 'کیک اسفنجی، قهوه، پنیر ماسکارپونه',
        price: 180000,
        category: 'desserts',
        isChefRecommended: true,
        ingredients: ['کیک اسفنجی', 'قهوه', 'پنیر ماسکارپونه', 'کاکائو'],
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
      },
      {
        id: 'dessert-2',
        name: 'چیزکیک توت فرنگی',
        description: 'پنیر کرم، بیسکویت، سس توت فرنگی',
        price: 200000,
        category: 'desserts',
        ingredients: ['پنیر کرم', 'بیسکویت', 'توت فرنگی', 'ژلاتین'],
        image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400'
      }
    ]
  }
];