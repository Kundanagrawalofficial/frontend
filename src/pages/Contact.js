import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            We're here to help with any questions or concerns you may have. Don't hesitate to reach out to us using one of the methods below.
          </p>
          <p className="mt-3">
            <BiMailSend /> : mobilepointcustomercare@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 7050653832
          </p>
          <p className="mt-3">
            <BiSupport /> : +91 7050653832
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
