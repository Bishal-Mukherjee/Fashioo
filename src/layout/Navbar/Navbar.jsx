/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from "react";
import { Box, AppBar, Toolbar } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";

export const navigationLinks = {
  marginRight: "1.5rem",
  cursor: "pointer",
  fontFamily: "Poppins",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#ffb121",
};

export const ROUTING_OBJ = {
  HOME: {
    index: 1,
    path: "/",
  },
  SERVICES: {
    index: 2,
    path: "/services",
  },
  CONSULTANTS: {
    index: 3,
    path: "/consultants",
  },
};

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [pageIndex, setPageIndex] = useState(0);

  const handlePageRedirection = (isRefrehed, page) => {
    if (!isRefrehed) {
      setPageIndex(ROUTING_OBJ[page].index);
      history.push(ROUTING_OBJ[page].path);
    } else {
      let page = location.pathname.split("/")[1].toUpperCase();
      if (page === "") {
        setPageIndex(ROUTING_OBJ["HOME"].index);
      } else setPageIndex(ROUTING_OBJ[page].index);
    }
  };

  useEffect(() => {
    handlePageRedirection(true, "");
  }, []);

  return (
    <Box>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#282D32",
          position: "fixed",
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <div className="logo">
            <b>
              Fashi<span style={{ color: "white" }}>o</span>o
            </b>
          </div>
          <div className="navlinks" style={{ marginLeft: "auto" }}>
            {Object.keys(ROUTING_OBJ).map((navlink) => (
              <Fragment>
                <span
                  style={{
                    ...navigationLinks,
                    color:
                      pageIndex === ROUTING_OBJ[navlink].index
                        ? "#fff"
                        : "#ffb121",
                  }}
                  onClick={() => handlePageRedirection(false, navlink)}
                >
                  {navlink}
                </span>
              </Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
