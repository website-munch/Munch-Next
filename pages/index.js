import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Munch</title>
          <meta property="og:title" content="Munch" />
        </Head>
        <div className="home-container1">
          <Header rootClassName="header-root-class-name"></Header>
          <div className="home-container2">
            <div className="home-feature-card">
              <span className="home-text">
                <span>We are looking forward to having you at MUNCH 24. </span>
                <span>
                  It will take place on Saturday 5th - Sunday 6th October.
                </span>
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
              <span className="home-text20">
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
        </div>
        <Footer
          rootClassName="footer-root-class-name"
          imageSrc="/munch_logo-200h.png"
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            position: relative;
            min-height: 100vh;
            background-color: #ffffe6;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
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
          .home-text {
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
          .home-text20 {
            color: var(--dl-color-gray-black);
            align-self: flex-start;
            text-align: left;
            line-height: 1.75;
          }
        `}
      </style>
    </>
  )
}

export default Home
