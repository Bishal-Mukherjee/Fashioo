import React from "react";
import "./LandingPage.css";
import { Button } from "@material-ui/core";
import { useState } from "react";

const SidebarLink = ({ text, link, color, handleOptionSelection }) => {
  return (
    <a
      className="sidebar_links"
      href={link}
      onClick={() => handleOptionSelection(text)}
      style={{ color: color }}
    >
      <b>{text}</b>
    </a>
  );
};

const Sidebar = () => {
  const [values, setValues] = useState({
    selectedOption: "home",
  });
  const { selectedOption } = values;
  const sidebarLinks = [
    { text: "home", link: "#1" },
    { text: "about", link: "#2" },
    { text: "services", link: "#3" },
    { text: "team", link: "#4" },
    { text: "contact", link: "#5" },
  ];
  const handleOptionSelection = (option) => {
    setValues({ ...values, selectedOption: option });
  };
  return (
    <div className="sidenav">
      <div className="logo">
        <b>Fashioo</b>
      </div>
      <div style={{ height: "5rem" }} />
      {sidebarLinks.map((sidebarLink) => (
        <SidebarLink
          text={sidebarLink.text}
          link={sidebarLink.link}
          values={values}
          setValues={setValues}
          color={selectedOption === sidebarLink.text ? "black" : "grey"}
          handleOptionSelection={handleOptionSelection}
        />
      ))}

      <div style={{ height: "10rem", width: "12rem", marginTop: "3rem" }}>
        <img
          src="https://www.dropbox.com/s/wpb62jg6dn832rp/leaves.png?dl=0&raw=1"
          alt=""
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

const MainConent = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "15%",
          overflow: "hidden",
          marginTop: "1rem",
        }}
      >
        <h3
          style={{
            fontSize: "4rem",
            color: "#160C42",
            marginTop: "12rem",
            fontFamily: "Poppins",
          }}
        >
          FRESH UP YOUR <br />
          LOOK
        </h3>
        <div
          className="landing-image"
          style={{ width: "30rem", height: "45rem" }}
        >
          <img
            src="https://www.dropbox.com/s/25lr2lod42qqo2x/2022-07-13-21-53-59.jpg?dl=0&raw=1"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "21%", marginTop: "-8rem" }}>
        <Button
          style={{
            width: "20rem",
            height: "4rem",
            color: "white",
            fontWeight: 900,
            backgroundColor: "#160C42",
          }}
        >
          VIEW YOUR NEEDS
        </Button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Sidebar />
      <MainConent />
    </div>
  );
};

export default LandingPage;
