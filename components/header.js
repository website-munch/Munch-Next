import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'

const Header = (props) => {
  return (
    <>
      <header
        data-role="Accordion"
        className={`header-header ${props.rootClassName} `}
      >
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="header-image"
        />
        <nav className="header-nav">
          <NavigationLinks rootClassName="rootClassName19"></NavigationLinks>
        </nav>
        <div data-role="AccordionHeader" className="header-accordion-header">
          <svg viewBox="0 0 1024 1024" className="header-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="AccordionContent" className="header-accordion-content">
          <div className="header-nav1">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .header-header {
            width: auto;
            height: 10%;
            display: flex;
            position: relative;
            max-width: auto;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .header-image {
            height: var(--dl-size-size-small);
          }
          .header-nav {
            padding-top: 24px;
          }
          .header-accordion-header {
            display: none;
            align-items: center;
            flex-direction: column;
          }
          .header-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
          }
          .header-accordion-content {
            display: none;
            overflow: hidden;
            max-height: 0;
            transition: 0.3s ease-in-out;
            align-items: center;
            flex-direction: column;
          }
          .header-nav1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .header-root-class-name {
            top: 0px;
            left: 0px;
            right: 0px;
            height: auto;
            margin: auto;
            position: absolute;
          }
          @media (max-width: 1200px) {
            .header-header {
              height: 7.5%;
            }
          }
          @media (max-width: 991px) {
            .header-header {
              height: 5%;
            }
            .header-nav1 {
              padding-top: 16px;
            }
          }
          @media (max-width: 767px) {
            .header-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-icon {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-header {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  imageSrc: '/munch_logo-200h.png',
  rootClassName: '',
  imageAlt: 'logo',
}

Header.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Header
