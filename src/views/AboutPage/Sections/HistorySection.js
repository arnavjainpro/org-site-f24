import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our History</h2>
          <h5 className={classes.description}>
            Jeff Bezos, the current CEO of Amazon, stated in May of 2016 that
            society is on the cusp of entering the golden age of artificial
            intelligence. That, over the next two decades, human society and AI
            will become intertwined in a way that would seem like science
            fiction today. That modern AI tools, such as Alexa, IBM Watson, and
            Google TensorFlow, only scratch the surface of what’s possible. A
            month after Mr. Bezos’ statement, the Artificial Intelligence
            Society (AIS) was born. In fact, our organization began under the
            general fascination of the impact that AI has already made on the
            world. Whether that be through Netflix’s movie recommendations or
            Facebook’s facial recognition software, it is incredible how
            ubiquitous AI has become in our daily lives. But as of today, many
            of the fascinating aspects of AI are largely unknown to the general
            public. We want to change that. From the nuts-and-bolts of AI, such
            as Bayesian logic in Markov assumptions, to the bigger picture, like
            how AlphaGo works on a general level, the AIS hopes to demystify
            this field. That is why we have placed educational outreach as one
            of our main priorities, with the goal of inspiring others to learn
            more about AI past the resources our organization provides.
            Regardless of age, occupation, or major, we believe that a simple
            appreciation of artificial intelligence will become necessary as
            this technology advances. We understand that much of what’s been
            discussed here seems complex and maybe even intimidating. However,
            if you stick with us throughout your time at UT Dallas, we promise
            to replace your fear with passion, and the complexity with
            simplicity. Welcome to the future.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
