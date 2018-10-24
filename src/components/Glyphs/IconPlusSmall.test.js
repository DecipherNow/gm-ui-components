import React from "react";
import { shallow } from "enzyme";

import IconPlusSmall from "./IconPlusSmall.svg";

describe("IconPlusSmall", () => {
  it("matches snapshot", () => {
    const aIconPlusSmall = shallow(<IconPlusSmall />).find("IconPlusSmall.svg");
    expect(aIconPlusSmall).toMatchSnapshot();
  });
});