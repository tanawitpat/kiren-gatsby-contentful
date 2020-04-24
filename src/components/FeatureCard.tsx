import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
}

const FeatureCard: React.FC<Props> = ({ title, description }) => (
  <StyledFeatureCard>
    <img src="/star-icon.png" alt="" />
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </StyledFeatureCard>
);

const StyledFeatureCard = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;

  h4 {
    font-size: 1.8rem;
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }
`;

export default FeatureCard;
