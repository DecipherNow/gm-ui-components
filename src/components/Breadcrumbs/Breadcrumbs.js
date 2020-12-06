import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { IconChevronRight } from "components/Glyphs";

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

  > * {
    color: inherit;
    text-decoration: none;

    &:link:hover {
      text-decoration: underline;
    }
  }
`;

Breadcrumb.defaultProps = {
};

const DefaultDelimiter = styled(IconChevronRight).attrs({
  preserveAspectRatio: "none"
})`
  pointer-events: none;
  color: ${({ theme }) => theme.COLOR_CONTENT_NONESSENTIAL};
  width: 0.5em;
  height: 1em;
  margin: auto 0.25em;
`;

const EmptyDelimiter = styled.span`
  flex: 0 0 0.5em;
`;

function makeDelimiter(delimiter, i) {
  switch (delimiter) {
    case false:
      return <EmptyDelimiter key={"delimiter" + i} />;
    case undefined:
      return <DefaultDelimiter key={"delimiter" + i} />;
    default:
      return cloneElement(delimiter, { key: "delimiter" + i });
  }
}

function Breadcrumbs({ crumbs, delimiter, ...props }) {
  return (
    <BreadcrumbsWrap {...props}>
      {crumbs.map((crumb, i) => (
        <React.Fragment key={i}>
          {i > 0 && makeDelimiter(delimiter, i)}
          <Breadcrumb key={`${crumb}|${i}`}>{crumb}</Breadcrumb>
        </React.Fragment>
      ))}
    </BreadcrumbsWrap>
  );
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array,
  delimiter: PropTypes.oneOf([PropTypes.element, false])
};

Breadcrumbs.defaultProps = {
  crumbs: []
};

export default Breadcrumbs;
