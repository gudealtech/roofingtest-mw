export const languages = {
  en: "English",
  zh: "简体中文",
  fa: "فارسی",
  ru: "Русский",
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    services: "Services",
    contact: "Contact",

    // Homepage
    heroTitle: "Reliable Roofing Materials for Canadian Professionals",
    heroSubtitle: "Wholesale supply for contractors and distributors across Canada",
    exploreProducts: "Explore Products",
    contactUs: "Contact Us",
    featuredProducts: "Featured Products",
    whyChooseUs: "Why Choose Us",

    // Products
    allProducts: "All Products",
    underlayment: "Underlayment",
    iceWaterShields: "Ice & Water Shields",
    vents: "Vents",
    gloves: "Gloves",
    viewDetails: "View Details",

    // Services
    ourServices: "Our Services",
    bulkOrdering: "Bulk Ordering",
    contractorDiscounts: "Contractor Discounts",
    professionalSupport: "Professional Support",

    // Contact
    getInTouch: "Get in Touch",
    phone: "Phone",
    email: "Email",
    address: "Address",

    // Footer
    copyright: "© 2024 Gudeal Canada Inc. All rights reserved.",
  },
  zh: {
    // Navigation
    home: "首页",
    products: "产品",
    services: "服务",
    contact: "联系我们",

    // Homepage
    heroTitle: "为加拿大专业人士提供可靠的屋顶材料",
    heroSubtitle: "为加拿大各地的承包商和经销商提供批发供应",
    exploreProducts: "浏览产品",
    contactUs: "联系我们",
    featuredProducts: "精选产品",
    whyChooseUs: "为什么选择我们",

    // Products
    allProducts: "所有产品",
    underlayment: "防水垫层",
    iceWaterShields: "冰雪防护层",
    vents: "通风设备",
    gloves: "手套",
    viewDetails: "查看详情",

    // Services
    ourServices: "我们的服务",
    bulkOrdering: "批量订购",
    contractorDiscounts: "承包商折扣",
    professionalSupport: "专业支持",

    // Contact
    getInTouch: "联系我们",
    phone: "电话",
    email: "邮箱",
    address: "地址",

    // Footer
    copyright: "© 2024 加拿大古迪尔公司。保留所有权利。",
  },
  fa: {
    // Navigation
    home: "خانه",
    products: "محصولات",
    services: "خدمات",
    contact: "تماس با ما",

    // Homepage
    heroTitle: "مواد پوشش بام قابل اعتماد برای متخصصان کانادایی",
    heroSubtitle: "تامین عمده فروشی برای پیمانکاران و توزیع کنندگان در سراسر کانادا",
    exploreProducts: "مشاهده محصولات",
    contactUs: "تماس با ما",
    featuredProducts: "محصولات ویژه",
    whyChooseUs: "چرا ما را انتخاب کنید",

    // Products
    allProducts: "همه محصولات",
    underlayment: "زیرپوش",
    iceWaterShields: "محافظ یخ و آب",
    vents: "دریچه های تهویه",
    gloves: "دستکش",
    viewDetails: "مشاهده جزئیات",

    // Services
    ourServices: "خدمات ما",
    bulkOrdering: "سفارش عمده",
    contractorDiscounts: "تخفیف پیمانکاران",
    professionalSupport: "پشتیبانی حرفه ای",

    // Contact
    getInTouch: "در تماس باشید",
    phone: "تلفن",
    email: "ایمیل",
    address: "آدرس",

    // Footer
    copyright: "© ۲۰۲۴ گودیل کانادا اینک. تمام حقوق محفوظ است.",
  },
  ru: {
    // Navigation
    home: "Главная",
    products: "Продукция",
    services: "Услуги",
    contact: "Контакты",

    // Homepage
    heroTitle: "Надежные кровельные материалы для канадских профессионалов",
    heroSubtitle: "Оптовые поставки для подрядчиков и дистрибьюторов по всей Канаде",
    exploreProducts: "Посмотреть продукцию",
    contactUs: "Связаться с нами",
    featuredProducts: "Рекомендуемые продукты",
    whyChooseUs: "Почему выбирают нас",

    // Products
    allProducts: "Вся продукция",
    underlayment: "Подкладочный материал",
    iceWaterShields: "Гидроизоляция",
    vents: "Вентиляция",
    gloves: "Перчатки",
    viewDetails: "Подробнее",

    // Services
    ourServices: "Наши услуги",
    bulkOrdering: "Оптовые заказы",
    contractorDiscounts: "Скидки подрядчикам",
    professionalSupport: "Профессиональная поддержка",

    // Contact
    getInTouch: "Свяжитесь с нами",
    phone: "Телефон",
    email: "Электронная почта",
    address: "Адрес",

    // Footer
    copyright: "© 2024 Гудил Канада Инк. Все права защищены.",
  },
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
