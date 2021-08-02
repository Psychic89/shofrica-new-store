import React from 'react';

const Footer = () => (
<footer className="pt-5">
  <div className="custom-container mb-5 pb-5 pt-5">
  <div className="row">
  <div className="col-12 col-sm-6 col-md-4">
  <p className="font-family-secondary font-size-display1 mb-4">
  Shofrica
  </p>
  <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
  <div className="pr-5">
  <a
href="/giftguide"
className="mb-3 d-block font-color-medium"
  >
  Gifting
  </a>
  <a
href="/collection"
className="d-block font-color-medium"
  >
  Jewelry
  </a>
  </div>
  <div>
  </div>
  </div>
  </div>
  <div className="col-12 col-sm-6 col-md-4">
  <p className="font-family-secondary font-size-display1 mb-4">
  Follow us
</p>
<div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
  <div className="pr-5">
  <a
href="https://twitter.com/shofrica"
className="mb-3 d-block font-color-medium"
target="_blank"
  >
  Twitter
  </a>
  <a
href="https://www.instagram.com/shofrica/"
className="d-block font-color-medium"
target="_blank"
  >
  Instagram
  </a>
  </div>
  <div>
  <a
href="https://facebook.com/shofrica"
className="mb-3 d-block font-color-medium"
target="_blank"
  >
  Facebook
  </a>
  <a
href="https://www.linkedin.com/company/shofrica"
className="d-block font-color-medium"
target="_blank"
  >
  LinkedIn
  </a>
  </div>
  </div>
  </div>
  <div className="col-12 col-md-4">
  <p className="font-family-secondary font-size-display1 mb-3">
  Newsletter
  </p>
  <p>Be the first to know about product launches, events, tutorials and all things Shofrica. Receive 10% off your first purchase! </p>
<div className="position-relative">
  <input
className="borderbottom border-color-gray400 h-48 w-100 px-3"
placeholder="Enter your email address"
  />
  <button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
  <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
  </button>
  <p>By signing up, you accept the terms of Shofrica's <a href="/privacy" target="_blank" className="cjs-link" rel="noopener noreferrer">privacy policy</a>!</p>
</div>
</div>
</div>
</div>
<div className="pt-md-5">
  <div className="bg-brand300">
  <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
  <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
  <a
href="/imprint"
className="font-color-brand font-size-caption text-uppercase text-center"
  >
  Imprint
  </a>
  <p className="px-2 font-color-brand font-size-caption">-</p>
  <a
href="/privacy"
className="font-color-brand font-size-caption text-uppercase text-center"
  >
  Privacy Policy
</a>
<p className="px-2 font-color-brand font-size-caption">-</p>
  <a
href="/terms"
className="font-color-brand font-size-caption text-uppercase text-center"
  >
  Terms & Conditions
  </a>
  </div>
  <div className="font-color-brand font-size-caption py-4 text-right">
  <a
href="/"
className="font-color-brand font-size-caption text-uppercase text-center"
  >
  &copy; { new Date().getFullYear() } Shofrica e.K.
</a>
</div>
</div>
</div>
</div>
</footer>
);

export default Footer;
