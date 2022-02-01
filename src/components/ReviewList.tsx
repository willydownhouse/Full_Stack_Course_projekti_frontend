import React from 'react';
import { useSelector } from 'react-redux';
import { IReview } from '../interfaces/review';
import { IState } from '../interfaces/state';
import Review from './Review';

const ReviewList = () => {
  const reviews: IReview[] = useSelector((state: IState) => state.reviews);
  return (
    <div>
      <h5 className="text-muted mb-3">My reviews</h5>
      <ul className="list-group">
        {reviews.length === 0 ? (
          <div>You dont have any reviews</div>
        ) : (
          reviews.map(review => <Review key={review.id} review={review} />)
        )}
      </ul>
    </div>
  );
};

export default ReviewList;
