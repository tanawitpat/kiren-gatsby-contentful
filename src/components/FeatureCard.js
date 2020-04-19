import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFeatureCard = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;

  h4 {
    font-size: 1.2rem;
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }
`;

const FeatureCard = ({ title, description }) => (
  <StyledFeatureCard>
    <img src="/star-icon.png" alt="" />
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </StyledFeatureCard>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
