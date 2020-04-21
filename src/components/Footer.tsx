import React from "react";
import styled from "styled-components";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <StyledFooter>
      <div className="footer__layout">
        <div className="footer__column footer__summary">
          <p>
            Grillnovator is a professional BBQ business consultant, manufacturer
            and distributor of BBQ equipment under Kiren ® Brand. With more than
            10 years experience in the industry, we are ready to provide BBQ
            restaurant entrepreneurs with business grade equipment, designed
            with consideration to conditions of restaurant operation and
            end-user experience, in addition to industry insights.
          </p>
        </div>
        <div className="footer__column footer__contact">
          <div className="footer__contact--address-th">
            <p>Grillnovator Limited Partnership</p>
            <p>21/507 Moo 8, Om Yai, Sam Phran, Nakhon Pathom 73160 Thailand</p>
          </div>
          <div className="footer__contact--address-en">
            <p>ห้างหุ้นส่วนจำกัด กริลโนเวเตอร์</p>
            <p>21/507 หมู่ 8, อ้อมใหญ่, สามพราน, นครปฐม 73160</p>
          </div>
          <div className="footer__contact--address">
            <p>Tel: +66 6 3625 3593, +66 6 3629 5562</p>
            <p>Line ID: Chana507</p>
            <p>Email: info@grillnovator.com</p>
          </div>
        </div>
        <div className="footer__column" />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: #333333;

  .footer {
    &__layout {
      margin: auto;
      max-width: 1200px;
      color: #fff;

      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 50px;

      h3 {
        text-transform: uppercase;
        text-align: center;
      }

      hr {
        margin: 15px 0;
        background-color: #d8d8d8;
        height: 1px;
        border: 0;
      }
    }

    &__column {
      padding: 50px 15px;
    }

    &__summary {
      p {
        margin: 0;
      }
    }

    &__contact {
      > * {
        &:not(:last-child) {
          margin-bottom: 25px;
        }

        p {
          margin: 0;

          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;

export default Footer;
