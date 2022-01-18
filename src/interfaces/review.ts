export interface IReview {
  id: string;
  user: string;
  trip: string;
  text: string;
  rating: number;
  createdAt: Date;
}
