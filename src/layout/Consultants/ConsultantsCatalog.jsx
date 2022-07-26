import { Button } from "@material-ui/core";
import React from "react";
import "./Consultants.css";

const ConsultantCard = ({ name, price, description }) => {
  return (
    <div className="consultant_card">
      <div className="consultant_card_content">
        <div style={{ display: "flex" }}>
          <img
            alt=""
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwRAJ3N8uoXt1hsjyDhL2PhH-9tfIr6xUckGyrxR6fAtc5LWFS"
            width="125rem"
            height="125rem"
            style={{
              borderRadius: "60px",
              marginTop: "2rem",
              marginLeft: "2rem",
            }}
          />
          <div style={{ marginTop: "4rem", marginLeft: "1.5rem" }}>
            <div>
              <p
                style={{
                  color: "#160C42",
                  fontSize: "1.2rem",
                  fontWeight: "bolder",
                  textAlign: "justify",
                  fontFamily: "Poppins",
                }}
              >
                {name}
              </p>
            </div>

            <h3 style={{ color: "white", fontFamily: "Poppins" }}>₹ {price}</h3>
          </div>
        </div>
        <p
          style={{ fontFamily: "Poppins" }}
          className="consultant_card_description"
        >
          {description}
        </p>
        <div
          style={{
            marginTop: "8%",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button
            style={{
              width: "80%",
              borderRadius: "10px",
              backgroundColor: "#ffb121",
              color: "white",
              fontWeight: "bolder",
            }}
            variant="contained"
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

const ConsultantsCatalog = ({ listOfConsultants }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "2rem",
            fontFamily: "Poppins",
            fontWeight: "bolder",
            marginTop: "1rem",
          }}
        >
          OUR CONSULTANTS
        </p>
      </div>
      <div
        style={{
          paddingBottom: "5rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {listOfConsultants.map((consultant) => (
          <ConsultantCard
            name={consultant.name}
            price={consultant.price}
            description={consultant.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ConsultantsCatalog;
