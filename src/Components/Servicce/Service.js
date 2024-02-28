import React from "react";
import "./Service.css";

function service() {
  return (
    <div id="fresh-page">
      {/*
      <div
        className="message-to-users"
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "8em",
          fontSize: "17px",
        }}
      >
        <p className="note" style={{ wordWrap: "break-word" }}>
          Are you looking for a reliable service provider for your home
          repairs, maintenance, or improvement? Look no further! Our
          platform is your go-to place for finding skilled professionals who
          can get the job done.
        </p>
      </div>
       <div id="fresh-page">
        <div id="empty-folder">
          <div id="move">
            <h2 data-text="&nbsp; Service Page comming soon &nbsp;">
              &nbsp; Service Page comming soon &nbsp;
            </h2>
          </div>
        </div>
      </div>
       */}
      <section id="services" className="services sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              Greetings from our platform! To meet your demands, we provide an
              extensive array of services. View our selections below:
            </p>
          </div>

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-deaf" aria-hidden="true"></i>
                </div>
                <h3>Plumber</h3>
                <p>
                  Do you require plumbing services? We have knowledgeable
                  plumbers available to assist you with all of your plumbing
                  requirements.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
      */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-bath" aria-hidden="true"></i>
                </div>
                <h3>Home Cleaner</h3>
                <p>
                  Enjoy a stress-free experience as our team of expert house
                  cleaners attends to all of your cleaning requirements.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
                </div>
                <h3>Electrician</h3>
                <p>
                  Having problems with the electricity? For any of your
                  electrical needs, our qualified electricians are available to
                  help.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-laptop" aria-hidden="true"></i>
                </div>
                <h3>Graphics Designer</h3>
                <p>
                  With our innovative graphic design services, which are
                  customized to your demands, you may improve the visual
                  identity of your brand.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
                <h3>Web Designer</h3>
                <p>
                  Do you want a beautiful website? You can rely on our skilled
                  web designers to produce stunning and intuitive designs.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-code" aria-hidden="true"></i>
                </div>
                <h3>Website Developer</h3>
                <p>
                  With the help of our knowledgeable website developers, who can
                  create bespoke solutions that are suited to your requirements,
                  you may realize your web design concepts.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                </div>
                <h3>UI/UX Designer</h3>
                <p>
                  Your web design ideas can become custom solutions that satisfy
                  your objectives thanks to the expertise of our UI/UX
                  designers.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-chain-broken" aria-hidden="true"></i>
                </div>
                <h3>Carpenter</h3>
                <p>
                  Our skilled carpenters are here to help you realize your
                  woodworking projects by providing specialized solutions that
                  are suited to your requirements.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-gavel" aria-hidden="true"></i>
                </div>
                <h3>Mason/Builder</h3>
                <p>
                  Our knowledgeable masons and builders can create projects that
                  are specific to your requirements while guaranteeing fine
                  craftsmanship and close attention to detail.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item position-relative">
                <div className="icon">
                  <i class="fa fa-wrench" aria-hidden="true"></i>
                </div>
                <h3>Electronics Technician</h3>
                <p>
                  With the help of our knowledgeable website developers, who can
                  create bespoke solutions that are suited to your requirements,
                  you may realize your web design concepts.
                </p>
                {/*
                  <a href="#" className="readmore stretched-link">
                    Read more <i className="bi bi-arrow-right"></i>
                  </a>
              */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default service;
