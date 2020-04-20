import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import formatPrice from "../utils/formatPrice";

interface Props {
  id: string;
  name: string;
  imagePath: string;
  price: number;
}

const ProductCard: React.FC<Props> = ({ id, name, imagePath, price }) => (
  <StyledProductCard>
    <Link to={`/product/${id}`}>
      <img src={imagePath} alt="" />
      <div className="detail">
        <p className="detail__id">{id}</p>
        <h3 className="detail__name">{name}</h3>
        <p className="detail__price">{formatPrice(price)} THB</p>
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
    &__name {
      margin: 0.3rem 0;
      font-weight: 600;
      color: black;
    }

    &__id,
    &__price {
      margin: 0;
      color: black;
    }
  }

  :hover {
    opacity: 0.75;
  }
`;

export default ProductCard;
