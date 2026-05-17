export interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  currencyCode: string;
  currencySymbol: string;
  // Main bundle (front-end) prices
  price: number;
  originalPrice: number;
  formattedPrice: string;
  formattedOriginalPrice: string;
  // Upsell prices (onetime page)
  upsellPrice: number;
  upsellOriginalPrice: number;
  formattedUpsellPrice: string;
  formattedUpsellOriginalPrice: string;
  formattedUpsellSavings: string;
  // Selar checkout links
  selarCheckoutBase: string;
  selarOnetimeBase: string;
  // Freelance project values
  freelanceTotal: string;
  freelanceResidential: string;
  freelanceCommercial: string;
  freelanceInterior: string;
  // Income tiers
  renderCharge: string;
  projectRange: string;
  // Manifesto section
  expensiveCourses: string;
  ecosystemPrice: string;
  // Banner text
  bannerText: string;
  // Social proof toast cities
  cities: { name: string; city: string }[];
}

export const COUNTRIES: Record<string, CountryConfig> = {
  NG: {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    currencyCode: 'NGN',
    currencySymbol: '₦',
    price: 15000,
    originalPrice: 99000,
    formattedPrice: '₦15,000',
    formattedOriginalPrice: '₦99,000',
    upsellPrice: 37000,
    upsellOriginalPrice: 99000,
    formattedUpsellPrice: '₦37,000',
    formattedUpsellOriginalPrice: '₦99,000',
    formattedUpsellSavings: '₦62,000',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: '₦200,000',
    freelanceResidential: '₦50,000 – ₦80,000',
    freelanceCommercial: '₦60,000 – ₦100,000',
    freelanceInterior: '₦40,000 – ₦70,000',
    renderCharge: '₦50,000+',
    projectRange: '₦300,000–₦800,000',
    expensiveCourses: '₦500,000+',
    ecosystemPrice: '₦15,000',
    bannerText: '🇳🇬 Now Available In Nigeria',
    cities: [
      { name: "Chinedu O.", city: "Lagos" },
      { name: "Adaeze N.", city: "Abuja" },
      { name: "Emeka A.", city: "Port Harcourt" },
      { name: "Funke B.", city: "Ibadan" },
      { name: "Tunde K.", city: "Lagos" },
      { name: "Ngozi I.", city: "Enugu" },
      { name: "Yusuf M.", city: "Kano" },
      { name: "Blessing E.", city: "Benin City" },
      { name: "Obinna C.", city: "Owerri" },
      { name: "Amina D.", city: "Abuja" },
    ],
  },
  GH: {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    currencyCode: 'GHS',
    currencySymbol: 'GH₵',
    price: 150,
    originalPrice: 999,
    formattedPrice: 'GH₵150',
    formattedOriginalPrice: 'GH₵999',
    upsellPrice: 370,
    upsellOriginalPrice: 999,
    formattedUpsellPrice: 'GH₵370',
    formattedUpsellOriginalPrice: 'GH₵999',
    formattedUpsellSavings: 'GH₵629',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: 'GH₵2,000',
    freelanceResidential: 'GH₵500 – GH₵800',
    freelanceCommercial: 'GH₵600 – GH₵1,000',
    freelanceInterior: 'GH₵400 – GH₵700',
    renderCharge: 'GH₵500+',
    projectRange: 'GH₵3,000–GH₵8,000',
    expensiveCourses: 'GH₵5,000+',
    ecosystemPrice: 'GH₵150',
    bannerText: '🇬🇭 Now Available In Ghana',
    cities: [
      { name: "Kwame A.", city: "Accra" },
      { name: "Ama S.", city: "Kumasi" },
      { name: "Kofi M.", city: "Tamale" },
      { name: "Abena D.", city: "Accra" },
      { name: "Yaw B.", city: "Cape Coast" },
      { name: "Akua N.", city: "Tema" },
      { name: "Nana K.", city: "Takoradi" },
      { name: "Efua P.", city: "Accra" },
      { name: "Kwesi O.", city: "Kumasi" },
      { name: "Adjoa R.", city: "Ho" },
    ],
  },
  KE: {
    code: 'KE',
    name: 'Kenya',
    flag: '🇰🇪',
    currencyCode: 'KES',
    currencySymbol: 'KSh',
    price: 1500,
    originalPrice: 9999,
    formattedPrice: 'KSh 1,500',
    formattedOriginalPrice: 'KSh 9,999',
    upsellPrice: 3700,
    upsellOriginalPrice: 9999,
    formattedUpsellPrice: 'KSh 3,700',
    formattedUpsellOriginalPrice: 'KSh 9,999',
    formattedUpsellSavings: 'KSh 6,299',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: 'KSh 20,000',
    freelanceResidential: 'KSh 5,000 – KSh 8,000',
    freelanceCommercial: 'KSh 6,000 – KSh 10,000',
    freelanceInterior: 'KSh 4,000 – KSh 7,000',
    renderCharge: 'KSh 5,000+',
    projectRange: 'KSh 30,000–KSh 80,000',
    expensiveCourses: 'KSh 50,000+',
    ecosystemPrice: 'KSh 1,500',
    bannerText: '🇰🇪 Now Available In Kenya',
    cities: [
      { name: "James W.", city: "Nairobi" },
      { name: "Faith M.", city: "Mombasa" },
      { name: "Brian O.", city: "Kisumu" },
      { name: "Mercy K.", city: "Nairobi" },
      { name: "David N.", city: "Nakuru" },
      { name: "Grace A.", city: "Eldoret" },
      { name: "Kevin M.", city: "Nairobi" },
      { name: "Lucy W.", city: "Thika" },
      { name: "Peter K.", city: "Mombasa" },
      { name: "Ann N.", city: "Nairobi" },
    ],
  },
  TZ: {
    code: 'TZ',
    name: 'Tanzania',
    flag: '🇹🇿',
    currencyCode: 'TZS',
    currencySymbol: 'TSh',
    price: 30000,
    originalPrice: 199000,
    formattedPrice: 'TSh 30,000',
    formattedOriginalPrice: 'TSh 199,000',
    upsellPrice: 70000,
    upsellOriginalPrice: 199000,
    formattedUpsellPrice: 'TSh 70,000',
    formattedUpsellOriginalPrice: 'TSh 199,000',
    formattedUpsellSavings: 'TSh 129,000',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: 'TSh 400,000',
    freelanceResidential: 'TSh 100,000 – TSh 160,000',
    freelanceCommercial: 'TSh 120,000 – TSh 200,000',
    freelanceInterior: 'TSh 80,000 – TSh 140,000',
    renderCharge: 'TSh 100,000+',
    projectRange: 'TSh 600,000–TSh 1,600,000',
    expensiveCourses: 'TSh 1,000,000+',
    ecosystemPrice: 'TSh 30,000',
    bannerText: '🇹🇿 Now Available In Tanzania',
    cities: [
      { name: "Joseph M.", city: "Dar es Salaam" },
      { name: "Neema J.", city: "Arusha" },
      { name: "Hassan A.", city: "Dodoma" },
      { name: "Amina S.", city: "Dar es Salaam" },
      { name: "Emmanuel K.", city: "Mwanza" },
      { name: "Fatma H.", city: "Zanzibar" },
      { name: "John P.", city: "Dar es Salaam" },
      { name: "Grace M.", city: "Arusha" },
      { name: "Said R.", city: "Tanga" },
      { name: "Lilian B.", city: "Mbeya" },
    ],
  },
  UG: {
    code: 'UG',
    name: 'Uganda',
    flag: '🇺🇬',
    currencyCode: 'UGX',
    currencySymbol: 'USh',
    price: 40000,
    originalPrice: 265000,
    formattedPrice: 'USh 40,000',
    formattedOriginalPrice: 'USh 265,000',
    upsellPrice: 100000,
    upsellOriginalPrice: 265000,
    formattedUpsellPrice: 'USh 100,000',
    formattedUpsellOriginalPrice: 'USh 265,000',
    formattedUpsellSavings: 'USh 165,000',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: 'USh 530,000',
    freelanceResidential: 'USh 130,000 – USh 210,000',
    freelanceCommercial: 'USh 160,000 – USh 265,000',
    freelanceInterior: 'USh 110,000 – USh 185,000',
    renderCharge: 'USh 130,000+',
    projectRange: 'USh 800,000–USh 2,100,000',
    expensiveCourses: 'USh 1,300,000+',
    ecosystemPrice: 'USh 40,000',
    bannerText: '🇺🇬 Now Available In Uganda',
    cities: [
      { name: "Ronald K.", city: "Kampala" },
      { name: "Patricia N.", city: "Entebbe" },
      { name: "Moses O.", city: "Jinja" },
      { name: "Sarah A.", city: "Kampala" },
      { name: "Isaac M.", city: "Gulu" },
      { name: "Esther B.", city: "Mbarara" },
      { name: "Daniel W.", city: "Kampala" },
      { name: "Joan N.", city: "Fort Portal" },
      { name: "Simon K.", city: "Kampala" },
      { name: "Rose M.", city: "Lira" },
    ],
  },
  ZA: {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    currencyCode: 'ZAR',
    currencySymbol: 'R',
    price: 300,
    originalPrice: 1999,
    formattedPrice: 'R300',
    formattedOriginalPrice: 'R1,999',
    upsellPrice: 500,
    upsellOriginalPrice: 1999,
    formattedUpsellPrice: 'R500',
    formattedUpsellOriginalPrice: 'R1,999',
    formattedUpsellSavings: 'R1,499',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: 'R4,000',
    freelanceResidential: 'R1,000 – R1,600',
    freelanceCommercial: 'R1,200 – R2,000',
    freelanceInterior: 'R800 – R1,400',
    renderCharge: 'R1,000+',
    projectRange: 'R6,000–R16,000',
    expensiveCourses: 'R10,000+',
    ecosystemPrice: 'R300',
    bannerText: '🇿🇦 Now Available In South Africa',
    cities: [
      { name: "Thabo M.", city: "Johannesburg" },
      { name: "Naledi S.", city: "Cape Town" },
      { name: "Sipho D.", city: "Durban" },
      { name: "Lindiwe K.", city: "Pretoria" },
      { name: "Bongani N.", city: "Johannesburg" },
      { name: "Zanele P.", city: "Bloemfontein" },
      { name: "Mandla J.", city: "Cape Town" },
      { name: "Nomsa T.", city: "Port Elizabeth" },
      { name: "Themba G.", city: "Durban" },
      { name: "Palesa R.", city: "Johannesburg" },
    ],
  },
};

export const DEFAULT_COUNTRY = 'NG';

export function getCountryConfig(countryCode: string): CountryConfig {
  return COUNTRIES[countryCode] || COUNTRIES[DEFAULT_COUNTRY];
}

export function getDiscountPercent(c: CountryConfig): number {
  return Math.round((1 - c.price / c.originalPrice) * 100);
}

export function getUpsellDiscountPercent(c: CountryConfig): number {
  return Math.round((1 - c.upsellPrice / c.upsellOriginalPrice) * 100);
}

export async function detectCountry(): Promise<string> {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    const code = data.country_code;
    if (code && COUNTRIES[code]) return code;
    return DEFAULT_COUNTRY;
  } catch {
    return DEFAULT_COUNTRY;
  }
}
