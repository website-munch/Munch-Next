import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>MUNCH</title>
          <meta
            name="description"
            content="Model United Nations at Cheadle Hulme"
          />
          <meta property="og:title" content="MUNCH" />
          <meta
            property="og:description"
            content="Model United Nations at Cheadle Hulme"
          />
        </Head>
        <div className="home-body">
          <Header rootClassName="header-root-class-name"></Header>
          <div className="home-text">
            <div className="home-feature-card">
              <span className="home-text01">
                <span>We are looking forward to having you at MUNCH 24. </span>
                <span>
                  It will take place on Saturday 5th - Sunday 6th October.
                </span>
                <br></br>
                <br></br>
                <span>We will send out formal invitations in mid-March. </span>
                <span>
                  Please
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="mailto:munch@chschool.co.uk?subject=MUNCH 24 New School"
                  className="home-link"
                >
                  contact us
                </a>
                <span> if you have not been before.</span>
                <br></br>
                <br></br>
                <span>
                  Since 2001, Cheadle Hulme School has been proud to host an
                  annual MUN conference and we hope that you will enjoy our 24th
                  conference.
                </span>
                <br></br>
                <br></br>
                <span>
                  Model United Nations is one of the few opportunities for truly
                  independent study and for students to gain vital skills for
                  their future. Students learn about countries around the world,
                  acquire the ability to state an idea clearly and build
                  consensus to find solutions to the global problems that will
                  affect them in later life.
                </span>
                <br></br>
                <br></br>
                <span>
                  In addition to this, MUNCH provides the opportunity to meet
                  people from all over the UK and Europe in a very welcoming
                  environment with a very high standard of debate and
                  opportunities for delegates of all levels of experience.
                </span>
                <br></br>
                <br></br>
                <span>
                  The Secretary General for this conference will be Sam Barnett
                  and on behalf of everyone here at Cheadle Hulme School, we
                  wish you happy and fruitful debating!
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-feature-card1">
              <span className="home-text22">
                <span>MUNCH 24 Timeline</span>
                <br></br>
                <br></br>
                <span>March - Formal invitations sent out</span>
                <br></br>
                <span>May - Country allocations sent out</span>
                <br></br>
                <span>June - Guest chair application deadline</span>
                <br></br>
                <span>July - Briefing papers published</span>
                <br></br>
                <span>September - Forms B + C deadline</span>
                <br></br>
                <span>3rd October - Resolutions deadline</span>
                <br></br>
                <span>5th-6th October - MUNCH 24 in session</span>
              </span>
            </div>
          </div>
          <div className="home-images1">
            <div className="home-container01">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV849pMW8H-Z2vFsDO8yrw5mkHC1yi6036H3_7IWkgNDyAOESgSlnIFWde0d4eX6R0lQj5KXQb9FTBtGY_O3EjE9x3gaHuiNgkvki5Zf6HoezIiT2_w=w2400"
                className="home-image"
              />
            </div>
            <div className="home-container02">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87Czn-mzI-5Q1azILW5OuOeXFAa67D8a_93YoIRxuAfmgAtDNm7MDAcofQdfbKi41TngKJeIXpZvH_IlDA4uDhHgwTICYtj_RjTZS3dxjtwEv5n0QY=w2400"
                className="home-image01"
              />
            </div>
            <div className="home-container03">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87nCemk_KlYQvRO0HAzoSr_T7Cq3JecFDD8RXz2ORPiUSvAvxY-RZ83caHgmSzCsGisAaQDRUiyDjLyped4mCxk72L1viISzkOl7YtwnIj08b-gISU=w2400"
                className="home-image02"
              />
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV86CiE8HYNoqHcif30SutD2u-yyxpMqul6CAwaErUH-q50Tf0AdfhI5qOW7q8eBVeEt9QHQndcCOyjdS5OTWorjaKSvlKg94stVSXECNXVn0JKNm9II=w2400"
                className="home-image03"
              />
            </div>
          </div>
          <div className="home-images11">
            <div className="home-container05">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87nCemk_KlYQvRO0HAzoSr_T7Cq3JecFDD8RXz2ORPiUSvAvxY-RZ83caHgmSzCsGisAaQDRUiyDjLyped4mCxk72L1viISzkOl7YtwnIj08b-gISU=w2400"
                className="home-image04"
              />
            </div>
            <div className="home-container06">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV86CiE8HYNoqHcif30SutD2u-yyxpMqul6CAwaErUH-q50Tf0AdfhI5qOW7q8eBVeEt9QHQndcCOyjdS5OTWorjaKSvlKg94stVSXECNXVn0JKNm9II=w2400"
                className="home-image05"
              />
            </div>
          </div>
          <div className="home-images12">
            <div className="home-container07">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV84MAy78KGLm0_v7zUj6siSJ0vMDmN_Mb5TpmhMM1P_S3iycbJyxlZEWJhkKIlxtPBhi7v38FJxL9s8t79Ns0Dfvyxj7RkdZDyUV1Xj0FSp21zgkioY=w2400"
                className="home-image06"
              />
            </div>
            <div className="home-container08">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87MIrGYFVhDoJPVl78vEBmnROtjqsBld4Qeo1BBcp65TjbIQpQORCaJLkkc2Npwaph9GfVqvkr8tWG6flFL_QPyFLCmPGtkrC5iu_Vi7QnoJFT1-bs=w2400"
                className="home-image07"
              />
            </div>
            <div className="home-container09">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85q3l_QEx1Y79pzLtKAXMExN1pUsfNuWwSnBP7vQT9CgL-6FerGEgPWWBKk4aIAG2z2h9z5FaWr1uVpLDihI_qqJ3G59e4sNSrClO1b4RS_geRWthA=w2400"
                className="home-image08"
              />
            </div>
            <div className="home-container10">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85vL0499FA_B5tePctTYqSU12TqZCW0udL2ikXVQb5-1QJWSx2eD5CPGyLjkAJf0WNKtpuRe4RCnCooYMcQkKAC1J_1O2TtLt26_0ixTn0JN4n8jcM=w2400"
                className="home-image09"
              />
            </div>
          </div>
          <div className="home-images13">
            <div className="home-container11">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85q3l_QEx1Y79pzLtKAXMExN1pUsfNuWwSnBP7vQT9CgL-6FerGEgPWWBKk4aIAG2z2h9z5FaWr1uVpLDihI_qqJ3G59e4sNSrClO1b4RS_geRWthA=w2400"
                className="home-image10"
              />
            </div>
            <div className="home-container12">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85vL0499FA_B5tePctTYqSU12TqZCW0udL2ikXVQb5-1QJWSx2eD5CPGyLjkAJf0WNKtpuRe4RCnCooYMcQkKAC1J_1O2TtLt26_0ixTn0JN4n8jcM=w2400"
                className="home-image11"
              />
            </div>
          </div>
        </div>
        <Footer
          imageSrc="/munch_logo-200h.png"
          rootClassName="footer-root-class-name"
        ></Footer>
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="home-slider swiper"
        >
          <div
            data-thq="slider-wrapper"
            className="home-slider-wrapper swiper-wrapper"
          >
            <div
              data-thq="slider-slide"
              className="home-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide2 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide3 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide4 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide5 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide6 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="home-slider-slide7 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            position: relative;
            min-height: 100vh;
            background-color: #ffffe6;
          }
          .home-body {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 1408px;
          }
          .home-text {
            flex: 0 0 auto;
            width: 100%;
            height: 35%;
            display: flex;
            margin-top: 7.5%;
            align-items: flex-start;
            padding-left: 128px;
            padding-bottom: 64px;
          }
          .home-feature-card {
            top: 144px;
            float: left;
            width: 60%;
            height: 512px;
            padding: var(--dl-space-space-twounits);
            align-items: center;
          }
          .home-text01 {
            color: var(--dl-color-gray-black);
            align-self: flex-start;
            text-align: left;
            line-height: 1.75;
          }
          .home-link {
            font-style: normal;
            font-weight: 600;
          }
          .home-feature-card1 {
            top: 144px;
            width: 40%;
            margin: 0px;
            padding: var(--dl-space-space-twounits);
            align-items: center;
          }
          .home-text22 {
            color: var(--dl-color-gray-black);
            align-self: flex-start;
            text-align: left;
            line-height: 1.75;
          }
          .home-images1 {
            top: 47.5%;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 16%;
            margin: auto;
            display: none;
            position: absolute;
            align-items: flex-start;
            padding-left: 16px;
            padding-right: 16px;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image02 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image03 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-images11 {
            top: 47.5%;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 16%;
            margin: auto;
            display: none;
            position: absolute;
            align-items: flex-start;
            padding-left: 16px;
            padding-right: 16px;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image04 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image05 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-images12 {
            top: 65%;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 16%;
            margin: auto;
            display: none;
            position: absolute;
            align-items: flex-start;
            padding-left: 16px;
            padding-right: 16px;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image06 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image07 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image08 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image09 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-images13 {
            top: 65%;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 25%;
            margin: auto;
            display: none;
            position: absolute;
            align-items: flex-start;
            padding-left: 16px;
            padding-right: 16px;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image11 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-slider {
            top: 50%;
            left: 0px;
            right: 0px;
            width: 50%;
            height: 32.5%;
            display: inline-block;
            position: absolute;
          }
          .home-slider-wrapper {
            position: relative;
          }
          .home-slider-slide {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV849pMW8H-Z2vFsDO8yrw5mkHC1yi6036H3_7IWkgNDyAOESgSlnIFWde0d4eX6R0lQj5KXQb9FTBtGY_O3EjE9x3gaHuiNgkvki5Zf6HoezIiT2_w=w2400');
          }
          .home-slider-slide1 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV87Czn-mzI-5Q1azILW5OuOeXFAa67D8a_93YoIRxuAfmgAtDNm7MDAcofQdfbKi41TngKJeIXpZvH_IlDA4uDhHgwTICYtj_RjTZS3dxjtwEv5n0QY=w2400');
          }
          .home-slider-slide2 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV87nCemk_KlYQvRO0HAzoSr_T7Cq3JecFDD8RXz2ORPiUSvAvxY-RZ83caHgmSzCsGisAaQDRUiyDjLyped4mCxk72L1viISzkOl7YtwnIj08b-gISU=w2400');
          }
          .home-slider-slide3 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV86CiE8HYNoqHcif30SutD2u-yyxpMqul6CAwaErUH-q50Tf0AdfhI5qOW7q8eBVeEt9QHQndcCOyjdS5OTWorjaKSvlKg94stVSXECNXVn0JKNm9II=w2400');
          }
          .home-slider-slide4 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV84MAy78KGLm0_v7zUj6siSJ0vMDmN_Mb5TpmhMM1P_S3iycbJyxlZEWJhkKIlxtPBhi7v38FJxL9s8t79Ns0Dfvyxj7RkdZDyUV1Xj0FSp21zgkioY=w2400');
          }
          .home-slider-slide5 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV87MIrGYFVhDoJPVl78vEBmnROtjqsBld4Qeo1BBcp65TjbIQpQORCaJLkkc2Npwaph9GfVqvkr8tWG6flFL_QPyFLCmPGtkrC5iu_Vi7QnoJFT1-bs=w2400');
          }
          .home-slider-slide6 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV85q3l_QEx1Y79pzLtKAXMExN1pUsfNuWwSnBP7vQT9CgL-6FerGEgPWWBKk4aIAG2z2h9z5FaWr1uVpLDihI_qqJ3G59e4sNSrClO1b4RS_geRWthA=w2400');
          }
          .home-slider-slide7 {
            display: flex;
            background-size: 100%;
            background-image: url('https://lh3.googleusercontent.com/pw/ABLVV85vL0499FA_B5tePctTYqSU12TqZCW0udL2ikXVQb5-1QJWSx2eD5CPGyLjkAJf0WNKtpuRe4RCnCooYMcQkKAC1J_1O2TtLt26_0ixTn0JN4n8jcM=w2400');
          }
          .home-slider-pagination {
            display: block;
          }
          @media (max-width: 1600px) {
            .home-text {
              padding-left: 64px;
            }
            .home-images1 {
              top: 50%;
            }
            .home-images12 {
              top: 67.5%;
            }
          }
          @media (max-width: 1200px) {
            .home-body {
              min-height: 2304px;
            }
            .home-text {
              height: 32.5%;
              margin-top: 10%;
            }
            .home-images1 {
              top: 34%;
              height: 14%;
            }
            .home-container01 {
              width: 50%;
            }
            .home-container02 {
              width: 50%;
            }
            .home-container03 {
              display: none;
            }
            .home-container04 {
              display: none;
            }
            .home-images11 {
              top: 48%;
              height: 14%;
              display: flex;
            }
            .home-container05 {
              width: 50%;
            }
            .home-container06 {
              width: 50%;
            }
            .home-images12 {
              top: 62%;
              height: 14%;
            }
            .home-container07 {
              width: 50%;
            }
            .home-container08 {
              width: 50%;
            }
            .home-container09 {
              display: none;
            }
            .home-container10 {
              display: none;
            }
            .home-images13 {
              top: 76%;
              height: 14%;
              display: flex;
            }
            .home-container11 {
              width: 50%;
            }
            .home-container12 {
              width: 50%;
            }
          }
          @media (max-width: 991px) {
            .home-body {
              min-height: 2304px;
            }
            .home-text {
              padding-left: 16px;
            }
            .home-images1 {
              top: 37.5%;
              height: 12.5%;
            }
            .home-images11 {
              top: 50%;
              height: 12.5%;
            }
            .home-images12 {
              top: 62.5%;
              height: 12.5%;
            }
            .home-images13 {
              top: 75%;
              height: 12.5%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
