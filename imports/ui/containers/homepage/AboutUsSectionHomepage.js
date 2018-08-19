import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class AboutUsSectionHomepage extends Component {
  render() {
    return (
      <section id="aboutUs">
        <SuperContainer backgroundcolor={this.props.backgroundcolor}>
          <Grid>
            <Fade left>
              <Row>
                <Col lg={6} lgOffset={3}>
                  <Title titlecolor={this.props.titlecolor}>About us</Title>
                  <SuperHr hrcolor={this.props.hrcolor} />
                  <Paragraph paragraphcolor={this.props.paragraphcolor}>
                    {this.props.text}
                  </Paragraph>
                </Col>
              </Row>
            </Fade>
          </Grid>
        </SuperContainer>
      </section>
    );
  }
}

export default AboutUsSectionHomepage;

const SuperContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  padding: 150px 0;
  position: relative;
  text-align: center;
  background-color: ${props => props.backgroundcolor};
`;

const Title = styled.p`
  font-family: "Libre Franklin", sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: ${props => props.titlecolor};
  margin-bottom: 30px;
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-family: "Libre Franklin", sans-serif;
  font-size: 25px;
  font-weight: 100;
  line-height: 1.6;
  color: ${props => props.paragraphcolor};
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const SuperHr = styled.hr`
  text-align: center;
  margin-top: 20px;
  border-width: 3px;
  border-color: ${props => props.hrcolor};
  margin-bottom: 30px;
  max-width: 100px;
`;
