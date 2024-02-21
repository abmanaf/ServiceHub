import React, { useState } from "react";
import "./Service_provider.css";

function ServiceProviderSignup() {
  const [currentTab, setCurrentTab] = useState(0);

  const showTab = (n) => {
    const x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n === 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === x.length - 1) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n);
  };

  const nextPrev = (n) => {
    const x = document.getElementsByClassName("tab");
    if (n === 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    setCurrentTab(currentTab + n);
    if (currentTab >= x.length) {
      document.getElementById("regForm").submit();
      return false;
    }
    showTab(currentTab);
  };

  const validateForm = () => {
    let x,
      y,
      i,
      valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
      if (y[i].value === "") {
        y[i].className += " invalid";
        valid = false;
      }
    }
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className +=
        " finish";
    }
    return valid;
  };

  const fixStepIndicator = (n) => {
    let i,
      x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
  };

  return (
    <form id="regForm" action="/action_page.python">
      <h1>Register:</h1>
      <div className="tab">
        Name:
        <p>
          <input
            placeholder="First name..."
            onInput={() => (this.className = "")}
            name="fname"
          />
        </p>
        <p>
          <input
            placeholder="Last name..."
            onInput={() => (this.className = "")}
            name="lname"
          />
        </p>
      </div>
      <div className="tab">
        Contact Info:
        <p>
          <input
            placeholder="E-mail..."
            onInput={() => (this.className = "")}
            name="email"
          />
        </p>
        <p>
          <input
            placeholder="Phone..."
            onInput={() => (this.className = "")}
            name="phone"
          />
        </p>
      </div>
      <div className="tab">
        Details:
        <p>
          <input
            placeholder="Profession"
            onInput={() => (this.className = "")}
            name="dd"
          />
        </p>
        <p>
          <input
            placeholder="Location"
            onInput={() => (this.className = "")}
            name="nn"
          />
        </p>
      </div>
      <div className="tab">
        Login Info:
        <p>
          <input
            placeholder="Username..."
            onInput={() => (this.className = "")}
            name="uname"
          />
        </p>
        <p>
          <input
            placeholder="Password..."
            onInput={() => (this.className = "")}
            type="password"
            id="psw"
            name="pword"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </p>
        <p>
          <div id="message">
            <h3>Password must contain the following:</h3>
            <p id="letter" className="invalid">
              A <b>lowercase</b> letter
            </p>
            <p id="capital" className="invalid">
              A <b>capital (uppercase)</b> letter
            </p>
            <p id="number" className="invalid">
              A <b>number</b>
            </p>
            <p id="length" className="invalid">
              Minimum <b>8 characters</b>
            </p>
          </div>
          By clicking the Submit button, you agree to our{" "}
          <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
        </p>
      </div>
      <div style={{ overflow: "auto" }}>
        <div style={{ float: "right" }}>
          <button type="button" id="prevBtn" onClick={() => nextPrev(-1)}>
            Previous
          </button>
          <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
            Next
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <span className="step"></span>
        <span className="step"></span>
        <span className="step"></span>
        <span className="step"></span>
      </div>
    </form>
  );
}

export default ServiceProviderSignup;
