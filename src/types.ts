export interface PageConfig {
  productName: string;
  tagline: string;
  priceMT: number;
  originalPriceMT: number;
  paymentUrl: string;
  whatsappNumber: string;
  whatsappSupportMsg: string;
  sellerName: string;
}

export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlightTag?: string;
}

export interface PainPointItem {
  id: string;
  title: string;
  description: string;
}

export interface TargetAudienceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  avatar: string;
  role: string;
  rating: number;
  comment: string;
  resultBadge: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  title: string;
  valValueMT: number;
  description: string;
  badge?: string;
}

export interface EbookChapter {
  chapterNumber: string;
  title: string;
  description: string;
  mentorSecret?: string;
}

export interface EbookPart {
  id: string;
  partNumber: number;
  title: string;
  subtitle: string;
  chaptersRange: string;
  iconName: string;
  chapters: EbookChapter[];
}

export interface LiveSaleItem {
  name: string;
  city: string;
  timeAgo: string;
}
