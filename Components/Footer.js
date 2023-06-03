import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <span className="text-muted">
          Your footer content goes here.
        </span>
      </div>
      <style jsx>{`
        .footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
