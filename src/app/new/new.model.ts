export interface NewModel {
  id: number;
  title: string;
  description: string;
  video: string;
  image: string;
  pdf: string;
  create_date: Date;
}

export interface NewPaginationModel {
  results: NewModel[];
  previous?: string;
  next?: string;
}
