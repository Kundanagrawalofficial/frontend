import React from "react";
import Layout from "./../components/Layout/Layout.js";
import "./About.css"
const About = () => {
  return (
    <Layout title={`About us - Mobile Point`}>
      <div className={`row ${styles.container}`}>
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            className={styles.image}
          />
        </div>
        <div className={`col-md-4 ${styles.textContainer}`}>
          <h2 className={styles.heading}>Welcome to Mobile Point</h2>
          <p className={styles.text}>
            We are your one-stop-shop for all the latest and greatest gadgets!
          </p>
          <p className={styles.text}>
            At Mobile Point, we are passionate about technology and dedicated to
            providing you with the best selection of gadgets at competitive
            prices.
          </p>
          <p className={styles.text}>
            Our team of tech experts is constantly scouring the market for the
            newest and most innovative gadgets, so you can be sure that our
            product selection is always up-to-date.
          </p>
          <p className={styles.text}>
            We pride ourselves on offering a wide variety of products from top
            brands, as well as lesser-known up-and-coming brands that we believe
            in.
          </p>
          <p className={styles.text}>
            We understand that shopping for gadgets can be overwhelming, which
            is why we are committed to providing you with exceptional customer
            service. Our friendly and knowledgeable support team is always ready
            to answer your questions and help you find the perfect product for
            your needs.
          </p>
          <p className={styles.text}>
            We believe in transparency and honesty, which is why we provide
            detailed product descriptions, customer reviews, and competitive
            pricing on all of our products. Plus, with our fast and reliable
            shipping, you can start enjoying your new gadgets in no time.
          </p>
          <p className={styles.text}>
            Thank you for choosing Mobile Point for all your gadget needs. We
            are excited to be a part of your tech journey!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
