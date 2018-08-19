import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IntroSectionHomepage from "../containers/homepage/IntroSectionHomepage";
import AboutUsSectionHomepage from "../containers/homepage/AboutUsSectionHomepage";
import FeaturesSectionHomePage from "../containers/homepage/FeaturesSectionHomePage";

const Homepage = () => (
  <div>
    <IntroSectionHomepage
      title="Awesome React & Meteor boilerplate"
      subtitle="Cool and fast to deploy website boilerplate to start your own
        website. It includes a navbar, front section, different types
        of content sections, a contact form and a footer."
    />
    <AboutUsSectionHomepage
      text="This small project has the mission to support you in your
            ideas and projects through a quick and easy to integrate
            boilerplate for your website. Customize it as you want,
            adding texts, colors, icons, buttons and many amazing
            components!"
      titlecolor="black"
      paragraphcolor="#737373"
      backgroundcolor="#fff"
      hrcolor="#39bda7"
    />
    <FeaturesSectionHomePage
      titlecolor="black"
      backgroundcolor="#fafafa"
      hrcolor="#39bda7"
      icon1={<FontAwesomeIcon icon="edit" size="6x" color="#39bda7" />}
      icon2={<FontAwesomeIcon icon="mobile-alt" size="6x" color="#39bda7" />}
      icon3={<FontAwesomeIcon icon="dove" size="6x" color="#39bda7" />}
      paragraph1="Completly customazle"
      paragraph2="Full responsive"
      paragraph3="Pretty design"
    />
  </div>
);

export default Homepage;
