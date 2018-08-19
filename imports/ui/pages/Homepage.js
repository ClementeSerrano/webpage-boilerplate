import React from "react";

import IntroSectionHomepage from "../containers/homepage/IntroSectionHomepage";
import AboutUsSectionHomepage from "../containers/homepage/AboutUsSectionHomepage";

const Homepage = () => (
  <div>
    <IntroSectionHomepage
      title="Awesome React & Meteor boilerplate"
      subtitle="Cool and fast to deploy website boilerplate to start your own
        website. It includes a navbar, front section, different types
        of content sections, a contact form and a footer."
    />
    <AboutUsSectionHomepage />
  </div>
);

export default Homepage;
