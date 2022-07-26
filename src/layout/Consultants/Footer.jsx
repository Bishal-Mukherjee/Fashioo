import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import {
  Instagram,
  LinkedIn,
  AlternateEmail,
  Phone,
  LocationOn,
  Copyright,
} from "@material-ui/icons";
import "./Consultants.css";

const PageFooter = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#ffb121" }}>
      <div
        className="footer"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div className="footer_logo">
          <div
            style={{
              width: "10rem",
              height: "10rem",
              borderRadius: "50%",
              backgroundColor: "#ffb121",
              position: "relative",
              boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p className="fashioo_logo">
              Fashi
              <span style={{ color: "white", fontFamily: "Poppins" }}>o</span>o
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1.5rem",
            }}
          >
            <div>
              <Instagram
                style={{
                  fontSize: "3rem",
                  boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.35)",
                  borderRadius: "35%",
                }}
              />
            </div>
            <div>
              <LinkedIn
                style={{
                  fontSize: "3rem",
                  boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.35)",
                  borderRadius: "35%",
                  padding: "-2rem",
                }}
              />
            </div>
          </div>
        </div>

        <div className="footer_content">
          <div>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              Contact
            </p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p>
              <AlternateEmail style={{ color: "white", fontSize: "2.5rem" }} />{" "}
              &nbsp;
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                contact@fashioo.in
              </span>
            </p>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p>
              <b>
                {" "}
                <Phone
                  style={{
                    color: "white",
                    fontSize: "2.5rem",
                  }}
                />
              </b>{" "}
              &nbsp;
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                Rohit +91766436692
              </span>
            </p>
            <div style={{ marginTop: "1rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                Address
              </p>
              <p>
                <LocationOn style={{ color: "white", fontSize: "2.5rem" }} />{" "}
                &nbsp;
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bolder",
                    fontFamily: "Raleway",
                  }}
                >
                  Nagpur Maharashtra, India
                </span>
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                Pin code - 440001
              </p>
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                Fashioo{" "}
                <Copyright style={{ color: "white", fontSize: "2rem" }} /> 2020
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "-8rem",
            borderRadius: "50%",
            width: "25rem",
            height: "25rem",
          }}
        >
          <img
            src="https://www.dropbox.com/s/xtyqf8zcscqm0tk/2022-07-22-23-56-31.jpg?dl=0&raw=1"
            alt=""
            width="70%"
            style={{ transform: "translateX(20%) translateY(30%)" }}
          />
        </div>
      </div>

      {/* apart from logo */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          transform: "translateX(10rem) translateY(-3rem)",
          position: "relative",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Raleway",
            }}
          >
            Contact
          </p>
          <div style={{ marginTop: "1rem" }}>
            <p>
              <AlternateEmail style={{ color: "white", fontSize: "2.5rem" }} />{" "}
              &nbsp;
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                contact@fashioo.in
              </span>
            </p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p>
              <b>
                {" "}
                <Phone
                  style={{
                    color: "white",
                    fontSize: "2.5rem",
                  }}
                />
              </b>{" "}
              &nbsp;
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                Rohit +91766436692
              </span>
            </p>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p
              style={{
                fontSize: "2rem",
                fontWeight: "bolder",
                fontFamily: "Raleway",
              }}
            >
              Address
            </p>
            <p>
              <LocationOn style={{ color: "white", fontSize: "2.5rem" }} />{" "}
              &nbsp;
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  fontFamily: "Raleway",
                }}
              >
                Nagpur Maharashtra, India
              </span>
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                fontFamily: "Raleway",
              }}
            >
              Pin code - 440001
            </p>
          </div>
          <div style={{ marginTop: "1.5rem", marginLeft: "1rem" }}>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bolder",
                fontFamily: "Raleway",
              }}
            >
              Fashioo <Copyright style={{ color: "white", fontSize: "2rem" }} />{" "}
              2020
            </p>
          </div>
        </div>
        <div
          style={{
            marginLeft: "2rem",
            marginTop: "-2rem",
            borderRadius: "50%",
            width: "25rem",
            height: "25rem",
          }}
        >
          <img
            src="https://www.dropbox.com/s/xtyqf8zcscqm0tk/2022-07-22-23-56-31.jpg?dl=0&raw=1"
            alt=""
            width="70%"
            style={{ transform: "translateX(20%) translateY(30%)" }}
          />
        </div>
      </div> */}
      {/* apart from logo */}
    </div>
  );
};

const CustomerFeedback = ({ customerFeedbacks }) => {
  const [feedbackIndex, setFeedbackIndex] = useState(0);
  const [increament, setIncreament] = useState(0);

  const manageSlide = () => {
    if (feedbackIndex + 1 <= customerFeedbacks.length - 1) {
      setFeedbackIndex(feedbackIndex + 1);
    } else {
      setFeedbackIndex(0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      manageSlide();
      setIncreament(increament + 1);
    }, 3000);
  }, [increament]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem",
          padding: "1.5rem",
        }}
      >
        <div className="about_us_main">
          <h3
            style={{
              fontSize: "2rem",
              color: "#160C42",
              textAlign: "justify",
              fontFamily: "Raleway",
            }}
          >
            What our customers say about us?
          </h3>
          <div style={{ marginTop: "1.5rem" }}>
            <div>
              <h2 style={{ color: "#160C42", fontFamily: "Poppins" }}>
                {customerFeedbacks[feedbackIndex].name}
              </h2>
              <div className="customer_feedbacks">
                <Typography
                  style={{
                    color: "#808080",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  {customerFeedbacks[feedbackIndex].feedback}
                </Typography>
              </div>

              <div>
                {Array.from({
                  length: customerFeedbacks[feedbackIndex].rating,
                }).map(() => (
                  <span style={{ color: "red", fontSize: "1.5rem" }}>❤</span>
                ))}
              </div>

              <div style={{ display: "flex", marginTop: "1rem" }}>
                {Array.from({ length: customerFeedbacks.length }).map(
                  (_, index) => (
                    <div
                      style={{
                        fontSize: "2.5rem",
                        backgroundColor:
                          feedbackIndex === index ? "#ffb121" : "black",
                        height: "0.5rem",
                        width: "1rem",
                        borderRadius: "50px",
                        margin: "0.1rem",
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="content_image">
          <img
            alt=""
            src="https://www.dropbox.com/s/btl3massvduhf6h/Screenshot_5-removebg-preview.png?dl=0&raw=1"
            width="335rem"
            height="330rem"
          />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const customerFeedbacks = [
    {
      name: "Sonia Sinha",
      feedback:
        "Our mission statement revolves around, Connecting fashion stylists with their potential customers. We offer digitalized fashion consulting services in a Complete/fragmented form at affordable prices, which is hard to find at the current time.",
      rating: 3,
    },
    {
      name: "Jenny Martin",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit placeat aliquid aspernatur deleniti molestiae non maiores hic voluptatum in. Odit soluta, minus sapiente aperiam fugiat nulla laudantium dolorem aspernatur!",
      rating: 5,
    },
    {
      name: "Lui Thomas",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit placeat aliquid aspernatur deleniti molestiae non maiores hic voluptatum in. Odit soluta, minus sapiente aperiam fugiat nulla laudantium dolorem aspernatur!",
      rating: 2,
    },
    {
      name: "Martha",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit placeat!",
      rating: 4,
    },
  ];
  return (
    <div style={{ width: "100%", overflowY: "none" }}>
      <CustomerFeedback customerFeedbacks={customerFeedbacks} />
      <PageFooter />
    </div>
  );
};

export default Footer;
