import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

interface Props {
  className: string;
}

const ProductsPage: React.FC<Props> = ({ className }) => {
  const productsData = useStaticQuery(graphql`
    query {
      allContentfulProduct(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            code
            name
            price
            publishedDate(formatString: "MMMM Do, YYYY")
            slug
            bestSeller
            thumbnail {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout title="สินค้าทั้งหมด">
      <div className={className}>
        <h1>สินค้าทั้งหมด</h1>
        <div className="product-grid">
          {productsData.allContentfulProduct.edges.map((edge) => {
            return (
              <ProductCard
                code={edge.node.code}
                slug={edge.node.slug}
                name={edge.node.name}
                price={edge.node.price}
                imagePath={edge.node.thumbnail.file.url}
                key={edge.node.id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

const StyledProductsPage = styled(ProductsPage)`
  max-width: 1200px;
  margin: auto;
  padding: 60px 60px;

  h1 {
    font-size: 32px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
`;

export default StyledProductsPage;
