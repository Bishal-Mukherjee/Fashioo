import React, { Fragment, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTING_OBJ, navigationLinks } from "../Navbar";
import "./Navigation.css";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  const [pageIndex, setPageIndex] = useState(2);
  const currentLocation = location.pathname.split("/")[1];

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

  return (
    <Fragment>
      <div className="navigation_bar">
        {currentLocation !== "" && (
          <AppBar
            position="fixed"
            color="primary"
            style={{ top: "auto", bottom: 0 }}
          >
            <BottomNavigation showLabels>
              {Object.keys(ROUTING_OBJ)
                .slice(1, 3)
                .map((navlink) => (
                  <BottomNavigationAction
                    label={
                      <span
                        style={{
                          ...navigationLinks,
                          color:
                            pageIndex === ROUTING_OBJ[navlink].index
                              ? "#ffb121"
                              : "#000000",
                        }}
                      >
                        {navlink}
                      </span>
                    }
                    onClick={() => handlePageRedirection(false, navlink)}
                  >
                    {navlink}
                  </BottomNavigationAction>
                ))}
            </BottomNavigation>
          </AppBar>
        )}
      </div>
    </Fragment>
  );
};

export default Navigation;
