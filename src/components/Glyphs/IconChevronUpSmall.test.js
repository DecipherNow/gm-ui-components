import React from "react";
import { shallow } from "enzyme";

import IconChevronUpSmall from "./IconChevronUpSmall.svg";

describe("IconChevronUpSmall", () => {
  it("matches snapshot", () => {
    const aIconChevronUpSmall = shallow(<IconChevronUpSmall />).find("IconChevronUpSmall.svg");
    expect(aIconChevronUpSmall).toMatchSnapshot();
  });
});