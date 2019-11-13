import React from "react";
// plugin that creates slider
import nouislider from "nouislider";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import Badge from "components/Badge/Badge.jsx";
import HomeContent from "./HomeContent";
import AboutContent from "./AboutContent";

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import pagePic from "assets/img/pagepic.jpg";
import nameCardBlack from "assets/img/nameCardBlack.jpg"; 
import nameCardSplit from "assets/img/nameCardSplit.jpg";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  componentDidMount() {
    // nouislider.create(this.refs.slider1, {
    //   start: [40],
    //   connect: [true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 }
    // });
    // nouislider.create(this.refs.slider2, {
    //   start: [20, 60],
    //   connect: [false, true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 }
    // });
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    let content;
    let pic;

    if (this.props.page == "about") {
      content = <AboutContent />; // about
      pic = <div><img src={nameCardSplit} alt="..." style={{ width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%' }} /><img src={nameCardBlack} alt="..." style={{ width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%' }} /></div>;

    } else {
      content = <HomeContent />; // home
      pic = <img src={pagePic} alt="..." style={{ width: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%' }} />;
    }
    
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {content}
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              {pic}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
