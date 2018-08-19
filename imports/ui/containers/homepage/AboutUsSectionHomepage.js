import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class AboutUsSectionHomepage extends Component {
  render() {
    return (
      <section id="aboutUs">
        <SuperContainer>
          <Grid>
            <Fade left>
              <SuperHr />
              <Row>
                <Col lg={8}>
                  <Paragraph>
                    Nuestra misión es apoyarte en tus proyectos mediante
                    soluciones eléctricas, de seguridad y de arquitectura para
                    los sectores domiciliarios, comercial e industrial.
                  </Paragraph>
                  <Paragraph2>
                    Escuchamos tus necesidades, nos comprometemos con ellas y
                    trabajamos bajo los mas altos estándares de calidad y
                    seguridad para entregarte la solución que tú necesitas.
                  </Paragraph2>
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
  text-align: left;
  background-color: #161e24;
`;

const Paragraph = styled.p`
  font-family: "Libre Franklin", sans-serif;
  font-size: 25px;
  font-weight: 100;
  font-style: italic;
  color: #cccccc;
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Paragraph2 = styled.p`
  font-family: "Libre Franklin", sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #cccccc;
  @media screen and (max-width: 850px) {
    font-size: 40px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const SuperHr = styled.hr`
  margin-left: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 100px;
`;
