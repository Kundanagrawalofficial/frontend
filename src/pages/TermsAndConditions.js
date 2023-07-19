import React from 'react';

const TermsAndConditions = () => {
  const mobileWebsiteTermsURL = '/path/to/your/termsAndConditions.html';
  const razorpayTermsURL = 'https://merchant.razorpay.com/policy/MFbwSdsf69dpyL/terms';

  return (
    <div>
      <h1>Mobile Website Terms and Conditions</h1>
      <iframe src={mobileWebsiteTermsURL} title="Mobile Website Terms" width="100%" height="400px" />
      <h1>Razorpay Terms and Conditions</h1>
      <iframe src={razorpayTermsURL} title="Razorpay Terms" width="100%" height="400px" />
    </div>
  );
};

export default TermsAndConditions;
