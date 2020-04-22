import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../queries";

interface Props {
  className: string;
}

const ProductsPage: React.FC<Props> = ({ className }) => {
  const products = fetchProducts();

  return (
    <Layout title="สินค้าทั้งหมด">
      <div className={className}>
        <h1>สินค้าทั้งหมด</h1>
        <div className="product-grid">
          {products.allContentfulProduct.edges.map((edge) => {
            const { code, slug, name, price, id, thumbnail } = edge.node;

            return (
              <ProductCard
                code={code}
                slug={slug}
                name={name}
                price={price}
                imagePath={thumbnail.file.url}
                key={id}
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
