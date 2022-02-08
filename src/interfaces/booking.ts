export interface IBooking {
  _id: string;
  user: string;
  trip: {
    name: string;
  };
  trip_date: string;
  createdAt: Date;
  status: string;
}

export interface BookingFormValues {
  trip: string;
  date: string;
}
