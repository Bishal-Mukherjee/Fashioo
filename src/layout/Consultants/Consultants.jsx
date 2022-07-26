import { Button } from "@material-ui/core";
import React from "react";
import "./Consultants.css";
import ConsultantsCatalog from "./ConsultantsCatalog";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const PageHeader = () => {
  return (
    <div className="page_header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <h3
            style={{
              color: "#160C42",
              fontSize: "2rem",
              marginTop: "5rem",
              fontFamily: "Poppins",
            }}
          >
            Register
          </h3>
          <div className="header_component_content">
            <p
              style={{
                color: "white",
                fontSize: "1.5rem",
                textAlign: "justify",
                fontWeight: "bolder",
              }}
            >
              <span style={{ color: "#160C42", fontFamily: "Poppins" }}>
                Are You a{" "}
              </span>
              <span>
                Fashion Stylist <span style={{ color: "#160C42" }}>/</span>{" "}
                Consultant <span style={{ color: "#160C42" }}>/</span> Designer{" "}
                <span style={{ color: "#160C42", fontFamily: "Poppins" }}>
                  Or A
                </span>{" "}
                Beautician <span style={{ color: "#160C42" }}>?</span>
              </span>
            </p>
            <p
              style={{
                color: "#160C42",
                fontSize: "1.5rem",
                fontFamily: "Poppins",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Register with us for free. Kindly fill up the form
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "1rem",
          marginTop: "-1rem",
        }}
      >
        <div
          id="register_button"
          style={{
            borderRadius: "1rem",
            backgroundColor: "white",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ transform: "translateY(60%)" }}>
            <a
              href="https://github.com"
              style={{
                fontFamily: "Poppins",
                fontWeight: "bolder",
                color: "#160C42",
                marginTop: "1.5rem",
              }}
            >
              Register
            </a>
          </div>
        </div>
        <img
          id="header_img"
          src="https://sarcoidosisnews.com/wp-content/uploads/2021/05/SittingDoodle-1.png"
          alt=""
          width="200rem"
          height="175rem"
          style={{ marginLeft: "-3.5rem" }}
        />
      </div>
    </div>
  );
};

const Consultants = () => {
  const listOfConsultants = [
    {
      name: "Jenny Martin",
      image: "",
      price: "499",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi, perspiciatis ex animi aperiam incidunt laboriosam officia! Ex deserunt recusandae vitae rem ratione rerum nam mollitia quaerat, adipisci eaque soluta?",
    },
    {
      name: "Lui Thomas",
      image: "",
      price: "499",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi, perspiciatis ex animi aperiam incidunt laboriosam officia! Ex deserunt recusandae vitae rem ratione rerum nam mollitia quaerat, adipisci eaque soluta?",
    },
    {
      name: "Sharlet Waston",
      image: "",
      price: "499",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi, perspiciatis ex animi aperiam incidunt laboriosam officia! Ex deserunt recusandae vitae rem ratione rerum nam mollitia quaerat, adipisci eaque soluta?",
    },
    {
      name: "Martha Brown",
      image: "",
      price: "499",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi, perspiciatis ex animi aperiam incidunt laboriosam officia! Ex deserunt recusandae vitae rem ratione rerum nam mollitia quaerat, adipisci eaque soluta?",
    },
    {
      name: "Cerry Luther",
      image: "",
      price: "499",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi, perspiciatis ex animi aperiam incidunt laboriosam officia! Ex deserunt recusandae vitae rem ratione rerum nam mollitia quaerat, adipisci eaque soluta?",
    },
  ];
  return (
    <div>
      <PageHeader />
      <ConsultantsCatalog listOfConsultants={listOfConsultants} />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Consultants;
