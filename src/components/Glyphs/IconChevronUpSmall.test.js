import React from "react";
import { shallow } from "enzyme";

import IconChevronUpSmall from "./IconChevronUpSmall";

describe("IconChevronUpSmall", () => {
  it("matches snapshot", () => {
    const aIconChevronUpSmall = shallow(<IconChevronUpSmall />);
    expect(aIconChevronUpSmall).toMatchSnapshot();
  });
});