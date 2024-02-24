import React from "react";

function Home() {
  return (
    <div className="contianer">
      <div className="site-details">
        <div className="website-banner">
          <img
            src="https://cdn.dribbble.com/userupload/6144946/file/original-de8e04dae3201773b66a1c2403c951ff.png?resize=1024x535"
            alt="banner"
            style={{ width: "100%" }}
          />
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
           */}
        </div>

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
      <div className="row">
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
    </div>
  );
}

export default Home;
