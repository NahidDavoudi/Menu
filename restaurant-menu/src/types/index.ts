export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  isPopular?: boolean;
  isNew?: boolean;
  isChefRecommended?: boolean;
  ingredients?: string[];
  allergens?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  badge?: 'محبوب' | 'جدید' | 'ویژه' | 'توصیه شف';
  items: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Restaurant {
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialMedia: {
    instagram?: string;
    telegram?: string;
    whatsapp?: string;
  };
}