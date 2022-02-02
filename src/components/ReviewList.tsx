import React from 'react';
import { useSelector } from 'react-redux';
import { IReview } from '../interfaces/review';
import { IState } from '../interfaces/state';
import Review from './Review';

type ReviewListProps = {
  title: string;
  messageIfEmpty: string;
  showTripTitle: boolean;
};

const ReviewList = ({
  title,
  messageIfEmpty,
  showTripTitle,
}: ReviewListProps) => {
  const reviews: IReview[] = useSelector((state: IState) => state.reviews);

  const renderReviews = () => {
    return reviews.map(review => {
      return (
        <Review
          key={review._id}
          review={review}
          showTripTitle={showTripTitle}
        />
      );
    });
  };
  return (
    <div id="my-review-list">
      <h5 className="text-muted mb-3">{title}</h5>
      <ul className="list-group">
        {reviews.length === 0 ? (
          <div className="mb-4">{messageIfEmpty}</div>
        ) : (
          renderReviews()
        )}
      </ul>
    </div>
  );
};

export default ReviewList;
