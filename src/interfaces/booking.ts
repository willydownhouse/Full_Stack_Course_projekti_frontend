export interface IBooking {
  id: string;
  user: string;
  trip: {
    name: string;
  };
  trip_date: string;
  createdAt: Date;
  status: string;
}
