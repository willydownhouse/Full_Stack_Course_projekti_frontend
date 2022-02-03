import React from 'react';
import BookingForm from './BookingForm';
import Footer from './Footer';
import TripShowcase from './TripShowcase';

const BookingPage = () => {
  return (
    <div>
      <TripShowcase src="./img/sum2.jpg" />
      <div className="container">
        <h3 className="text-muted mt-5 mb-5">Book</h3>
        <BookingForm />
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
