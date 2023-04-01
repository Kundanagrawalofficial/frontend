import React from "react";
import Layout from "./../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={`About us -  Mobile Point`}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to mobilepoint.in, your one-stop-shop for all the latest and greatest gadgets!

At mobilepoint.in, we're passionate about technology and are dedicated to providing you with the best selection of gadgets at competitive prices. Whether you're looking for the latest smartphone, a sleek laptop, or a cutting-edge smartwatch, we've got you covered.

Our team of tech experts is constantly scouring the market for the newest and most innovative gadgets, so you can be sure that our product selection is always up-to-date. We pride ourselves on offering a wide variety of products from top brands, as well as lesser-known up-and-coming brands that we believe in.

We know that shopping for gadgets can be overwhelming, which is why we're committed to providing you with exceptional customer service. Our friendly and knowledgeable support team is always ready to answer your questions and help you find the perfect product for your needs.

We believe in transparency and honesty, which is why we provide detailed product descriptions, customer reviews, and competitive pricing on all of our products. Plus, with our fast and reliable shipping, you can start enjoying your new gadgets in no time.

Thank you for choosing mobilepoint.in for all your gadget needs. We're excited to be a part of your tech journey!
          </p>
        </div>
      </div>
    </Layout>
  );
  
};

export default About;
