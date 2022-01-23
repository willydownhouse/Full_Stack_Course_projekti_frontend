import React from 'react';

//styles in app.css

type NoAccessPageProps = {
  message: string;
};

const NoAccessPage = ({ message }: NoAccessPageProps) => {
  return (
    <div className="no-access-page flex-center">
      <h6>{message}</h6>
    </div>
  );
};

export default NoAccessPage;
