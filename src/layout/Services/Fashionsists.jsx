import React from "react";
import "./Services.css";
import { Typography } from "@material-ui/core";

const DetailsCard = ({ content, imageSrc }) => {
  return (
    <div>
      <div className="fashionists_card_sm">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div className="fashionists_service_circle_sm">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20%",
              }}
            >
              <img
                alt=""
                className="fashionists_circle_card_img "
                src={imageSrc}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginLeft: "2rem",
            }}
          >
            <div style={{ width: "18rem", marginTop: "1rem" }}>
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
