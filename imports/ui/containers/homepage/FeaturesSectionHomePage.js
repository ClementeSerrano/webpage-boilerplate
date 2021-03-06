import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";

import Fade from "react-reveal/Fade";

class FeaturesSectionHomePage extends Component {
  render() {
    return (
      <SuperContainer backgroundcolor={this.props.backgroundcolor}>
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <Title titlecolor={this.props.titlecolor}>Features</Title>
              <SuperHr hrcolor={this.props.hrcolor} />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <ImageContainer>
                <Fade top>{this.props.icon1}</Fade>
              </ImageContainer>
              <Title2>
                <Fade bottom>{this.props.title1}</Fade>
              </Title2>
              <Paragraph>
                <Fade bottom>{this.props.paragraph1}</Fade>
              </Paragraph>
            </Col>
            <Col lg={4}>
              <ImageContainer>
                <Fade top>{this.props.icon2}</Fade>
              </ImageContainer>
              <Title2>
                <Fade bottom>{this.props.title2}</Fade>
              </Title2>
              <Paragraph>
                <Fade bottom>{this.props.paragraph2}</Fade>
              </Paragraph>
            </Col>
            <Col lg={4}>
              <ImageContainer>
                <Fade top>{this.props.icon3}</Fade>
              </ImageContainer>
              <Title2>
                <Fade bottom>{this.props.title3}</Fade>
              </Title2>
              <Paragraph>
                <Fade bottom>{this.props.paragraph3}</Fade>
              </Paragraph>
            </Col>
          </Row>
        </Grid>
      </SuperContainer>
    );
  }
}

export default FeaturesSectionHomePage;

const SuperContainer = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  padding: 150px 0;
  position: relative;
  text-align: center;
  background-color: ${props => props.backgroundcolor};
`;

const Title = styled.h2`
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

const ImageContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Title2 = styled.h2`
  font-family: "Libre Franklin", sans-serif;
  font-size: 25px;
  font-weight: 400;
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
  font-size: 18px;
  font-weight: 300;
  color: #666666;
  margin-top: 30px;
`;

const SuperHr = styled.hr`
  text-align: center;
  margin-top: 20px;
  border-width: 3px;
  border-color: ${props => props.hrcolor};
  margin-bottom: 60px;
  max-width: 100px;
`;
