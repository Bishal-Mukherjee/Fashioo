import React from "react";
import "./Services.css";
import { Typography } from "@material-ui/core";

const ServiceDetailsCard = ({ content, imageSrc }) => {
  return (
    <div>
      <div className="service_card">
        <div style={{ display: "flex", marginLeft: "2.5rem" }}>
          <div className="service_circle">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20%",
              }}
            >
              <img
                alt=""
                style={{
                  width: "5rem",
                  height: "5rem",
                }}
                src={imageSrc}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "80%", height: "5rem" }}>
            <Typography
              style={{
                fontWeight: 600,
                color: "#160C42",
                fontFamily: "Poppins",
              }}
            >
              {content}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCardCatalog = ({ CardsForCustomers }) => {
  return (
    <div
      style={{
        paddingBottom: "5rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {CardsForCustomers.map((card) => (
        <ServiceDetailsCard content={card.content} imageSrc={card.image} />
      ))}
    </div>
  );
};

const Customers = ({ CardsForCustomers }) => {
  return (
    <div>
      <ServiceCardCatalog CardsForCustomers={CardsForCustomers} />
    </div>
  );
};

export default Customers;
