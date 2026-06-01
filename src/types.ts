export type SubjectDomain = 'Sciences' | 'Commercials' | 'Arts & Languages' | 'Practical';

export interface SubjectItem {
  id: string;
  name: string;
  category: SubjectDomain;
  description: string;
  isALevel: boolean;
  isOLevel: boolean;
}

export interface PricePlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  badge?: string;
}

export interface InquiryForm {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  gradeLevel?: string;
  status: 'Pending' | 'Contacted';
  createdAt: string;
}
