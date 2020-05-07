import React from "react";
import styled from "styled-components";

import Layout from "./Layout";
import ProductCard from "./ProductCard";
import InternalLinkButton from "./InternalLinkButton";

interface Props {
  name: string;
  description: string;
  products: any[];
}

const CategoryLayout: React.FC<Props> = ({ name, description, products }) => {
  return (
    <Layout title="สินค้าทั้งหมด">
      <StyledProductsPage>
        <h1>{name}</h1>
        <div className="category-content">
          <div className="category-content__image"></div>
          <div className="category-content__description">
            <p>{description}</p>
          </div>
        </div>
        {products.length ? (
          <div className="product-grid">
            {products.map((edge) => {
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
        ) : (
          <p className="no-product-found">ไม่พบสินค้า</p>
        )}
        <div className="view-all-product-button">
          <InternalLinkButton label="ดูสินค้าทั้งหมด" targetPath="/products" />
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
    margin-bottom: 3rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }

  .category-content {
    margin-bottom: 7.5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__image {
      height: 300px;
      background: linear-gradient(
          0deg,
          rgba(22, 22, 22, 0.5),
          rgba(22, 22, 22, 0.5)
        ),
        url("/category1.jpg");
      background-size: cover;
    }

    &__description {
      background-color: ${({ theme }) => theme.colors.lightgrey1};
      padding: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .no-product-found {
    font-size: 2rem;
    text-align: center;
    margin: 0 0 5rem 0;
  }

  .view-all-product-button {
    text-align: center;
  }
`;

export default CategoryLayout;
