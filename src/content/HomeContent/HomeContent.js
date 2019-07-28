import React, { Component } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";

import CodeIcon from "@material-ui/icons/Code";
import HomeIcon from "@material-ui/icons/Home";

import GitHubCircleIcon from "mdi-material-ui/GithubCircle";
import StepperContent from "../StepperContent/StepperContent";
import EmptyState from "../../layout/EmptyState/EmptyState";
// import StepperContent from "../StepperContent/StepperContent"
// import StepperContent from "../StepperContent/StepperContent.js";
const styles = theme => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
});

class HomeContent extends Component {
  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const { isSignedIn, title } = this.props;

    if (isSignedIn) {
      return (
        <EmptyState
          icon={<HomeIcon className={classes.emptyStateIcon} color="action" />}
          title="Dangerous Devices"
          description="Beware of dangerous devices!!"
          button={
            <Fab
              className={classes.button}
              color="secondary"
              component={Link}
              to="/some-magic"
              variant="extended"
            >
              Click For Some Magic
            </Fab>
          }
        />
      );
    }

    return (
      <StepperContent />
      // <StepperContent />
      // <EmptyState
      //   // icon={<CodeIcon className={classes.emptyStateIcon} color="action" />}
      //   title={title}
      //   description="The three musketeers, all in one pack in the form of a boilerplate app"
      //   button={
      //     <Fab
      //       className={classes.button}
      //       color="secondary"
      //       href="https://github.com/Phoqe/react-material-ui-firebase"
      //       rel="noopener noreferrer"
      //       target="_blank"
      //       variant="extended"
      //     >
      //       <GitHubCircleIcon className={classes.buttonIcon} />
      //       GitHub
      //     </Fab>
      //   }
      // />
    );
  }
}

HomeContent.propTypes = {
  classes: PropTypes.object.isRequired,

  isSignedIn: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(HomeContent);
