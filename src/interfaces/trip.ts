export default interface ITrip {
  id: string;
  type: string;
  name: string;
  location: object;
  duration: number;
  price: number;
  maxGroupSize: number;
  tecnicalDifficulty?: string;
  physicalDifficulty?: string;
  description?: string;
  numOfReviews?: number;
  reviewAverage?: number;
  mainImg?: string;
  images?: string[];
  startDates?: string[];
  active: boolean;
}
