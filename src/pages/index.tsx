import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";
import FeatureCard from "../components/FeatureCard";
import ProductCard from "../components/ProductCard";
import CategoryBox from "../components/CategoryBox";
import InternalLinkButton from "../components/InternalLinkButton";
import { device } from "../styles/device";
import { fetchBestSellerProducts } from "../queries";

interface Props {}

const IndexPage: React.FC<Props> = () => {
  const intl = useIntl();
  const bestSellerProducts = fetchBestSellerProducts();

  return (
    <Layout>
      <StyledIndexPage>
        <div className="carousel">
          <div className="carousel__cover">
            <div className="carousel__description">
              <p>{intl.formatMessage({ id: "homepage.landingMessageOne" })}</p>
              <h1>คิเร็น Kiren</h1>
              <p>{intl.formatMessage({ id: "homepage.landingMessageTwo" })}</p>
              <p>
                {intl.formatMessage({ id: "homepage.landingMessageThree" })}
              </p>
            </div>
          </div>
        </div>
        <div className="feature">
          <FeatureCard
            title="ตอบสนองทุกความต้องการของคุณ"
            description="เราจะเติมเต็มทุกความต้องการที่ยิบย่อยที่สุดของคุณทั้งในธุรกิจ และการใช้ในครัวเรือนด้วยผลิตภัณฑ์อันหลากหลายของเรา"
          />
          <FeatureCard
            title="รับประกันขั้นต่ำ 6 เดือน"
            description="คู่ค้าครั้งเดียว พันธมิตรตลอดไป ผู้เชี่ยวชาญด้านอุปกรณ์และระบบร้านปิ้งย่างจากกริลโนเวเตอร์ (Grillnovator) พร้อมที่จะให้คำปรึกษา และการบริการหลังการขายตราบเท่าที่ร้านอาหารของคุณยังใช้ผลิตภัณฑ์ของเรา"
          />
          <FeatureCard
            title="บริการให้คำปรึกษาตลอดอายุการใช้งาน"
            description="เรายึดมั่นในคุณภาพ สินค้าทุกชิ้นของเรามาพร้อมกับการรับประกันขั้นต่ำ 6 เดือน (และระยะเวลารับประกันที่เพิ่มขึ้นตามแต่ชนิด และรุ่นของสินค้า)"
          />
        </div>
        <div className="category">
          <h2 className="section-title">
            <span>{intl.formatMessage({ id: "homepage.category" })}</span>
          </h2>
          <div className="category__items">
            <CategoryBox
              title="ชุดเตาย่าง"
              targetPath="/category/bbq-stove-set"
            />
            <CategoryBox title="แผ่นย่าง" targetPath="/category/bbq-plate" />
            <CategoryBox title="เครื่องดูดควัน" targetPath="/category/hood" />
          </div>
        </div>
        <div className="best-seller">
          <h2 className="section-title">
            <span>{intl.formatMessage({ id: "homepage.bestSeller" })}</span>
          </h2>
          <div className="best-seller__products">
            {bestSellerProducts.allContentfulProduct.edges.map((edge) => {
              const { code, slug, name, price, thumbnail, id } = edge.node;

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
          <div className="view-all-product-button">
            <InternalLinkButton
              label={intl.formatMessage({ id: "homepage.allProducts" })}
              targetPath="/products"
            />
          </div>
        </div>
      </StyledIndexPage>
    </Layout>
  );
};

const StyledIndexPage = styled.div`
  .carousel {
    height: 600px;
    background-size: cover;
    background-position: right top;
    background-image: url(/carousel.jpg);

    display: flex;
    align-items: center;
    justify-content: center;

    &__cover {
      width: 100%;
      height: 70%;
      background-color: rgba(255, 255, 255, 0.7);

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__description {
      text-align: center;
      color: ${({ theme }) => theme.colors.darkgrey2};

      h1 {
        font-size: 6rem;
        line-height: 70%;
      }

      p {
        font-size: 2.8rem;
        line-height: 70%;
      }

      @media ${device.tabMedium} {
        padding: 0 2rem;

        p {
          line-height: 1.2;
        }
      }
    }
  }

  .feature {
    max-width: 1200px;
    margin: auto;
    padding: 60px 0;
    margin-bottom: 20px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media ${device.tabLarge} {
      grid-template-columns: repeat(1, 1fr);
      padding: 60px 30px;
    }
  }

  .section-title {
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary};
    line-height: 1px;
    margin: 0 0 60px 0;
    font-size: 3.2rem;

    span {
      background: #fff;
      padding: 0 30px;
    }
  }

  .best-seller {
    max-width: 1200px;
    margin: 0 auto 80px;
    text-align: center;

    @media ${device.tabLarge} {
      margin: 0 auto 60px;
    }

    &__products {
      margin-bottom: 30px;

      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;

      @media ${device.tabLarge} {
        grid-template-columns: repeat(3, 1fr);
        padding: 30px 20px;
      }

      @media ${device.tabMedium} {
        grid-template-columns: repeat(2, 1fr);
      }

      @media ${device.tabSmall} {
        padding: 10px;
      }
    }
  }

  .category {
    max-width: 1200px;
    margin: 0 auto 80px;
    text-align: center;

    &__items {
      padding: 0 10px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;

      @media ${device.tabMedium} {
        padding: 0;
        grid-template-columns: repeat(1, 1fr);
        margin: 0 20px;
      }
    }
  }
`;

export default IndexPage;
