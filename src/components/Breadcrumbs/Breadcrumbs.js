import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { theme } from "style/theme";
import { spacingScale } from "style/styleFunctions";

export const BreadcrumbsWrap = styled.ol`
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE_TEXT_SM};
  flex: 1 1 auto;
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
  height: inherit;
  align-items: stretch;
  flex-wrap: nowrap;
`;

BreadcrumbsWrap.defaultProps = {
};

export const Breadcrumb = styled.li`
  flex: 0 1 auto;
  overflow: hidden;
  min-width: 2.5em;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    flex-shrink: 0;
  }

  &:before {
    display: inline-block;
    visibility: ${({ hideDelimiter }) => (hideDelimiter ? "hidden" : "auto")};
    color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
    padding: 0 ${spacingScale(0.5)};
    content: ">";
    transform: scaleX(0.5);
  }

  > * {
    color: inherit;
    text-decoration: none;

    &:link:hover {
      text-decoration: underline;
    }
  }

  &:first-child {
    &:before {
      content: none;
    }
  }
`;

Breadcrumb.defaultProps = {
};

function Breadcrumbs({ crumbs, hideDelimiter, ...props }) {
  return (
    <BreadcrumbsWrap {...props}>
      {crumbs.map((crumb, i) => (
        <Breadcrumb hideDelimiter={hideDelimiter} key={`${crumb}|${i}`}>
          {crumb}
        </Breadcrumb>
      ))}
    </BreadcrumbsWrap>
  );
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array,
  hideDelimiter: PropTypes.bool
};

Breadcrumbs.defaultProps = {
  crumbs: [],
  hideDelimiter: false
};

export default Breadcrumbs;
