import React from "react";
import "./Services.css";
import Customers from "./Customers";
import Fashionsists from "./Fashionsists";

const SectionHeader = ({ primaryText, secondaryText }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="section_header"
        style={{
          color: "#160C42",
          display: "flex",
          marginTop: "1.5rem",
          padding: "1rem",
        }}
      >
        <b>{primaryText}</b>{" "}
        <div className="ad_circle">
          <span
            style={{
              color: "white",
              fontSize: "30px",
              display: "flex",
              justifyContent: "center",
              fontFamily: "Poppins",
            }}
          >
            &#62;
          </span>
        </div>{" "}
        {secondaryText}{" "}
      </div>
    </div>
  );
};

const PageBar = () => {
  return (
    <div
      className="page_bar"
      style={{
        width: "100%",
        backgroundColor: "#FFB121",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3 className="page_bar_text">
            <b
              style={{
                fontFamily: "Poppins",
                color: "#160C42",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              We Provide{" "}
              <span
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  margin: "0rem 0.5rem 0rem 0.5rem",
                }}
              >
                Free
              </span>{" "}
              Consultancy to <br /> Everyone
            </b>
          </h3>
        </div>
        <div
          className="page_bar_image_lg"
          style={{ width: "15rem", height: "12rem" }}
        >
          <img
            src="https://www.dropbox.com/s/f8t6aii1wyfysru/InkedScreenshot_1_LI.jpg?dl=0&raw=1"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div
        className="page_bar_image_sm"
        style={{
          width: "15rem",
          height: "12rem",
          transform: "translateX(25%)",
          paddingBottom: "1rem",
        }}
      >
        <img
          src="https://www.dropbox.com/s/f8t6aii1wyfysru/InkedScreenshot_1_LI.jpg?dl=0&raw=1"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

const Services = () => {
  const CardsForCustomers = [
    {
      key: 1,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptate doloribus sapiente quam! Fuga molestias earum explicabo perspiciatis natus. Rerum impedit laborum reiciendis in.",
    },
    {
      key: 2,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptate doloribus sapiente quam! Fuga molestias earum explicabo perspiciatis natus. Rerum impedit laborum reiciendis in.",
    },
    {
      key: 3,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptate doloribus sapiente quam! Fuga molestias earum explicabo perspiciatis natus. Rerum impedit laborum reiciendis in.",
    },
    {
      key: 4,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptate doloribus sapiente quam! Fuga molestias earum explicabo perspiciatis natus. Rerum impedit laborum reiciendis in.",
    },
    {
      key: 5,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptate doloribus sapiente quam! Fuga molestias earum explicabo perspiciatis natus. Rerum impedit laborum reiciendis in.",
    },
    {
      key: 6,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptate doloribus sapiente quam! Fuga molestias earum explicabo perspiciatis natus. Rerum impedit laborum reiciendis in.",
    },
  ];

  const CardsForFashionists = [
    {
      key: 1,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptat.",
    },
    {
      key: 2,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptat.",
    },
    {
      key: 3,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptat.",
    },
    {
      key: 4,
      image:
        "https://www.dropbox.com/s/bs0plmdb3nfn92j/Screenshot_2.png?dl=0&raw=1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore fugit a natus reprehenderit non hic voluptat.",
    },
  ];
  return (
    <div>
      <PageBar />
      <SectionHeader primaryText="OUR SERVICES" secondaryText="CUSTOMERS" />
      <Customers CardsForCustomers={CardsForCustomers} />
      <SectionHeader primaryText="OUR SERVICES" secondaryText="FASHIONISTS" />
      <Fashionsists CardsForFashionists={CardsForFashionists} />
    </div>
  );
};

export default Services;
