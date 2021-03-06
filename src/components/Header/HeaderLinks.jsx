/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link
          to="/"
          color="transparent"
          className={classes.navLink}
        >
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/about"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/buynsell"
          color="transparent"
          className={classes.navLink}
        >
          Buy & Sell
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/customerstory"
          color="transparent"
          className={classes.navLink}
        >
          Customer Stories
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          // href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          className={classes.navLink}
        >
          Listing
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
