import React from 'react';
import { IReview } from '../interfaces/review';

type ReviewProps = {
  review: IReview;
  showTripTitle: boolean;
};

const Review = ({ review, showTripTitle }: ReviewProps) => {
  return (
    <li className="list-group-item border-0 w-100">
      <div className="card border-0">
        <div className="card-body">
          {showTripTitle ? (
            <h5 className="card-title mb-4">{review.trip.name}</h5>
          ) : null}

          <h5 className="card-subtitle mb-4">{review.text}</h5>

          <p>
            <strong>Rating: </strong>
            {review.rating}
          </p>

          <p className="card-subtitle ">
            {new Date(review.createdAt)
              .toLocaleDateString('fi-FI')
              .replaceAll('.', '/')}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Review;
