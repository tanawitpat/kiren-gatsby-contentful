import React from "react";
import styled from "styled-components";
import { useIntl } from "gatsby-plugin-intl";

interface Props {}

const Footer: React.FC<Props> = () => {
  const intl = useIntl();

  return (
    <StyledFooter>
      <div className="footer__layout">
        <div className="footer__column footer__summary">
          <h5 className="footer__title">
            {intl.formatMessage({ id: "footer.about.title" })}
          </h5>
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
          <h5 className="footer__title">
            {intl.formatMessage({ id: "footer.contact.title" })}
          </h5>
          <div>
            <p>Grillnovator Limited Partnership</p>
            <p>21/507 Moo 8, Om Yai, Sam Phran, Nakhon Pathom 73160 Thailand</p>
          </div>
          <div>
            <p>ห้างหุ้นส่วนจำกัด กริลโนเวเตอร์</p>
            <p>21/507 หมู่ 8, อ้อมใหญ่, สามพราน, นครปฐม 73160</p>
          </div>
          <div>
            <p>Tel: +66 6 3625 3593, +66 6 3629 5562</p>
            <p>Line ID: Chana507</p>
            <p>Email: info@grillnovator.com</p>
          </div>
        </div>
        <div className="footer__column">
          <h5 className="footer__title">
            {intl.formatMessage({ id: "footer.remark.title" })}
          </h5>
          <div>
            <p>
              {intl.formatMessage({ id: "footer.remark.developmentPurpose" })}
            </p>
            <p>{intl.formatMessage({ id: "footer.remark.developedBy" })}</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.darkgrey1};
  color: ${({ theme }) => theme.colors.white};

  .footer {
    &__layout {
      font-size: 1.6rem;
      margin: auto;
      max-width: 1200px;
      color: ${({ theme }) => theme.colors.white};

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

    &__title {
      font-size: 20px;
      text-align: center;
      margin: 0 0 20px;
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
      > div {
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
