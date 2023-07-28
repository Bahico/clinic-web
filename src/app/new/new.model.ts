export interface NewModel {
  id: string;
  title: string;
  description: string;
  video?: string;
  image?: string;
  pdf?: string;
  create_date?: Date;
}

export interface PaginationNewModel {
  count: 0;
  next?: string;
  previous?: string;
  results: NewModel[];
}
