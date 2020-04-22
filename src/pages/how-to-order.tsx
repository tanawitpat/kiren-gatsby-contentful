import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";

interface Props {
  className: string;
}

const HowToOrder: React.FC<Props> = ({ className }) => {
  return (
    <Layout title="วิธีการสั่งซื้อสินค้า">
      <div className={className}>
        <h1>วิธีสั่งซื้อสินค้า</h1>
        <p>
          ในขณะนี้เรายังไม่เปิดให้บริการผ่านหน้าเว็บไซต์ หากต้องการสั่งซื้อ
          (หรือสอบถามข้อมูลเพิ่มเติม) โปรดติดต่อ
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
      </div>
    </Layout>
  );
};

const StyledHowToOrder = styled(HowToOrder)`
  margin: auto;
  max-width: 1200px;
  padding: 60px 60px;
  text-align: center;

  h1 {
    font-size: 32px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
  }

  p {
    font-size: 20px;
  }

  .contact {
    margin: 30px auto 0;
    max-width: 600px;

    > div {
      margin: 0 auto;
      max-width: 550px;
      font-size: 20px;

      display: grid;
      grid-template-columns: 200px 1fr;

      h4 {
        font-weight: normal;
        margin: 0;
      }

      p {
        text-align: left;
        margin: 0;
      }

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export default StyledHowToOrder;
