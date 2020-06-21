import React from "react";
import styled from "styled-components";
import { Link } from "gatsby-plugin-intl";

import formatPrice from "../utils/formatPrice";

interface Props {
  code: string;
  name: string;
  imagePath: string;
  price: number;
  slug: string;
}

const ProductCard: React.FC<Props> = ({
  code,
  name,
  imagePath,
  price,
  slug,
}) => (
  <StyledProductCard>
    <Link to={`/product/${slug}`}>
      <img src={imagePath} alt="" />
      <div className="detail">
        <p className="detail__id">{code}</p>
        <h3 className="detail__name">{name}</h3>
        <p className="detail__price">{formatPrice(price)} บาท</p>
      </div>
    </Link>
  </StyledProductCard>
);

const StyledProductCard = styled.div`
  text-align: center;
  cursor: pointer;

  * {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  .detail {
    padding: 0 10px;

    > * {
      color: ${({ theme }) => theme.colors.black};
      margin: 0;
    }

    &__name {
      margin: 10px 0;
      font-weight: bold;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.black};
    }

    &__id {
      font-size: 1.6rem;
    }

    &__price {
      font-size: 1.8rem;
    }
  }

  &:hover {
    opacity: 0.75;
  }
`;

export default ProductCard;
