import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout";
import formatPrice from "../utils/formatPrice";
import ExternalLinkButton from "../components/ExternalLinkButton";

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
      lazadaPath {
        lazadaPath
      }
      shopeePath {
        shopeePath
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
  const contentfulProduct = props.data.contentfulProduct;

  const { name, code, price, body } = contentfulProduct;
  const thumbnail = contentfulProduct.thumbnail.file.url;
  const lazadaPath = contentfulProduct?.lazadaPath?.lazadaPath || "";
  const shopeePath = contentfulProduct?.shopeePath?.shopeePath || "";

  return (
    <Layout>
      <StyledProduct>
        <div className="product">
          <div className="product-image">
            <img src={thumbnail} alt="" />
          </div>
          <div className="product-detail">
            <h1 className="product-detail--title">
              {code} {name}
            </h1>
            <p className="product-detail--price">{formatPrice(price)} บาท</p>
            <hr />
            <div className="product-detail--description">
              {documentToReactComponents(body.json, options)}
            </div>
            {lazadaPath || shopeePath ? (
              <div className="how-to-buy">
                <p>สั่งซื้อผ่าน</p>
                <div className="how-to-buy__button">
                  {lazadaPath && (
                    <ExternalLinkButton
                      label="Lazada"
                      targetPath={lazadaPath}
                    />
                  )}
                  {shopeePath && (
                    <ExternalLinkButton
                      label="Shopee"
                      targetPath={shopeePath}
                    />
                  )}
                </div>
              </div>
            ) : (
              <p>
                **เนื่องจากสินค้าชิ้นนี้ไม่วางจำหน่ายทางช่องทางออนไลน์
                กรุณาติดต่อบริษัทโดยตรงเพื่อทำการสั่งซื้อ
              </p>
            )}
          </div>
        </div>
        <div className="policy">
          <div className="policy-block">
            <h3>นโยบายการเปลี่ยนหรือคืนสินค้า</h3>
            <div className="policy-block__child">
              <ul>
                <li>
                  รับประกัน 1 ปีสำหรับการใช้งานในธุรกิจ และรับประกัน 3
                  ปีสำหรับการใช้งานส่วนตัว
                </li>
                <li>
                  รับประกันเฉพาะส่วนทีเกิดจากความผิดพลาดทางเทคนิคจากทางร้านเท่านั้น
                  ไม่รวมรอยขูดขีดที่เกิดจากการใช้งาน
                </li>
                <li>
                  ไม่รับคืนสินค้า ยินดีเปลี่ยนสินค้าเป็นตัวใหม่รุ่นเดิมได้
                  หากสินค้ามีตำหนิจากทางร้าน
                </li>
              </ul>
            </div>
          </div>
          <div className="policy-block">
            <h3>การจัดส่ง</h3>
            <div className="policy-block__child">
              <div>
                <h4>ระยะเวลาจัดเตรียมสินค้า</h4>
                <p>ภายใน 2 วัน หลังตรวจสอบยอดเงินเรียบร้อยแล้ว</p>
              </div>
              <div>
                <h4>ค่าจัดส่ง</h4>
                <p>
                  กรณีสั่งซื้อผ่านทาง Lazada หรือ Shopee
                  กรุณาตรวจสอบค่าจัดส่งผ่านทางช่องทางดังกล่าว
                </p>
              </div>
            </div>
          </div>
          <div className="policy-block">
            <h3>สำหรับร้านค้า</h3>
            <div className="policy-block__child">
              <h4>กรณีผู้ซื้อต้องการซื้อสินค้าเพื่อใช้ในร้านอาหาร</h4>
              <p>
                กรุณาติดต่อทางบริษัทเพื่อรับคำแนะนำและตรวจสอบความเข้ากันได้ของสินค้า
              </p>
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
    padding: 5rem 2rem 0;
    margin-bottom: 5rem;

    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: 50px;
  }

  .product-image {
    width: 400px;
    height: 400px;

    img {
      width: 100%;
    }
  }

  .product-detail {
    padding: 0 20px;

    &--title {
      margin: 0 0 10px 0;
      font-size: 32px;
      font-weight: normal;
    }

    &--price {
      margin: 0 0 5px 0;
      font-size: 2rem;
    }

    &--description {
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }

    hr {
      margin: 25px 0;
      border: 0.5px solid black;
    }
  }

  .how-to-buy {
    display: flex;
    align-items: center;

    p {
      font-size: 1.8rem;
      margin-right: 2rem;
    }

    &__button {
      display: flex;

      > * {
        &:not(:last-child) {
          margin-right: 1rem;
        }
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

  .policy {
    background-color: ${({ theme }) => theme.colors.lightgrey1};
    margin-bottom: 7.5rem;
    padding: 5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 7.5rem;
  }

  .policy-block {
    h3 {
      text-align: center;
      margin-bottom: 2rem;
    }

    h4 {
      margin-bottom: 0.5rem;
    }

    * {
      margin: 0;
    }

    &__child {
      > ul {
        padding-left: 2rem;
      }

      > ul > li {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }

      p {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
      }

      > div {
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;

export default Product;
