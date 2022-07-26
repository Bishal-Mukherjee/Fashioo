import React from "react";
import "./Consultants.css";

const TextComponent = ({ title, content, type, image }) => {
  return (
    <div
      className="footer_width"
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div>
        {type === "title" && (
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bolder",
              color: "#160C42",
              fontFamily: "Poppins",
            }}
          >
            {title}
          </p>
        )}
        {type === "content" && (
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "white",
                fontFamily: "Poppins",
              }}
            >
              {content}
            </p>
            <div className="content_image" style={{ marginTop: "-5rem" }}>
              <img alt="" src={image} width="210rem" height="195rem" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AboutUs = () => {
  const content =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ex maxime, commodi quibusdam odit deleniti quis, sed odio est ducimus ea distinctio molestias facere fugit inventore quod veniam ipsum provident. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo quae alias consequatur distinctio aspernatur natus ex, voluptates veritatis illo corporis expedita, ut repellat placeat molestias, dolor in? Ut, tempore quam!";
  return (
    <div
      style={{
        width: "100%",
        height: "50%",
        backgroundColor: "#ffb121",
        padding: "1.5rem",
      }}
    >
      <TextComponent title="Who are we?" type="title" />
      <TextComponent
        content={content}
        type="content"
        image="https://www.dropbox.com/s/9sqvhnkp0ue8tuh/Screenshot_4-removebg-preview.png?dl=0&raw=1"
      />
      <div style={{ width: "100%", height: "5rem" }} />
      <TextComponent title="What we offer?" type="title" />
      <TextComponent
        content={content}
        type="content"
        image="https://www.dropbox.com/s/6cdv3lnfzyngvlx/Screenshot_2-removebg-preview.png?dl=0&raw=1"
      />
    </div>
  );
};

export default AboutUs;
