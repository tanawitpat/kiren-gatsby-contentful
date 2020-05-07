import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  targetPath: string;
}

export const Button: React.FC<Props> = ({ label, targetPath }) => {
  return (
    <a href={targetPath}>
      <StyledButton>{label}</StyledButton>
    </a>
  );
};

const StyledButton = styled.button`
  font-size: 18px;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  width: fit-content;
  border-radius: 1rem;
  border: none;
  transition: all 0.2s;

  :hover {
    background-color: #0a4463;
    cursor: pointer;
  }
`;

export default Button;
