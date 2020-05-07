import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import CategoryBox from "../components/CategoryBox";
import { fetchProducts } from "../queries";

interface Props {}

const ProductsPage: React.FC<Props> = () => {
  const products = fetchProducts();

  return (
    <Layout title="สินค้าทั้งหมด">
      <StyledProductsPage>
        <h1>สินค้าทั้งหมด</h1>
        <div className="category">
          <div className="category__items">
            <CategoryBox
              title="ชุดเตาย่าง"
              targetPath="/category/bbq-stove-set"
            />
            <CategoryBox title="แผ่นย่าง" targetPath="/category/bbq-plate" />
            <CategoryBox title="เครื่องดูดควัน" targetPath="/category/hood" />
          </div>
        </div>
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
      </StyledProductsPage>
    </Layout>
  );
};

const StyledProductsPage = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 60px 60px;

  h1 {
    font-size: 3.2rem;
    text-align: center;
    margin-top: 0;
    margin-bottom: 50px;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }

  .category {
    margin: 0 auto 5rem;

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }
  }
`;

export default ProductsPage;
