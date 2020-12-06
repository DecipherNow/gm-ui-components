import React from "react";
import PropTypes from "prop-types";

import { theme } from "style/theme";
import { node } from "../util/PropTypes";

import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Link from "./components/Link";
import { IconTwitter, IconGitHub, IconLinkedIn } from "components/Glyphs";
import LongLogo from "./components/LongLogo";

import LongLogoImg from "./assets/greymatter-logo.js";
/**
 * Stateless functional React component that renders company branding and social media footer content
 * @returns JSX.Element
 */
function AppFooter({
  copyrightText,
  useExternalLinks,
  footerLeft,
  footerCenter,
  footerRight,
  children,
  ...props
}) {
  const logoProps = useExternalLinks
    ? {
        href: "http://greymatter.io",
        rel: "noopener noreferrer",
        target: "_blank"
      }
    : {};

  const FooterLeftContent = () =>
    footerLeft || (
      <LongLogo {...logoProps} title="Decipher Technology Studios website">
        <LongLogoImg alt="Decipher Technology Studios Logo" />
      </LongLogo>
    );

  const FooterCenterContent = () =>
    footerCenter || (
      <Copyright useExternalLinks={useExternalLinks}>{copyrightText}</Copyright>
    );

  const FooterRightContent = () =>
    footerRight ||
    (useExternalLinks && (
      <Links>
        <Link
          href="http://github.com/greymatter-io"
          rel="noopener noreferrer"
          target="_blank"
          title="Grey Matter Github"
        >
          <IconGitHub fillOpacity="1" strokeWidth="0" />
        </Link>
        <Link
          href="http://twitter.com/greymatterio"
          rel="noopener noreferrer"
          target="_blank"
          title="Grey Matter Twitter"
        >
          <IconTwitter fillOpacity="1" strokeWidth="0" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/greymatterio"
          rel="noopener noreferrer"
          target="_blank"
          title="Grey Matter LinkedIn"
        >
          <IconLinkedIn fillOpacity="1" strokeWidth="0" />
        </Link>
      </Links>
    ));

  const footerContent = children || (
    <>
      <FooterLeftContent />
      <FooterCenterContent />
      <FooterRightContent />
    </>
  );

  return <Footer {...props}>{footerContent}</Footer>;
}

AppFooter.propTypes = {
  children: node,
  copyrightText: node,
  footerCenter: node,
  footerLeft: node,
  footerRight: node,
  useExternalLinks: PropTypes.bool
};

const CURRENT_YEAR = new Date().getFullYear();

AppFooter.defaultProps = {
  copyrightText: `TM and \u00A9 ${CURRENT_YEAR} Decipher Technology Studios`,
  useExternalLinks: true
};

AppFooter.displayName = "AppFooter";

export default AppFooter;
