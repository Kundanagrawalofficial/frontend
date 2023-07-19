import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <h4 className='text-center'>All Right Reserved &copy; Seller</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/policy">Privacy Policy</Link>
        {/* Add the Terms and Conditions link below */}
        | <a href="https://merchant.razorpay.com/policy/MFbwSdsf69dpyL/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
      </p>
    </div>
  );
};

export default Footer;
