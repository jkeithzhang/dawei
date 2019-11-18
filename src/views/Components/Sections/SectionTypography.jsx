import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/avatar.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h3>Happy Customers</h3>
            </div>
            <br />
            <br />
            <GridContainer>
              <div className={classes.typo}>
                <Quote
                  text="Dawei is great at finding the right investment properties for us to buy."
                  author="- Laura"
                />
              </div>
              <br />
              <div className={classes.typo}>
                <Quote
                  text="M. Dawei Zhu helped me to sell my house. He found a buyer in few days and he was able to
                        sell my house at a very good price (higher than I expected). I really appreciated his pertinent
                        advices, his professionalism and his honesty. He was always available and easy to reach. I felt
                        that he really wanted to help me and that he was not only interested by his commission that was
                        more than reasonable according to his effort and time he worked for me. I recommend M. Zhu."
                  author="- Ghislain"
                />
              </div>
              <br />
              <div className={classes.typo}>
                <Quote
                  text="Great Knowledge and Superb service, definitely recommend!"
                  author="- Max"
                />
              </div>
            </GridContainer>
          </div>
          <div className={classes.space50} />
          <div id="images">
            <br />
            <GridContainer>
            </GridContainer>
          </div>
          <div className={classes.space50} />
        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
