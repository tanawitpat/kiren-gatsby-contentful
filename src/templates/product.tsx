import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout";
import formatPrice from "../utils/formatPrice";

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      code
      name
      price
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      thumbnail {
        file {
          url
        }
      }
    }
  }
`;

const Product = (props) => {
  const options = {};
  const {
    name,
    code,
    price,
    publishedDate,
    body,
  } = props.data.contentfulProduct;

  return (
    <Layout>
      <StyledProduct>
        <div className="product">
          <div className="product__image">
            <img src={props.data.contentfulProduct.thumbnail.file.url} alt="" />
          </div>
          <div className="product__detail">
            <h1 className="product__detail--title">
              {code} {name}
            </h1>
            <p className="product__detail--price">{formatPrice(price)} บาท</p>
            <hr />
            <div className="product__detail--description">
              {documentToReactComponents(body.json, options)}
            </div>
          </div>
        </div>
      </StyledProduct>
    </Layout>
  );
};

const StyledProduct = styled.div`
  max-width: 1200px;
  margin: auto;

  .product {
    padding: 50px 20px;
    margin-bottom: 20px;

    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 50px;

    &__image {
      width: 400px;
      height: 400px;

      img {
        width: 100%;
      }
    }

    &__detail {
      padding: 0 20px;

      &--title {
        margin: 0 0 10px 0;
        font-size: 32px;
        font-weight: normal;
      }

      &--price {
        margin: 0 0 5px 0;
        font-size: 20px;
      }

      &--description {
        font-size: 18px;
      }

      hr {
        margin: 25px 0;
        border: 0.5px solid black;
      }
    }
  }

  .related-product {
    text-align: center;
    width: 80%;
    margin: 0 auto 60px;

    h2 {
      border-bottom: 1.5px solid rgb(14, 95, 138);
      line-height: 0.1em;
      margin: 0 0 50px 0;

      span {
        background: #fff;
        padding: 0 30px;
      }
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }
  }
`;

export default Product;
