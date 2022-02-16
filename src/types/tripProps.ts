import { ITrip } from '../interfaces/trip';

export interface TripProps {
  trip: ITrip;
  index: number;
}

export type TripListProps = {
  trips: ITrip[];
};
