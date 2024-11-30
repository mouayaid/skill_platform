import React from "react";
import "../App.css"; // Ensure custom styles are included

function Contact() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center">
          <h6 className="section-title">Contact Us</h6>
          <h1 className="mb-5">Contact For Any Query</h1>
        </div>

        <div className="row g-4">
          {/* Contact Details Section */}
          <div className="col-lg-4 col-md-6">
            <h5>Get in Touch</h5>
            <p className="mb-4">
              For Graduates Seeking Job Opportunities: Whether you're a recent graduate looking to start your career or a skilled professional seeking new challenges, we are here to help you connect with the right opportunities. Feel free to reach out to us and share your career aspirations.
            </p>
            <ContactDetail
              icon="fa-map-marker-alt"
              title="Office"
              content="Sousse"
            />
            <ContactDetail
              icon="fa-phone-alt"
              title="Mobile"
              content="31 325 100"
            />
            <ContactDetail
              icon="fa-envelope-open"
              title="Email"
              content="contact@episousse.com.tn"
            />
          </div>

          {/* Map Section */}
          <div className="col-lg-4 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.7396402442996!2d10.58605537564185!3d35.830863172539516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b3b860b9a3b%3A0x35d82efedf0f5515!2sEPI%20digital%20school!5e0!3m2!1sen!2stn!4v1731949500020!5m2!1sen!2stn"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EPI Digital School Location"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-4 col-md-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

// ContactDetail Component
const ContactDetail = ({ icon, title, content }) => (
  <div className="d-flex align-items-center mb-3">
    <div
      className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
      style={{ width: "50px", height: "50px" }}
    >
      <i className={`fa ${icon} text-white`}></i>
    </div>
    <div className="ms-3">
      <h5 className="text-primary">{title}</h5>
      <p className="mb-0">{content}</p>
    </div>
  </div>
);

// ContactForm Component
const ContactForm = () => (
  <form>
    <div className="row g-3">
      <div className="col-md-6">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
          />
          <label htmlFor="name">Your Name</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
          />
          <label htmlFor="email">Your Email</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Subject"
          />
          <label htmlFor="subject">Subject</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <textarea
            className="form-control"
            id="message"
            placeholder="Leave a Message"
            style={{ height: "150px" }}
          ></textarea>
          <label htmlFor="message">Leave a Message</label>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary w-100 py-3" type="submit">
          Send Message
        </button>
      </div>
    </div>
  </form>
);

export default Contact;
