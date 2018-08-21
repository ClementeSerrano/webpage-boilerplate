import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import IntroSectionHomepage from "../containers/homepage/IntroSectionHomepage";
import AboutUsSectionHomepage from "../containers/homepage/AboutUsSectionHomepage";
import FeaturesSectionHomePage from "../containers/homepage/FeaturesSectionHomePage";
import PortfolioSectionHome from "../containers/homepage/PortfolioSectionHome";

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
      title1="Customizable"
      title2="Full responsive"
      title3="Pretty design"
      paragraph1="Insert the content you want, whether text, images, colors, 
            typography, sizes, etc! This boilerplate gives you free choice to design 
            your website as you want"
      paragraph2="It does not matter if you see it from your computer, your tablet or 
            your smartphone, the structure of the website adapts to the screen size of 
            your device"
      paragraph3="Minimalist design equipped with more than 1,200 icons, 40 components 
            and all kinds of colors for your website"
    />
    <PortfolioSectionHome
      titlecolor="black"
      backgroundcolor="#fff"
      hrcolor="#39bda7"
    />
  </div>
);

export default Homepage;
