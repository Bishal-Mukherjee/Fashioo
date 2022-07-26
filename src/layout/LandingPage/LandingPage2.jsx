import React from "react";
import "./LandingPage.css";

const LandingPage2 = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffb121",
        width: "100%",
        paddingBottom: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "4rem",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bolder",
              marginTop: "8rem",
              display: "flex",
              justifyContent: "center",
              marginLeft: "10rem",
            }}
          >
            FRESH UP YOUR <br /> LOOK
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "20rem",
                height: "5rem",
                marginTop: "1.5rem",
                backgroundColor: "#160C42",
                boxShadow: "5px 5px 15px black",
                cursor: "pointer",
              }}
              onClick={() => console.log("clicked...")}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Poppins",
                  textAlign: "center",
                  fontWeight: "bolder",
                  transform: "translateY(1.5rem)",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                View your needs
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "5rem",
            }}
          >
            <img
              alt="bottom_image"
              src="https://www.dropbox.com/s/ccuxfo673wem6qk/Screenshot_9.png?dl=0&raw=1"
              width="250rem"
              height="250rem"
            />
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2.5rem",
                  fontWeight: "bolder",
                  color: "#160C42",
                }}
              >
                Our story
              </p>
              <div style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "0.1rem",
                    height: "10rem",
                    marginTop: "1rem",
                    backgroundColor: "#7209B7",
                  }}
                />
                <div
                  style={{
                    width: "15rem",
                    height: "5rem",
                    marginLeft: "2rem",
                    marginTop: "2rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bolder",
                      color: "white",
                    }}
                  >
                    Mattis eget tempor scelerisque ut nulla elit tristique.
                    Sollicitudin non tellus accumsan libero fermentum nulla.
                    Orci id tempor viverra et hendrerit rutrum etiam blandit
                    enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "35rem",
            height: "40rem",
            backgroundColor: "#ffb121",
            marginTop: "5rem",
            marginLeft: "auto",
          }}
        >
          <img
            src="https://www.dropbox.com/s/0gd070zbmokbutt/Screenshot_8.png?dl=0&raw=1"
            alt="side_dual_images"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
