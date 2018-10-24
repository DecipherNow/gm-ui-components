import React from "react";
import { shallow } from "enzyme";

import IconMagnifier from "./IconMagnifier.svg";

describe("IconMagnifier", () => {
  it("matches snapshot", () => {
    const aIconMagnifier = shallow(<IconMagnifier />).find("IconMagnifier.svg");
    expect(aIconMagnifier).toMatchSnapshot();
  });
});