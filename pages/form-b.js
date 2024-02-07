import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const FormB = (props) => {
  return (
    <>
      <div className="form-b-container">
        <Head>
          <title>Form-B - MUNCH</title>
          <meta
            name="description"
            content="Model United Nations at Cheadle Hulme"
          />
          <meta property="og:title" content="Form-B - MUNCH" />
          <meta
            property="og:description"
            content="Model United Nations at Cheadle Hulme"
          />
        </Head>
        <div className="form-b-body">
          <Header rootClassName="header-root-class-name1"></Header>
          <div className="form-b-text">
            <div className="form-b-container01">
              <div className="form-b-container02">
                <Script
                  html={`<form id="fileForm">
    <input type="file" id="uploadedFile">
</form>
<script>
    file = document.getElementById("uploadedFile");
    google.script.run.uploadFile(file);
</script>`}
                ></Script>
              </div>
            </div>
          </div>
          <div className="form-b-images1">
            <div className="form-b-container03">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV849pMW8H-Z2vFsDO8yrw5mkHC1yi6036H3_7IWkgNDyAOESgSlnIFWde0d4eX6R0lQj5KXQb9FTBtGY_O3EjE9x3gaHuiNgkvki5Zf6HoezIiT2_w=w2400"
                className="form-b-image"
              />
            </div>
            <div className="form-b-container04">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87Czn-mzI-5Q1azILW5OuOeXFAa67D8a_93YoIRxuAfmgAtDNm7MDAcofQdfbKi41TngKJeIXpZvH_IlDA4uDhHgwTICYtj_RjTZS3dxjtwEv5n0QY=w2400"
                className="form-b-image01"
              />
            </div>
            <div className="form-b-container05">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87nCemk_KlYQvRO0HAzoSr_T7Cq3JecFDD8RXz2ORPiUSvAvxY-RZ83caHgmSzCsGisAaQDRUiyDjLyped4mCxk72L1viISzkOl7YtwnIj08b-gISU=w2400"
                className="form-b-image02"
              />
            </div>
            <div className="form-b-container06">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV86CiE8HYNoqHcif30SutD2u-yyxpMqul6CAwaErUH-q50Tf0AdfhI5qOW7q8eBVeEt9QHQndcCOyjdS5OTWorjaKSvlKg94stVSXECNXVn0JKNm9II=w2400"
                className="form-b-image03"
              />
            </div>
          </div>
          <div className="form-b-images11">
            <div className="form-b-container07">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87nCemk_KlYQvRO0HAzoSr_T7Cq3JecFDD8RXz2ORPiUSvAvxY-RZ83caHgmSzCsGisAaQDRUiyDjLyped4mCxk72L1viISzkOl7YtwnIj08b-gISU=w2400"
                className="form-b-image04"
              />
            </div>
            <div className="form-b-container08">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV86CiE8HYNoqHcif30SutD2u-yyxpMqul6CAwaErUH-q50Tf0AdfhI5qOW7q8eBVeEt9QHQndcCOyjdS5OTWorjaKSvlKg94stVSXECNXVn0JKNm9II=w2400"
                className="form-b-image05"
              />
            </div>
          </div>
          <div className="form-b-images12">
            <div className="form-b-container09">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV84MAy78KGLm0_v7zUj6siSJ0vMDmN_Mb5TpmhMM1P_S3iycbJyxlZEWJhkKIlxtPBhi7v38FJxL9s8t79Ns0Dfvyxj7RkdZDyUV1Xj0FSp21zgkioY=w2400"
                className="form-b-image06"
              />
            </div>
            <div className="form-b-container10">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV87MIrGYFVhDoJPVl78vEBmnROtjqsBld4Qeo1BBcp65TjbIQpQORCaJLkkc2Npwaph9GfVqvkr8tWG6flFL_QPyFLCmPGtkrC5iu_Vi7QnoJFT1-bs=w2400"
                className="form-b-image07"
              />
            </div>
            <div className="form-b-container11">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85q3l_QEx1Y79pzLtKAXMExN1pUsfNuWwSnBP7vQT9CgL-6FerGEgPWWBKk4aIAG2z2h9z5FaWr1uVpLDihI_qqJ3G59e4sNSrClO1b4RS_geRWthA=w2400"
                className="form-b-image08"
              />
            </div>
            <div className="form-b-container12">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85vL0499FA_B5tePctTYqSU12TqZCW0udL2ikXVQb5-1QJWSx2eD5CPGyLjkAJf0WNKtpuRe4RCnCooYMcQkKAC1J_1O2TtLt26_0ixTn0JN4n8jcM=w2400"
                className="form-b-image09"
              />
            </div>
          </div>
          <div className="form-b-images13">
            <div className="form-b-container13">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85q3l_QEx1Y79pzLtKAXMExN1pUsfNuWwSnBP7vQT9CgL-6FerGEgPWWBKk4aIAG2z2h9z5FaWr1uVpLDihI_qqJ3G59e4sNSrClO1b4RS_geRWthA=w2400"
                className="form-b-image10"
              />
            </div>
            <div className="form-b-container14">
              <img
                alt="image"
                src="https://lh3.googleusercontent.com/pw/ABLVV85vL0499FA_B5tePctTYqSU12TqZCW0udL2ikXVQb5-1QJWSx2eD5CPGyLjkAJf0WNKtpuRe4RCnCooYMcQkKAC1J_1O2TtLt26_0ixTn0JN4n8jcM=w2400"
                className="form-b-image11"
              />
            </div>
          </div>
        </div>
        <Footer
          imageSrc="/munch_logo-200h.png"
          rootClassName="footer-root-class-name1"
        ></Footer>
      </div>
      <style jsx>
        {`
          .form-b-container {
            width: 100%;
            position: relative;
            min-height: 100vh;
            background-color: #ffffe6;
          }
          .form-b-body {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 1408px;
          }
          .form-b-text {
            flex: 0 0 auto;
            width: 100%;
            height: 35%;
            display: flex;
            margin-top: 7.5%;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 64px;
            padding-bottom: 32px;
          }
          .form-b-container01 {
            left: 0px;
            right: 0px;
            height: 32px;
            position: absolute;
          }
          .form-b-container02 {
            display: contents;
          }
          .form-b-images1 {
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
          .form-b-container03 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container04 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container05 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image02 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container06 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image03 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-images11 {
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
          .form-b-container07 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image04 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container08 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image05 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-images12 {
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
          .form-b-container09 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image06 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container10 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image07 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container11 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image08 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container12 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image09 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-images13 {
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
          .form-b-container13 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-b-container14 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .form-b-image11 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          @media (max-width: 1600px) {
            .form-b-text {
              padding-left: 64px;
            }
            .form-b-images1 {
              top: 50%;
            }
            .form-b-images12 {
              top: 67.5%;
            }
          }
          @media (max-width: 1200px) {
            .form-b-body {
              min-height: 2304px;
            }
            .form-b-text {
              height: 32.5%;
              margin-top: 10%;
            }
            .form-b-images1 {
              top: 34%;
              height: 14%;
            }
            .form-b-container03 {
              width: 50%;
            }
            .form-b-container04 {
              width: 50%;
            }
            .form-b-container05 {
              display: none;
            }
            .form-b-container06 {
              display: none;
            }
            .form-b-images11 {
              top: 48%;
              height: 14%;
              display: flex;
            }
            .form-b-container07 {
              width: 50%;
            }
            .form-b-container08 {
              width: 50%;
            }
            .form-b-images12 {
              top: 62%;
              height: 14%;
            }
            .form-b-container09 {
              width: 50%;
            }
            .form-b-container10 {
              width: 50%;
            }
            .form-b-container11 {
              display: none;
            }
            .form-b-container12 {
              display: none;
            }
            .form-b-images13 {
              top: 76%;
              height: 14%;
              display: flex;
            }
            .form-b-container13 {
              width: 50%;
            }
            .form-b-container14 {
              width: 50%;
            }
          }
          @media (max-width: 991px) {
            .form-b-body {
              min-height: 2304px;
            }
            .form-b-text {
              padding-left: 16px;
            }
            .form-b-images1 {
              top: 37.5%;
              height: 12.5%;
            }
            .form-b-images11 {
              top: 50%;
              height: 12.5%;
            }
            .form-b-images12 {
              top: 62.5%;
              height: 12.5%;
            }
            .form-b-images13 {
              top: 75%;
              height: 12.5%;
            }
          }
        `}
      </style>
    </>
  )
}

export default FormB
