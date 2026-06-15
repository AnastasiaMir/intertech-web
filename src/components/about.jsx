import React from "react";

import { useState } from "react";

export const About = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img 
              src="img/about.jpg" 
              className="img-responsive" 
              alt="О нас" 
              onClick={() => setIsOpen(true)} 
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>О нас</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content">
            <img src="img/about.jpg" alt="О нас увеличенное" />
          </div>
        </div>
      )}
    </div>
  );
};
