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
  // Localized hero/marketing copy
  heroCurrencyHook: string;
  premiumRentArea: string;
  premiumAreas: string;
  heroContract: string;
  heroRenderFee: string;
  heroUpfront: string;
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
    price: 32000,
    originalPrice: 50000,
    formattedPrice: '₦32,000',
    formattedOriginalPrice: '₦50,000',
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
    ecosystemPrice: '₦32,000',
    bannerText: '🇳🇬 Now Available In Nigeria',
    heroCurrencyHook: 'Naira is crashing',
    premiumRentArea: 'Lekki',
    premiumAreas: 'Lekki & Abuja',
    heroContract: '₦500,000+',
    heroRenderFee: '₦150k',
    heroUpfront: '₦300k',
    cities: [
      { name: "Chinedu O.", city: "Lagos" },
      { name: "Amaka N.", city: "Abuja" },
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
    price: 320,
    originalPrice: 500,
    formattedPrice: 'GH₵320',
    formattedOriginalPrice: 'GH₵500',
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
    ecosystemPrice: 'GH₵320',
    bannerText: '🇬🇭 Now Available In Ghana',
    heroCurrencyHook: 'Cedi keeps falling',
    premiumRentArea: 'East Legon',
    premiumAreas: 'East Legon & Airport City',
    heroContract: 'GH₵50,000+',
    heroRenderFee: 'GH₵1,500',
    heroUpfront: 'GH₵3,000',
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
    price: 3200,
    originalPrice: 5000,
    formattedPrice: 'KSh 3,200',
    formattedOriginalPrice: 'KSh 5,000',
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
    ecosystemPrice: 'KSh 3,200',
    bannerText: '🇰🇪 Now Available In Kenya',
    heroCurrencyHook: 'Cost of living is rising',
    premiumRentArea: 'Karen',
    premiumAreas: 'Karen & Westlands',
    heroContract: 'KSh 500,000+',
    heroRenderFee: 'KSh 15k',
    heroUpfront: 'KSh 30k',
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
    price: 50000,
    originalPrice: 60000,
    formattedPrice: 'TSh 50,000',
    formattedOriginalPrice: 'TSh 60,000',
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
    ecosystemPrice: 'TSh 50,000',
    bannerText: '🇹🇿 Now Available In Tanzania',
    heroCurrencyHook: 'Prices keep climbing',
    premiumRentArea: 'Masaki',
    premiumAreas: 'Masaki & Oyster Bay',
    heroContract: 'TSh 5,000,000+',
    heroRenderFee: 'TSh 150k',
    heroUpfront: 'TSh 300k',
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
    price: 50000,
    originalPrice: 80000,
    formattedPrice: 'USh 50,000',
    formattedOriginalPrice: 'USh 80,000',
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
    ecosystemPrice: 'USh 50,000',
    bannerText: '🇺🇬 Now Available In Uganda',
    heroCurrencyHook: 'Shilling keeps sliding',
    premiumRentArea: 'Kololo',
    premiumAreas: 'Kololo & Naguru',
    heroContract: 'USh 5,000,000+',
    heroRenderFee: 'USh 150k',
    heroUpfront: 'USh 300k',
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
    price: 320,
    originalPrice: 500,
    formattedPrice: 'R320',
    formattedOriginalPrice: 'R500',
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
    ecosystemPrice: 'R320',
    bannerText: '🇿🇦 Now Available In South Africa',
    heroCurrencyHook: 'Rand keeps weakening',
    premiumRentArea: 'Sandton',
    premiumAreas: 'Sandton & Camps Bay',
    heroContract: 'R50,000+',
    heroRenderFee: 'R1,500',
    heroUpfront: 'R3,000',
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
  US: {
    code: 'US',
    name: 'United States',
    flag: '🌐',
    currencyCode: 'USD',
    currencySymbol: '$',
    price: 29,
    originalPrice: 39,
    formattedPrice: '$29',
    formattedOriginalPrice: '$39',
    upsellPrice: 49,
    upsellOriginalPrice: 99,
    formattedUpsellPrice: '$49',
    formattedUpsellOriginalPrice: '$99',
    formattedUpsellSavings: '$50',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: '$500',
    freelanceResidential: '$150 – $250',
    freelanceCommercial: '$200 – $350',
    freelanceInterior: '$120 – $200',
    renderCharge: '$150+',
    projectRange: '$800–$2,500',
    expensiveCourses: '$1,000+',
    ecosystemPrice: '$29',
    bannerText: '🌐 Now Available Worldwide',
    heroCurrencyHook: 'Inflation is rising',
    premiumRentArea: 'Downtown',
    premiumAreas: 'New York & London',
    heroContract: '$5,000+',
    heroRenderFee: '$500',
    heroUpfront: '$1,000',
    cities: [
      { name: "Michael S.", city: "New York" },
      { name: "Sarah J.", city: "London" },
      { name: "David L.", city: "Toronto" },
      { name: "Alex P.", city: "Sydney" },
      { name: "Emma W.", city: "Chicago" },
      { name: "James K.", city: "Austin" },
      { name: "Daniel M.", city: "Seattle" },
      { name: "Olivia B.", city: "Los Angeles" },
      { name: "Chris T.", city: "Miami" },
      { name: "Laura H.", city: "San Francisco" },
    ],
  },
  CM: {
    code: 'CM',
    name: 'Cameroon',
    flag: '🇨🇲',
    currencyCode: 'XAF',
    currencySymbol: 'FCFA',
    price: 10000,
    originalPrice: 12000,
    formattedPrice: '10,000 FCFA',
    formattedOriginalPrice: '12,000 FCFA',
    upsellPrice: 20000,
    upsellOriginalPrice: 50000,
    formattedUpsellPrice: '20,000 FCFA',
    formattedUpsellOriginalPrice: '50,000 FCFA',
    formattedUpsellSavings: '30,000 FCFA',
    selarCheckoutBase: 'https://selar.com/8w97ef6b6h',
    selarOnetimeBase: 'https://selar.com/xofm2g7c71',
    freelanceTotal: '150,000 FCFA',
    freelanceResidential: '40,000 – 60,000 FCFA',
    freelanceCommercial: '50,000 – 80,000 FCFA',
    freelanceInterior: '30,000 – 50,000 FCFA',
    renderCharge: '40,000 FCFA+',
    projectRange: '200,000–600,000 FCFA',
    expensiveCourses: '400,000 FCFA+',
    bannerText: '🇨🇲 Now Available In Central Africa',
    heroCurrencyHook: 'Cost of living is rising',
    premiumRentArea: 'Bonanjo',
    premiumAreas: 'Douala & Yaoundé',
    heroContract: '400,000 FCFA+',
    heroRenderFee: '100k FCFA',
    heroUpfront: '200k FCFA',
    cities: [
      { name: "Paul E.", city: "Douala" },
      { name: "Marie N.", city: "Yaoundé" },
      { name: "Jean T.", city: "Bafoussam" },
      { name: "Franck K.", city: "Douala" },
      { name: "Astrid M.", city: "Yaoundé" },
      { name: "Samuel O.", city: "Garoua" },
      { name: "Bertrand B.", city: "Bamenda" },
      { name: "Chantal D.", city: "Douala" },
      { name: "Christian L.", city: "Kribi" },
      { name: "Nadine F.", city: "Yaoundé" },
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
    if (code && ['GH', 'KE', 'TZ', 'UG', 'ZA', 'CM'].includes(code) && COUNTRIES[code]) {
      return code;
    }
    return DEFAULT_COUNTRY;
  } catch {
    return DEFAULT_COUNTRY;
  }
}
