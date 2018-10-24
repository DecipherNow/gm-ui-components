import React from "react";
import { shallow } from "enzyme";

import IconUserGroup from "./IconUserGroup.svg";

describe("IconUserGroup", () => {
  it("matches snapshot", () => {
    const aIconUserGroup = shallow(<IconUserGroup />).find("IconUserGroup.svg");
    expect(aIconUserGroup).toMatchSnapshot();
  });
});