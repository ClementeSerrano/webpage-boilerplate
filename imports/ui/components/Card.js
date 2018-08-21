import React, { Component } from "react";
import styled from "styled-components";

class Card extends Component {
  render() {
    return (
      <CardContainer>
        <TitleContainer>
          <Title>Hi</Title>
          <SuperHr />
          <IntoContainer>Awesome card content! Totally styled</IntoContainer>
        </TitleContainer>
        <CardInfo>
          Card content. Type whatever you want and it will be displayed. Really
          awesome or not!!!
        </CardInfo>
        <ColorOverlay />
        <GradientOverlay />
      </CardContainer>
    );
  }
}

export default Card;

const CardInfo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  left: 0;
  margin: 0 auto;
  padding: 0 50px;
  color: #dce3e7;
  font-style: 16px;
  line-height: 24px;
  z-index: 20;
  opacity: 0;
  transition: bottom 0.3s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
`;

const ColorOverlay = styled.div`
  background: rgba(84, 104, 110, 0.4);
  width: 350px;
  height: 500px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  transition: background 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
`;

const CardContainer = styled.div`
  width: 350px;
  height: 500px;
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg)
    no-repeat;
  &:hover ${CardInfo} {
    opacity: 1;
    bottom: 120px;
  }
  &:hover ${ColorOverlay} {
    background: rgba(84, 104, 110, 0.8);
  }
`;

const GradientOverlay = styled.div`
  background-image: -webkit-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  background-image: -moz-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  background-image: -o-linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 21%
  );
  width: 350px;
  height: 500px;
  position: absolute;
  top: 350px;
  left: 0;
  z-index: 15;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 70px 0 0 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #fff;
  margin-bottom: 0;
`;

const SuperHr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #39bda7;
`;

const IntoContainer = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-size: 13px;
  line-height: 18px;
`;
