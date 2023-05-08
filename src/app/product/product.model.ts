export interface ProductModel {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  pdf: string;
}

export type NewPostModel = Omit<ProductModel, 'id'> & { id: null };

export interface PostResponse {
  results: ProductModel[];
  next: string | null;
  previous: string | null;
}
