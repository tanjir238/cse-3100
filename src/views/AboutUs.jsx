import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-us" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>About Us</h2>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '20px' }}>
        Welcome to our site! We are dedicated to connecting you with the most adorable cats looking for their forever homes.
      </p>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', color: '#444' }}>
        <p>
          Our mission is to provide a platform that helps cats find loving homes and raise awareness about the joy and responsibility of pet adoption.
        </p>
        <p>
          Founded in 2024, we have built a community of cat lovers who are passionate about giving every cat a chance at a happy life. Whether you’re looking to adopt, learn about different breeds, or simply browse through heartwarming stories, we’re here for you.
        </p>
        <p>
          Thank you for visiting our website. Together, we can make a difference in the lives of cats everywhere.
        </p>
      </div>
    </section>
  );
}
