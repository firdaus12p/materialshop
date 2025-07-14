// TypeScript interfaces for the application

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  image_url?: string;
  icon?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  is_active: boolean;
  sort_order: number;
  product_count: number;
  types_count: number;
  products_count: number;
  url: string;
  created_at: string;
  updated_at: string;
  product_types?: ProductType[];
}

export interface ProductType {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  image_url?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  is_active: boolean;
  sort_order: number;
  product_count: number;
  products_count: number;
  url: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  product_type_id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  price?: number;
  sale_price?: number;
  price_formatted: string;
  sale_price_formatted?: string;
  stock_quantity: number;
  sku?: string;
  weight?: number;
  dimensions?: string;
  brand?: string;
  material?: string;
  color?: string;
  size?: string;
  featured_image?: string;
  gallery_images: string[];
  specifications: Record<string, any>;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  views_count: number;
  status: "draft" | "published" | "out_of_stock" | "discontinued";
  created_at: string;
  updated_at: string;
  created_at_formatted: string;

  // Related data
  product_type_name: string;
  product_type_slug: string;
  category_name: string;
  category_slug: string;

  // URLs
  url: string;
  category_url: string;
  type_url: string;

  // WhatsApp integration
  whatsapp_message: string;
  whatsapp_url: string;

  // Related products
  related_products?: Product[];

  // SEO
  meta?: MetaTags;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  image_url?: string;
  author_id: number;
  author_name: string;
  category?: string;
  tags?: string;
  tags_array: string[];
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  status: "draft" | "published" | "archived";
  published_at?: string;
  published_at_formatted: string;
  views_count: number;
  reading_time: number;
  reading_time_formatted: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;

  // URLs
  url: string;

  // Related articles
  related_articles?: Article[];

  // SEO
  meta?: MetaTags;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
  sort_order: number;
  is_active: boolean;
  views_count: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string;
  role: "admin" | "super_admin";
  avatar?: string;
  last_login?: string;
  login_attempts: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Setting {
  id: number;
  setting_key: string;
  setting_value?: string;
  description?: string;
  setting_type: "text" | "textarea" | "number" | "boolean" | "json";
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface ErrorLog {
  id: number;
  error_type: "database" | "api" | "upload" | "validation" | "system";
  error_message: string;
  error_code?: string;
  file_path?: string;
  line_number?: number;
  user_id?: number;
  request_url?: string;
  request_method?: string;
  request_data?: any;
  stack_trace?: string;
  severity: "low" | "medium" | "high" | "critical";
  is_resolved: boolean;
  created_at: string;
  resolved_at?: string;
}

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  "og:title": string;
  "og:description": string;
  "og:type": string;
  "og:site_name": string;
  "og:image"?: string;
  "og:url"?: string;
  "twitter:card": string;
  "twitter:title": string;
  "twitter:description": string;
  "twitter:image"?: string;
  canonical?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

export interface PaginationData {
  page: number;
  limit: number;
  total: number;
  pages: number;
  has_next: boolean;
  has_prev: boolean;
}

export interface ProductsResponse {
  products: Product[];
  pagination: PaginationData;
  filters: {
    category?: number;
    type?: number;
    search?: string;
    featured?: boolean;
    min_price?: number;
    max_price?: number;
    brand?: string;
    sort: string;
    order: string;
  };
}

export interface ArticlesResponse {
  articles: Article[];
  pagination: PaginationData;
  filters: {
    category?: string;
    search?: string;
    featured?: boolean;
  };
}

export interface CategoriesResponse {
  category: Category;
  product_types: ProductType[];
}

// Form interfaces
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface SearchFilters {
  category?: number;
  type?: number;
  search?: string;
  min_price?: number;
  max_price?: number;
  brand?: string;
  sort?: string;
  order?: string;
  page?: number;
  limit?: number;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

// Component Props
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

export interface ImageOptimizeProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

// Error handling
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface ApiError {
  message: string;
  code?: number;
  errors?: Record<string, string>;
}
