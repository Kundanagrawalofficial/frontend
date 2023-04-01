import React from "react";
import Lay from "./../components/Layout/Lay";

const Policy = () => {
  return (
    <Lay>
      <div className="row mt-5">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center mb-4">Privacy Policy</h1>
          <p className="mb-4">At MobilePoint.in, we value the privacy of our customers and website visitors. This privacy policy outlines how we collect, use, and protect your personal information.</p>
          <p className="mb-4">We may collect personal information from you when you visit our website, register an account, place an order, or communicate with us via email or phone. This information may include your name, address, phone number, email address, and payment details.</p>
          <p className="mb-4">We use this information to process your orders, provide customer support, and communicate with you about our products and promotions. We may also use this information to improve our website and services.</p>
          <p className="mb-4">We do not sell or rent your personal information to third parties. However, we may share your information with our partners and service providers who assist us in providing our services. These partners and service providers are required to protect your personal information and may only use it for the purposes of providing services to MobilePoint.in.</p>
          <h2 className="bg-dark p-2 text-white text-center mb-4">Cookies</h2>
          <p className="mb-4">We use cookies to enhance your browsing experience and personalize our website content. Cookies are small data files that are placed on your device when you visit our website. They help us remember your preferences, analyze website traffic, and improve our website performance.</p>
          <p className="mb-4">You may disable cookies in your browser settings, but please note that some website features may not function properly without cookies.</p>
          <h2 className="bg-dark p-2 text-white text-center mb-4">Security</h2>
          <p className="mb-4">We take reasonable measures to protect your personal information from unauthorized access, disclosure, and misuse. However, no data transmission over the internet can be guaranteed to be 100% secure. Therefore, we cannot guarantee the security of your personal information.</p>
          <h2 className="bg-dark p-2 text-white text-center mb-4">Updates to Privacy Policy</h2>
          <p className="mb-4">We may update this privacy policy from time to time. Any changes will be posted on this page and will become effective immediately upon posting.</p>
          <h2 className="bg-dark p-2 text-white text-center mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about our privacy policy, please contact us at:</p>
          <ul>
            <li>Email: mobilepointcustomercare@gmail.com</li>
            <li>Phone: 7050653832</li>
          </ul>
        </div>
      </div>
    </Lay>
  );
};

export default Policy;
