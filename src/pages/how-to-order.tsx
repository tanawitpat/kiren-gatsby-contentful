import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { device } from "../styles/device";

interface Props {}

const HowToOrderPage: React.FC<Props> = () => {
  return (
    <Layout title="วิธีการสั่งซื้อสินค้า">
      <StyledHowToOrderPage>
        <h1>วิธีสั่งซื้อสินค้า</h1>
        <p className="description">
          ไปยังหน้าสินค้าชิ้นที่ต้องการ หากสินค้าชิ้นนั้นสามารถซื้อผ่าน Lazada
          หรือ Shopee ได้
          ลูกค้าจะพบปุ่มเพื่อนำลูกค้าไปยังหน้าสินค้าบนแพลตฟอร์มเหล่านั้น
          กรณีที่สินค้าชิ้นดังกล่าวไม่วางจำหน่ายบนแพลตฟอร์มดังกล่าว
          กรุณาติดต่อทางร้านผ่านช่องทางการติดต่อด้านล่างเพื่อทำการสั่งซื้้อกับทางร้านโดยตรง
        </p>
        <div className="contact">
          <div>
            <h4>อีเมล</h4>
            <p>chana.p@grillnovator.com</p>
          </div>
          <div>
            <h4>เบอร์โทรศัพท์</h4>
            <p>+66 6 3625 3593, +66 6 3629 5562</p>
          </div>
          <div>
            <h4>Line ID</h4>
            <p>chana507</p>
          </div>
        </div>
      </StyledHowToOrderPage>
    </Layout>
  );
};

const StyledHowToOrderPage = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 60px;
  text-align: center;

  @media ${device.tabLarge} {
    padding: 60px 20px;
  }

  h1 {
    font-size: 3.2rem;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
  }

  p {
    font-size: 2rem;
  }

  .description {
    max-width: 800px;
    margin: auto;
  }

  .contact {
    margin: 30px auto 0;
    max-width: 600px;

    > div {
      margin: 0 auto;
      max-width: 550px;
      font-size: 2rem;

      display: grid;
      grid-template-columns: 200px 1fr;

      @media ${device.tabMedium} {
        grid-template-columns: 1fr;
      }

      h4 {
        font-weight: normal;
        margin: 0;

        @media ${device.tabMedium} {
          margin-bottom: 5px;
        }
      }

      p {
        text-align: left;
        margin: 0;

        @media ${device.tabMedium} {
          text-align: center;
        }
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export default HowToOrderPage;
