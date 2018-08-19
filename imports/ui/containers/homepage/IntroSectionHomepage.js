import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import ScrollButton from "../../components/ScrollButton";
import BackgroundImg from "../../assets/homepage/background_homepage.jpg";

class IntroSectionHomepage extends Component {
  render() {
    return (
      <section id="intro">
        <SuperContainer>
          <Grid bsClass="container">
            <FrontContent>
              <Row className="show-grid">
                <Col lg={8} lgOffset={2}>
                  <Title>
                    <Fade left cascade>
                      {this.props.title}
                    </Fade>
                  </Title>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col lg={6} lgOffset={3}>
                  <Paragraph>
                    <Fade left cascade>
                      {this.props.subtitle}
                    </Fade>
                  </Paragraph>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col lg={12}>
                  <Fade up>
                    <ScrollButton
                      linkto="#aboutUs"
                      content="Get in touch!"
                      backgroundcolor="Transparent"
                      color="#fff"
                      hovercolor="#39bda7"
                    />
                  </Fade>
                </Col>
              </Row>
            </FrontContent>
          </Grid>
        </SuperContainer>
      </section>
    );
  }
}

export default IntroSectionHomepage;

const SuperContainer = styled.header`
  padding-top: 10rem;
  padding-bottom: calc(10rem - 56px);
  background-image: url(${BackgroundImg});
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const FrontContent = styled.div`
  text-align: center;
  margin-bottom: 200px;
  padding-top: 10%;
`;

const Title = styled.p`
  font-family: "Libre Franklin", sans-serif;
  font-size: 40px;
  color: #fff;
  @media screen and (max-width: 850px) {
    font-size: 70px;
  }
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 850px) {
    font-size: 60px;
  }
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;
