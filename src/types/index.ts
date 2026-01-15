export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  service: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message?: string;
}
