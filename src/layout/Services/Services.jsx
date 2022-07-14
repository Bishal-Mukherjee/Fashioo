import React from "react";
import "./Services.css";
import Customers from "./Customers";
import Fashionsists from "./Fashionsists";

const SectionHeader = ({ primaryText, secondaryText }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          color: "#160C42",
          fontSize: "2.5rem",
          display: "flex",
          marginTop: "1.5rem",
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
      style={{
        width: "100%",
        height: "185px",
        backgroundColor: "#FFB121",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ fontSize: "2rem" }}>
            <b style={{ fontFamily: "sans-serif", color: "160C42" }}>
              We Provide <span style={{ color: "white" }}>Free</span>{" "}
              Consultancy to
              <br /> Everyone
            </b>
          </h3>
        </div>
        <div style={{ width: "15rem", height: "12rem" }}>
          <img
            src="https://www.dropbox.com/s/f8t6aii1wyfysru/InkedScreenshot_1_LI.jpg?dl=0&raw=1"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
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
