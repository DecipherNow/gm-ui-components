import React, { useState } from "react";
import { PropTypes } from "prop-types";
import styled, { css } from "styled-components";

import { IconArrowRight } from "components/Glyphs";
import {
  keen,
  FONT_STACK_BASE,
  COLOR_KEYLINE,
  FONT_SIZE_XS
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

/**
 * A single Collapse item
 */
export default function Collapse({
  opener,
  title,
  detail,
  children,
  initiallyCollapsed,
  ...props
}) {
  const [collapsed, setCollapsed] = useState(initiallyCollapsed);
  const [bodyHeight, setBodyHeight] = useState(0);
  const OpenerComponent = opener || <IconArrowRight />;
  const contentRef = React.createRef();

  const onClick = () => {
    console.log("onclick");
    let contentHeight = 0;
    if (collapsed) {
      let content = contentRef.current.children[0];
      contentHeight = content ? content.getBoundingClientRect().height : 0;
    }
    setBodyHeight(contentHeight);
    setCollapsed(!collapsed);
  };

  return (
    <Wrapper {...props}>
      <Header onClick={onClick}>
        <Opener collapsed={collapsed}>{OpenerComponent}</Opener>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Header>
      <Body collapsed={collapsed} innerRef={contentRef} bodyHeight={bodyHeight}>
        {children}
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  font-family: ${FONT_STACK_BASE};
  border-top: 1px solid ${COLOR_KEYLINE};
  height: 100%;
`;

const Header = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacingScale(1)} 0;
`;

const Body = styled.div`
  overflow: hidden;
  transition: all 0.5s ease;
  ${({ collapsed }) =>
    collapsed &&
    css`
      height: 0px;
    `};
  height: ${({ bodyHeight }) => bodyHeight}px;
`;

const Opener = styled.div`
  ${({ collapsed }) =>
    !collapsed &&
    css`
      transform: rotate(90deg);
    `};
`;

const Title = styled.div`
  margin-right: auto;
`;

const Detail = styled.div`
  font-size: ${FONT_SIZE_XS};
  text-transform: uppercase;
`;

Collapse.defaultProps = {
  initiallyCollapsed: true,
  theme: keen
};

Collapse.propTypes = {
  children: PropTypes.element.isRequired,
  detail: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  initiallyCollapsed: PropTypes.bool,
  opener: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ])
};

Collapse.displayName = "Collapse";
