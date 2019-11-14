import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Search from "@material-ui/icons/Search";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";
import List from "@material-ui/icons/List";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Mood from "@material-ui/icons/Mood";
import Email from "@material-ui/icons/Email";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div className={classes.title}>
                  <h3> Selling your properties</h3>
                </div>
                <div className={classes.title}>
                  <h3>
                    <small>in 4 steps:</small>
                  </h3>
                </div>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Listing",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <p>
                            Selling your property in Ottawa’s real estate market is a significant venture and having the guidance of a seasoned professional is invaluable. Every client is as unique as their property, and I will work with you, from the very beginning, to understand your specific circumstances and marketing goals. I will go the extra mile to help you establish your goals.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Pricing",
                      tabIcon: AttachMoney,
                      tabContent: (
                        <span>
                          <p>
                            When it comes to selling your property, pricing is an art and not an equation. I will help you to assess the value of your home, based on comparable properties recently sold in your neighbourhood, market trends, and unique features and conditions of your home. I will then develop a comprehensive marketing package for your property, including professional photography and online reports. I will strategically handpick and refer buyers for your property.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Negotiation",
                      tabIcon: ThumbsUpDown,
                      tabContent: (
                        <span>
                          <p>
                            Negotiation is my expertise. I will ensure the deal is completed proficiently and all conditions and terms are in your favour while meeting the needs of the buyer(s).
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "After Sale",
                      tabIcon: Mood,
                      tabContent: (
                        <span>
                          <p>
                            After the sale of your property is closed, I will be in touch with you for any further assistance you may need. I will always be a phone call or email away to help you with any questions or concerns you may have.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div className={classes.title}>
                  <h3> Buying properties</h3>
                </div>
                <div className={classes.title}>
                  <h3>
                    <small>in 3 steps:</small>
                  </h3>
                </div>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Finding",
                      tabIcon: Search,
                      tabContent: (
                        <span>
                          <p>
                            If you are looking for a home, I understand that it is not just an address. It is a place where you and your family experience life, connection, and growth. I am here to help making the journey to your next chapter in life as smooth as possible.
                          </p>
                          <br />
                          <p>
                            If you are looking for an investment property, I have a wealth of knowledge which will help you to gain the highest return on your investment.
                          </p>
                          <br />
                          <p>
                            My goal is to ensure you have all the information you need to make well-educated choices and have a stress-free experience. I will guide you through all the details for a smooth transaction.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Negotiation",
                      tabIcon: ThumbsUpDown,
                      tabContent: (
                        <span>
                          <p>
                            Negotiation is my expertise. I will assist and manage your offers and counter-offers that best represent ​your​ interests. Once an agreement is reached between the seller(s) and you, my extensive real estate network and connections will help you through every step of the way.
                          </p>
                          <br />
                          <p>
                            Over the years, I have developed relationships with a large network of professionals who are experts in their fields, from qualified home inspectors, mortgage specialists, real estate lawyers, to cleaners and movers. These experts will ensure your transaction is completed as smooth as possible.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Follow Up",
                      tabIcon: Email,
                      tabContent: (
                        <span>
                          <p>
                            Negotiation is my expertise. I will assist and manage your offers and counter-offers that best represent ​your​ interests. Once an agreement is reached between the seller(s) and you, my extensive real estate network and connections will help you through every step of the way.
                          </p>
                          <br />
                          <p>
                            Over the years, I have developed relationships with a large network of professionals who are experts in their fields, from qualified home inspectors, mortgage specialists, real estate lawyers, to cleaners and movers. These experts will ensure your transaction is completed as smooth as possible.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
