export interface IReview {
  id: string;
  user: {
    name?: {
      first_name: string;
      last_name: string;
    };
  };
  trip: {
    name: string;
  };
  text: string;
  rating: number;
  createdAt: Date;
}
