export interface IBooking {
  _id: string;
  user: string;
  trip: {
    name: string;
    price: number;
  };
  trip_date: string;
  createdAt: Date;
  status: string;
}

export interface BookingFormValues {
  trip: string;
  date: string;
}

export interface BookedTrip {
  name: string;
  price: number;
}
