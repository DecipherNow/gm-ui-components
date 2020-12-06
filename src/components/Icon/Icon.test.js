import React from "react";

import Icon from "./Icon";

let iconProps = {
  ariaLabelledby: "IconCog",
  stroke: "white",
  strokeOpacity: 1,
  strokeWidth: 1,
  fill: "white",
  glyphName: "IconCog",
  size: "24px"
};
describe("Icon", () => {
  let tree;

  beforeEach(() => {
    tree = shallow(
      <Icon {...iconProps}>
        <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z" />
      </Icon>
    );
  });

  test("matches snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  test("renders children", () => {
    expect(tree.find("StyledSVG")).toHaveLength(1);
    expect(tree.find("g")).toHaveLength(1);
  });

  test("passes the correct props to StyledSVG", () => {
    expect(tree.find("StyledSVG").props()).toMatchObject({
      id: "IconCog"
    });
  });

  test("renders a g element with the correct class", () => {
    expect(tree.find("g").props()).toMatchObject({
      className: "glyph"
    });
  });

  test("renders children", () => {
    expect(tree.find("path")).toBeTruthy();
  });

  test("passes any additional props to StyledSVG", () => {
    iconProps.someOtherProp = "test";
    tree = shallow(<Icon {...iconProps} />);
    expect(tree.find("StyledSVG").props()).toMatchObject({
      someOtherProp: "test"
    });
  });
});
