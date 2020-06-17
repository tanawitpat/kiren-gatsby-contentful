import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-plugin-intl";

interface Props {
  title: string;
  targetPath: string;
}

const CategoryBox: React.FC<Props> = ({
  title = "Category",
  targetPath = "/",
}) => {
  return (
    <StyledCategoryBox to={`${targetPath}`}>
      <div className="container">
        <p>{title}</p>
      </div>
    </StyledCategoryBox>
  );
};

const StyledCategoryBox = styled(Link)`
  text-decoration: none !important;

  .container {
    height: 200px;
    background: linear-gradient(
        0deg,
        rgba(22, 22, 22, 0.5),
        rgba(22, 22, 22, 0.5)
      ),
      url("/category1.jpg");
    background-size: cover;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }
`;

const StyledContainer = styled.div``;

export default CategoryBox;
