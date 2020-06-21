import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import { device } from "../styles/device";

interface Props {}

const ContactPage: React.FC<Props> = () => {
  return (
    <Layout title="ติดต่อเรา">
      <StyledContactPage>
        <h1>ติดต่อเรา</h1>
        <div className="layout">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.53167638183!2d100.36894211347247!3d13.746779901116694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2968b5c0f7e1d%3A0xbe6bc45a00758b79!2zNC04OCDguJbguJnguJnguJrguLLguIfguYHguKfguIEg4LmB4LiC4Lin4LiHIOC4muC4suC4h-C5hOC4nOC5iCDguYDguILguJUg4Lia4Liy4LiH4LmB4LiEIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDE2MA!5e0!3m2!1sth!2sth!4v1557669124866!5m2!1sth!2sth"
              frameBorder="0"
              title="Kiren's location"
              allowFullScreen
            />
          </div>
          <div className="address">
            <h4>ห้างหุ้นส่วนจำกัด กริลโนเวเตอร์</h4>
            <div className="address__container">
              <div>
                <h4>ที่อยู่</h4>
                <p>21/507 หมู่ 8, อ้อมใหญ่, สามพราน, นครปฐม 73160</p>
              </div>
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
        </div>
      </StyledContactPage>
    </Layout>
  );
};

const StyledContactPage = styled.div`
  padding: 60px 60px;
  max-width: 1200px;
  margin: auto;

  @media ${device.tabLarge} {
    padding: 60px 20px;
  }

  h1 {
    text-align: center;
    font-size: 3.2rem;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .layout {
    display: grid;
    grid-gap: 100px;
    grid-template-columns: repeat(2, 1fr);

    @media ${device.tabLarge} {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  }

  .google-map {
    position: relative;
    height: 400px;

    iframe {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .address {
    font-size: 2rem;

    h4 {
      font-size: 2rem;

      @media ${device.tabLarge} {
        text-align: center;
      }
    }

    &__container {
      margin: 30px auto 0;
      max-width: 600px;

      > div {
        margin: 0 auto;
        max-width: 550px;

        display: grid;
        grid-template-columns: 150px 1fr;

        @media ${device.tabMedium} {
          grid-template-columns: 1fr;
        }

        h4 {
          font-weight: normal;
          margin: 0;
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
  }
`;

export default ContactPage;
