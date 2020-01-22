import React from "react";
import PropTypes from "prop-types";

import { keen } from "style/theme";
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
        href: "http://deciphernow.com",
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
          href="http://github.com/DecipherNow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Github"
        >
          <IconGitHub fillOpacity="1" borderWidth="0" />
        </Link>
        <Link
          href="http://twitter.com/deciphernow"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios Twitter"
        >
          <IconTwitter fillOpacity="1" borderWidth="0" />
        </Link>
        <Link
          href="http://www.linkedin.com/company/decipher-technology-studios"
          rel="noopener noreferrer"
          target="_blank"
          title="Decipher Technology Studios LinkedIn"
        >
          <IconLinkedIn fillOpacity="1" borderWidth="0" />
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
  useExternalLinks: true,
  theme: keen
};

AppFooter.displayName = "AppFooter";

export default AppFooter;
