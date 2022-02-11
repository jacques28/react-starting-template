import React from 'react';
import './App.css';

function App() {
  return (
    <section className="testimonial">
      <div className="testimonial-wrapper">
        <img
          className="testimonial-avatar"src="../github.png"alt="image missing"/>
        <div className="testimonial-quote">
          <p>
           Hello, jack
          </p>
        </div>
        <p className="testimonial-name">
          <span>Back at coding...</span>
        </p>
      </div>
    </section>
  );
}  
export default App;
