import React from "react";
import "./Home.css";
import Happy from "./happyC.png";
import Yahya from "./HomeImages/YahyaTes.jpg";
import Faisal from "./HomeImages/FaisalTes.jpg";
import Alhaji from "./HomeImages/AlhajiTes.jpg";
import Stephen from "./HomeImages/StephenTes.jpg";

function Home() {
  return (
    <div className="contianer">
      <div className="site-details">
        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>
                  Welcome to <span className="wel">HandyPro</span>
                </h2>
                <p>
                  Explore our wide range of services and find the perfect
                  provider for your needs. Whether you need a plumber, home
                  cleaner, electrician, graphics designer, web designer, or
                  website developer, we've got you covered.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <a href="#services" className="btn-get-started">
                    Get Started
                  </a>
                  {/* 
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                  
                    <span>Watch Video</span>
                  </a>
                  */}
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img
                  src="HomeService.png"
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-out"
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>

          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
                <div
                  className="col-xl-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-hammer"></i>
                    </div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Home Improvement
                      </a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-brush"></i>
                    </div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        Cleaning Services
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-gem"></i>
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Sed ut perspiciatis
                      </a>
                    </h4>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <h4 className="title">
                      <a href="" className="stretched-link">
                        Magni Dolores
                      </a>
                    </h4>
                  </div>
                </div>
                */}
        </section>
        {/* 
        <div className="website-banner">
          <img
            src="https://cdn.dribbble.com/userupload/6144946/file/original-de8e04dae3201773b66a1c2403c951ff.png?resize=1024x535"
            alt="banner"
            style={{ width: "100%" }}
          />
          
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
          
        </div>
 */}
        <div style={{ marginTop: "2em", padding: "15px" }}></div>
        <p
          style={{ textAlign: "center", fontFamily: "Sofia", fontSize: "2em" }}
        >
          Find service provider
        </p>
        <div className="search-provider" action="/action_page.php">
          <input
            type="text"
            placeholder="Search.."
            name="search2"
            style={{ marginTop: "20px" }}
          />
          <button type="submit">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="empty-container"></div>
      <div className="boundary"></div>
      <section id="services" className="services sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              Greetings from our platform! To meet your demands, we provide an
              extensive array of services. View our selections below:
            </p>
          </div>
          <a
            href="/Service"
            className="d-flex justify-content-end mb-2 text-decoration-none text-dark"
            style={{ fontSize: "20px" }}
          >
            Explore All <i className="bi bi-arrow-right"></i>
          </a>

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
              </div>
              {/* 
              <a href="#" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#" className="readmore stretched-link">
                Read more <i className="bi bi-arrow-right"></i>
              </a>
              */}
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stats-counter" className="stats-counter">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6">
              <img src={Happy} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="31"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  31
                </span>
                <p>
                  <strong>Happy Clients</strong> utilizing our resources to
                  identify the ideal service suppliers.
                </p>
              </div>
              <div className="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="12"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  12
                </span>
                <p>
                  <strong>Projects</strong> with the assistance of our
                  dependable service providers.
                </p>
              </div>
              <div className="stats-item d-flex align-items-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="20"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  20
                </span>
                <p>
                  <strong>Hours Of Support</strong> ready to help you locate the
                  ideal service provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2> Popular Service</h2>
            <p>
              Greetings from our platform! To meet your demands, we provide an
              extensive array of services. View our selections below:
            </p>
          </div>

          <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://nationaleconomyplumber.com/wp-content/uploads/2020/10/Different-Types-of-Plumbers.jpg"
                  alt="Photo by Sam manns"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Plumber</h2>
                  <p className="title">Fixing Leaks & Pipes</p>
                  <p>
                    Our plumbers are prepared to efficiently address any
                    plumbing problems, from leak repairs to unclogging drains.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/181120606/photo/painter-painting-wood-trim.jpg?s=612x612&w=0&k=20&c=EUoiVwG7MUpEWorR5F_ILQMmgk4Q5x4kMW6_XdZxvdY="
                  alt="Photo by Wieger Stienstra"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Painter</h2>
                  <p className="title">Transforming Spaces</p>
                  <p>
                    With their artistic brushstrokes and meticulous attention to
                    detail, our talented painters will breathe new life into
                    your walls.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/516005348/photo/african-electrical-worker-using-laptop-computer.jpg?s=612x612&w=0&k=20&c=YOoIZXo1BHEVdi_R-bXQvxCwX7nkaCogh6YzdysFtbY="
                  alt="Photo by Manuel Meza"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Electrician</h2>
                  <p className="title">Wiring & Installations</p>
                  <p>
                    Our electricians provide answers for all of your electrical
                    demands while making sure your house is wired safely and
                    effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=612x612&w=0&k=20&c=Em-dB6fevNhRd5yaIxcgjDfFxuTVT4OSm_ys_Ybke6c="
                  alt="Photo by Sam manns"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Electronics Technician</h2>
                  <p className="title">Repair & Maintenance</p>
                  <p>
                    Trust our skilled experts to repair any issues with your
                    electrical devices, ensuring they function properly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/177318607/photo/construction-mason-worker-bricklayer.jpg?s=170667a&w=0&k=20&c=TU8eb3u_vJx9aHDIC3F9JU8C3ck6gQFBl1b8b1Ljxh0="
                  alt="Photo by Manuel Meza"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Mason/Builder</h2>
                  <p className="title">Constructing Dreams</p>
                  <p>
                    Make your fantasy space a reality with the help of our
                    knowledgeable masons and builders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/654153664/photo/cleaning-service-sponges-chemicals-and-mop.jpg?s=612x612&w=0&k=20&c=vHQzKbz7L8oEKEp5oQzfx8rwsOMAV3pHTV_1VPZsREA="
                  alt="Photo by Wieger Stienstra"
                  style={{ width: "100%" }}
                />
                <div className="container">
                  <h2>Home Cleaner</h2>
                  <p className="title">Spotless Cleaning</p>
                  <p>
                    Remain calm and comfortable as our professional cleaners
                    turn your house into a tidy environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials display-flex">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>Here are some testimonials from our satisfied customers.</p>
          </div>
          <div
            className="slides-3 swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src={Alhaji}
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Ibrahim Mohammed</h3>
                        <h4>Frontend Developer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Having this crew to work with was a true delight. Their
                      professionalism and meticulous attention to detail are
                      admirable.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src={Stephen}
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Apam Stephen</h3>
                        <h4>Software Developer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      The caliber of the team's work and their commitment to it
                      have truly impressed me. They went above and above what I
                      had anticipated.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src={Faisal}
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Faisal Abdul Hamid</h3>
                        <h4>Engineer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      The group's commitment to quality is unparalleled.
                      Outstanding outcomes are continuously delivered by them.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src={Yahya}
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Yahya Osman</h3>
                        <h4>Entrepreneur</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>This group
                      is very highly recommended by me. They delivered on
                      schedule and offered first-rate assistance.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center">
                      <img
                        src={Happy}
                        className="testimonial-img flex-shrink-0"
                        alt=""
                      />
                      <div>
                        <h3>Emily White</h3>
                        <h4>Designer</h4>
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Their creative solutions helped us achieve our goals
                      effectively. I'm extremely satisfied with their work.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
                {/* End Info Item */}

                <div className="col-md-6">
                  <div
                    className="info-item"
                    data-aos="fade"
                    data-aos-delay="500"
                  >
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday</p>
                    <p>9:00AM - 05:00PM</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action=""
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/*
      <section>
        <div className="d-flex justify-content-end">
          <a href="#hero " style={{fontSize: '5em'}} data-aos="zoom-out" data-aos-delay="400">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </a>
        </div>
      </section>
       */}

      {/*
      <div class="">
        <h2 class="" style={{ textAlign: "center" }}>
          Most Popular project
        </h2>
        <br />
        <p class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra rhoncus suscipit. Integer eget leo pretium, vulputate velit
          sit amet, aliquam est Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec pharetra rhoncus suscipit. Integer eget leo
          pretium, vulputate velit sit amet, aliquam est
        </p>
      </div>
      <div className=" container-fluid row">
        <div className="col-sm">
          <div className="card">
            <img
              src="https://nationaleconomyplumber.com/wp-content/uploads/2020/10/Different-Types-of-Plumbers.jpg"
              alt="Photo by Sam manns"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Plumber</h2>
              <p className="title">Fixing Leaks & Pipes</p>
              <p>
                Our plumbers are prepared to efficiently address any plumbing
                problems, from leak repairs to unclogging drains.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="col-sm">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/181120606/photo/painter-painting-wood-trim.jpg?s=612x612&w=0&k=20&c=EUoiVwG7MUpEWorR5F_ILQMmgk4Q5x4kMW6_XdZxvdY="
              alt="Photo by Wieger Stienstra"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Painter</h2>
              <p className="title">Transforming Spaces</p>
              <p>
                With their artistic brushstrokes and meticulous attention to
                detail, our talented painters will breathe new life into your
                walls.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="col-sm">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/516005348/photo/african-electrical-worker-using-laptop-computer.jpg?s=612x612&w=0&k=20&c=YOoIZXo1BHEVdi_R-bXQvxCwX7nkaCogh6YzdysFtbY="
              alt="Photo by Manuel Meza"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Electrician</h2>
              <p className="title">Wiring & Installations</p>
              <p>
                Our electricians provide answers for all of your electrical
                demands while making sure your house is wired safely and
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/654153664/photo/cleaning-service-sponges-chemicals-and-mop.jpg?s=612x612&w=0&k=20&c=vHQzKbz7L8oEKEp5oQzfx8rwsOMAV3pHTV_1VPZsREA="
              alt="Photo by Wieger Stienstra"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Home Cleaner</h2>
              <p className="title">Spotless Cleaning</p>
              <p>
                Remain calm and comfortable as our professional cleaners turn
                your house into a tidy and revitalizing environment.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="col-sm">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/625135580/photo/laptop-disassembling-with-screwdriver-at-repair.jpg?s=612x612&w=0&k=20&c=Em-dB6fevNhRd5yaIxcgjDfFxuTVT4OSm_ys_Ybke6c="
              alt="Photo by Sam manns"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Electronics Technician</h2>
              <p className="title">Repair & Maintenance</p>
              <p>
                Trust our skilled experts to repair any issues with your
                electrical devices, ensuring they function properly.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="col-sm">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/177318607/photo/construction-mason-worker-bricklayer.jpg?s=170667a&w=0&k=20&c=TU8eb3u_vJx9aHDIC3F9JU8C3ck6gQFBl1b8b1Ljxh0="
              alt="Photo by Manuel Meza"
              style={{ width: "100%" }}
            />
            <div className="container">
              <h2>Mason/Builder</h2>
              <p className="title">Constructing Dreams</p>
              <p>
                Make your fantasy space a reality with the help of our
                knowledgeable masons and builders.
              </p>
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}

export default Home;
