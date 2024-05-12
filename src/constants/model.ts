export interface Form {
  title: string;
  content: string;
  rating: number;
}

export interface Review extends Form {
  id: number;
}
