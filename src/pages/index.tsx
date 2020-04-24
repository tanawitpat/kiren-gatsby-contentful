import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import FeatureCard from "../components/FeatureCard";
import ProductCard from "../components/ProductCard";
import { fetchBestSellerProducts } from "../queries";

interface Props {}

const IndexPage: React.FC<Props> = () => {
  const bestSellerProducts = fetchBestSellerProducts();

  return (
    <Layout>
      <StyledIndexPage>
        <div className="carousel">
          <div className="carousel__cover">
            <div className="carousel__description">
              <p>สร้างสรรค์โดยทีม@กริลโนเวเตอร์ Grillnavator</p>
              <h1>คิเร็น Kiren</h1>
              <p>เตาย่างแก๊ส/ไฟฟ้า/ถ่าน แผ่นย่างหมูกระทะ ชีส ชาบู</p>
              <p>คุณภาพระดับธุรกิจเพื่อความราบรื่นของชีวิตคุณ</p>
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
        <div className="best-seller">
          <h1>
            <span>สินค้าขายดี</span>
          </h1>
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
          <Link to="/products">
            <button className="best-seller__view-all-button">
              ดูสินค้าทั้งหมด
            </button>
          </Link>
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
  }

  .best-seller {
    max-width: 1200px;
    margin: 0 auto 80px;
    text-align: center;

    h1 {
      border-bottom: 1.5px solid ${({ theme }) => theme.colors.primary};
      line-height: 0.1em;
      margin: 0 0 60px 0;

      span {
        background: #fff;
        padding: 0 30px;
      }
    }

    &__products {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }

    &__view-all-button {
      margin-top: 30px;
      font-size: 18px;
      padding: 15px 20px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme: { colors } }) => colors.white};

      border: none;
      transition: all 0.2s;

      :hover {
        background-color: #0a4463;
        cursor: pointer;
      }
    }
  }
`;

export default IndexPage;
