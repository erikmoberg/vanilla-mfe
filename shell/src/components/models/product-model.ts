export class ProductModel {
  id: string;
  author?: string;
  publisher?: string;
  isbn?: string;
  title: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  location?: string;
  instructor?: string;
  img: string;
  website: string;
  description: string;
  priceSEK: number;
  priceEUR: number;
  type: string;
  searchTerms: string[];
}