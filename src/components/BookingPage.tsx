import React from 'react';
import BookingForm from './BookingForm';
import Footer from './Footer';

const BookingPage = () => {
  return (
    <div>
      <div className="min-vh-100">
        <div className="container">
          <h3 className="text-muted mt-5">Book</h3>
          <BookingForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
