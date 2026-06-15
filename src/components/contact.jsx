import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Контактная информация</h2>
              </div>

              {/* Блок с PDF-файлами */}
              <div className="row mb-5">
                <div className="col-md-6">
                  <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", border: "1px solid #eee" }}>
                    <h4>Карта партнера</h4>
                    <a
                      href="/pdf1.pdf"          
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#007bff" }}
                    >
                      📄 Открыть PDF
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px", border: "1px solid #eee" }}>
                    <h4>Сводные данные СОУТ</h4> 
                    <a
                      href="/pdf1.pdf"         
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#007bff" }}
                    >
                      📄 Открыть PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Блок контактов */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Адрес
                </span>{" "}
                {props.data ? props.data.address : "Информация загружается…"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Телефон
                </span>{" "}
                {props.data ? props.data.phone : "Информация загружается…"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? (
                  <a href={`mailto:${props.data.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {props.data.email}
                  </a>
                ) : (
                  "Информация загружается…"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 Anastasia Mironova web studio</p>
        </div>
      </div>
    </div>
  );
};



