import React from "react";
import Layout from "./../components/Layout/Layout";
import { Header } from "antd/es/layout/layout";
import Footer from "../components/Layout/Footer";

const Policy = () => {
  return (

    <>
      <Header/>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p>At MobilePoint, we value the privacy of our customers and website visitors. This privacy policy outlines how we collect, use, and protect your personal information.</p>
          <p>We may collect personal information from you when you visit our website, register an account, place an order, or communicate with us via email or phone. This information may include your name, address, phone number, email address, and payment details.</p>
          <p>We use this information to process your orders, provide customer support, and communicate with you about our products and promotions. We may also use this information to improve our website and services.</p>
          <p>We do not sell or rent your personal information to third parties. However, we may share your information with our partners and service providers who assist us in providing our services. These partners and service providers are required to protect your personal information and may only use it for the purposes of providing services to MobilePoint</p>
          <p>We use cookies to enhance your browsing experience and personalize our website content. Cookies are small data files that are placed on your device when you visit our website. They help us remember your preferences, analyze website traffic, and improve our website performance.</p>
          <p>You may disable cookies in your browser settings, but please note that some website features may not function properly without cookies.</p>
          <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, and misuse. However, no data transmission over the internet can be guaranteed to be 100% secure. Therefore, we cannot guarantee the security of your personal information.</p>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page and will become effective immediately upon posting.</p>
          <p>If you have any questions or concerns about our privacy policy, please contact us at mobilepointcustomercare@gmail.com.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Policy;
