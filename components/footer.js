import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-container">
          <img
            src={props.imageSrc}
            alt={props.imageAlt}
            className="footer-image"
          />
          <div className="footer-container1">
            <span className="footer-text">
              <span>© 2024 Oliver Burgess</span>
              <br></br>
              <span> All Rights Reserved.</span>
            </span>
            <div className="footer-icon-group">
              <a
                href="https://twitter.com/CHS_MUNCH"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="footer-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/chs_munch23"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="footer-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="footer-icon4"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text04">{props.text}</span>
            <span className="footer-text05">{props.text1}</span>
            <span className="footer-text06">{props.text2}</span>
            <span className="footer-text07">{props.text3}</span>
            <span>{props.text4}</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text09">{props.text5}</span>
            <span className="footer-text10">{props.text6}</span>
            <span className="footer-text11">{props.text7}</span>
            <span className="footer-text12">{props.text8}</span>
            <span>{props.text9}</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text14">{props.text10}</span>
            <span className="footer-text15">{props.text11}</span>
            <span className="footer-text16">{props.text12}</span>
            <span className="footer-text17">{props.text13}</span>
            <span>{props.text14}</span>
          </div>
          <div className="footer-container6">
            <span className="footer-text19">{props.text15}</span>
            <span className="footer-text20">{props.text16}</span>
            <span className="footer-text21">{props.text17}</span>
            <span className="footer-text22">{props.text18}</span>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            height: 224px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .footer-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-image {
            width: 200px;
            object-fit: cover;
          }
          .footer-container1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link {
            display: contents;
          }
          .footer-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-icon4 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text04 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text09 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text14 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text15 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text16 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text17 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-container6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text19 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-text20 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text22 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-root-class-name {
            top: 77.5%;
            left: 0px;
            right: 0px;
            width: var(--dl-size-size-maxwidth);
            height: 22.5%;
            position: absolute;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: auto;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
          }
          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container1 {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container4 {
              margin-right: 0px;
            }
            .footer-container6 {
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-container3 {
              margin-right: var(--dl-space-space-unit);
            }
            .footer-container4 {
              align-self: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageSrc: '/munch_logo-200h.png',
  imageAlt: 'image',
  text: 'MUNCH 24',
  text1: 'Committees',
  text2: 'Timetable',
  text3: 'Country Allocation',
  text4: 'Briefing Papers',
  text5: 'People',
  text6: 'Officials',
  text7: 'Chairs',
  text8: 'Press',
  text9: 'Infrastructure\n',
  text10: 'Information',
  text11: 'Advisors',
  text12: 'Delegates',
  text13: 'Charity',
  text14: '',
  text15: 'Support',
  text16: 'Contact',
  text17: 'Privacy Policy',
  text18: 'Technical Support',
  linkIcon: 'https://twitter.com/CHS_MUNCH',
  linkIcon1: 'https://instagram.com/chs_munch23',
  rootClassName: '',
}

Footer.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  text17: PropTypes.string,
  text18: PropTypes.string,
  linkIcon: PropTypes.string,
  linkIcon1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
