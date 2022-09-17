import React from "react";
import "./Services.css";
import { Typography } from "@material-ui/core";

const DetailsCard = ({ content, imageSrc }) => {
  return (
    <div>
      <div className="fashionists_card">
        <div
          style={{
            display: "flex",
            marginLeft: "2.5rem",
          }}
        >
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

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "2rem",
            }}
          >
            <div style={{ width: "15rem" }}>
              <Typography style={{ fontWeight: 600, color: "#160C42" }}>
                {content}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardCatalog = ({ CardsForFashionists }) => {
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
      {CardsForFashionists.map((card) => (
        <DetailsCard content={card.content} imageSrc={card.image} />
      ))}
    </div>
  );
};

const Fashionsists = ({ CardsForFashionists }) => {
  return (
    <div>
      <CardCatalog CardsForFashionists={CardsForFashionists} />
    </div>
  );
};

export default Fashionsists;
