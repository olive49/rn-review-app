export const HALF_SECOND = 500;

export const RATING_LENGTH = 5;

export interface Form {
  title: string;
  content: string;
  rating: number;
}

export interface Review extends Form {
  id: number;
}

export enum FORM_VALUES {
  TITLE = "title",
  CONTENT = "content",
  RATING = "rating",
}
