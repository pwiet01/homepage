export interface Project {
  href: string;
  name: string;
  description1: string;
  description2?: string;
  link?: string;
  linkText?: string;
  modifier?: string;
  hint?: string;
}

export interface ContactFormResponse {
  success: boolean;
  data?: Partial<ContactFormData>;
}

export interface ContactFormData {
  email: string;
  fullName: string;
  message: string;
}
