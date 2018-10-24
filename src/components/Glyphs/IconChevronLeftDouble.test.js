import React from "react";
import { shallow } from "enzyme";

import IconChevronLeftDouble from "./IconChevronLeftDouble.svg";

describe("IconChevronLeftDouble", () => {
  it("matches snapshot", () => {
    const aIconChevronLeftDouble = shallow(<IconChevronLeftDouble />).find("IconChevronLeftDouble.svg");
    expect(aIconChevronLeftDouble).toMatchSnapshot();
  });
});